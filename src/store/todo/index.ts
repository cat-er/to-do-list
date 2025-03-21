import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getId } from "@/utils/common";
import { TodoStorageKeyEnum } from "@/types/enum/localStorage";
import type { TodoData, TodoStoreState } from "./types";
import { PanelTypeEnum } from "@/view/Panel/types/enums";

// 辅助函数 todoData持久化
const setTodoDataToStorage = (todoData: TodoData[]) => {
  localStorage.setItem(TodoStorageKeyEnum.TODO, JSON.stringify(todoData));
};

const getTodoDataFromStorage = (): TodoData[] => {
  return JSON.parse(localStorage.getItem(TodoStorageKeyEnum.TODO) || "[]");
};

// 初始化state
const initialState: TodoStoreState = {
  todoData: [],
  // 控制面板状态
  currentPanelType: PanelTypeEnum.ALL
};

// 定义store
export const todoStore = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearDeleteData: (state) => {
      state.todoData = state.todoData.filter((item) => !item.isDelete);
    },
    initTodoData: (state) => {
      state.todoData = getTodoDataFromStorage();
      state.todoData = state.todoData.filter((item) => !item.isDelete);
      setTodoDataToStorage(state.todoData);
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoData.push({
        id: getId(),
        text: action.payload,
        isDone: false,
        isDelete: false
      });
      setTodoDataToStorage(state.todoData);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todoData.findIndex((item) => item.id === action.payload);
      if (index === -1) return;
      state.todoData[index].isDelete = true;
      setTodoDataToStorage(state.todoData);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todoData = state.todoData.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      setTodoDataToStorage(state.todoData);
    },
    markAllDone: (state, action: PayloadAction<boolean>) => {
      if (!state.todoData.length) return;
      // state.todoData = state.todoData.map((item) => {
      //   item.isDone = action.payload;
      //   return item;
      // });
      if (state.currentPanelType === PanelTypeEnum.TRASH) {
        state.todoData = state.todoData.map((item) => {
          if (item.isDelete) {
            item.isDone = action.payload;
          }
          return item;
        });
      } else {
        state.todoData = state.todoData.map((item) => {
          if (!item.isDelete) {
            item.isDone = action.payload;
          }
          return item;
        });
      }
      setTodoDataToStorage(state.todoData);
    },
    // 回收站撤销
    revocation: (state, action: PayloadAction<number>) => {
      const index = state.todoData.findIndex((item) => item.id === action.payload);
      if (index === -1) return;
      state.todoData[index].isDelete = false;
      setTodoDataToStorage(state.todoData);
    },
    setCurrentPanelType: (state, action: PayloadAction<PanelTypeEnum>) => {
      state.currentPanelType = action.payload;
    },
    removeCheck: (state) => {
      state.todoData = state.todoData.map((item) => {
        if (item.isDone) {
          item.isDelete = true;
        }
        return item;
      });
    }
  }
});

export const {
  initTodoData,
  addTodo,
  removeTodo,
  toggleTodo,
  markAllDone,
  revocation,
  setCurrentPanelType,
  removeCheck
} = todoStore.actions;

export default todoStore.reducer;
