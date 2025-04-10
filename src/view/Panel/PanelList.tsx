import TodoItemList from "./components/panelList/TodoItemList";
import ActionButtons from "./components/panelList/ActionButtons";
import ControlPanel from "./components/panelList/ControlPanel";
import { useAppDispatch } from "@/hooks/useRedux";
import { initTodoData } from "@/store/todo";

import { Card } from "antd";

const PanelList = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initTodoData());
  }, []);

  const title = `${t("panel_title")}☕`;

  return (
    <div className="panel-list">
      <Card title={title} extra={<ActionButtons />}>
        <TodoItemList />
      </Card>
      <ControlPanel />
    </div>
  );
};

export default PanelList;
