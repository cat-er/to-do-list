import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { markAllDone } from "@/store/todo";
import { Button, Checkbox } from "antd";

const ActionButtons = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const markAllDoneHandle = () => {
    dispatch(markAllDone());
  };

  const todoData = useAppSelector((state) => state.todoStore.todoData);

  return (
    <Button type="text">
      全选
      <Checkbox />
    </Button>
  );
};

export default ActionButtons;
