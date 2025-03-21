import { selectCompleteCount, selectRenderList } from "@/store/todo/reselect";
import { markAllDone } from "@/store/todo";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { Button, Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const MarkAllDone = () => {
  const { t } = useTranslation();

  const completeCount = useAppSelector(selectCompleteCount);
  const renderList = useAppSelector(selectRenderList);
  const dispatch = useAppDispatch();

  const indeterminate = completeCount > 0 && completeCount < renderList.length;
  const checkAll = completeCount === renderList.length && !!renderList.length;

  // 处理 Checkbox 变化
  const handleAllDone: CheckboxProps["onChange"] = (e) => {
    dispatch(markAllDone(e.target.checked));
  };

  // 处理 Button 点击（手动触发 Checkbox）
  const handleButtonClick = () => {
    dispatch(markAllDone(!checkAll)); // 取反当前状态
  };

  return (
    <Button type="text" onClick={handleButtonClick}>
      {t("check_all")}
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={handleAllDone}
        onClick={(e) => e.stopPropagation()} // 防止点击 Checkbox 时同时触发 Button
      />
    </Button>
  );
};

export default MarkAllDone;
