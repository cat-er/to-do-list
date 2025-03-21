import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { markAllDone } from "@/store/todo";
import { Button, Checkbox } from "antd";
import MarkAllDone from "./components/actionButtons/MarkAllDone";

const ActionButtons = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  // const markAllDoneHandle = () => {
  //   dispatch(markAllDone());
  // };

  const todoData = useAppSelector((state) => state.todoStore.todoData);

  return <MarkAllDone />;
};

export default ActionButtons;
