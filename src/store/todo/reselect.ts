import { createSelector } from "reselect";
import { RootState } from "../index";
import { PanelTypeEnum } from "@/view/Panel/types/enums";

// 选择 todo 数据
const selectTodoData = (state: RootState) => state.todoStore.todoData;

// 选择 currentPanelType
const selectCurrentPanelType = (state: RootState) => state.todoStore.currentPanelType;

// 根据 currentPanelType 派生列表数据
export const selectRenderList = createSelector(
  [selectTodoData, selectCurrentPanelType],
  (todoData, currentPanelType) => {
    const noDeleteList = todoData.filter((item) => !item.isDelete);
    const deleteList = todoData.filter((item) => item.isDelete);

    switch (currentPanelType) {
      case PanelTypeEnum.ALL:
        return noDeleteList;
      case PanelTypeEnum.ACTIVE:
        return noDeleteList.filter((item) => !item.isDone);
      case PanelTypeEnum.COMPLETED:
        return noDeleteList.filter((item) => item.isDone);
      case PanelTypeEnum.TRASH:
        return deleteList;
    }
  }
);

// 完成的 todo 数量（有缓存） 根据当前渲染列表返回
export const selectCompleteCount = createSelector(
  [selectRenderList],
  (renderList) => renderList.filter((item) => item.isDone).length
);
