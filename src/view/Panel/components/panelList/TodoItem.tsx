import { Checkbox, Button } from "antd";
import { DeleteOutlined, RollbackOutlined } from "@ant-design/icons";
import type { TodoData } from "@/store/todo/types";
import { PanelTypeEnum } from "@/view/Panel/types/enums";

interface Props {
  todoData: TodoData;
  currentPanelType: PanelTypeEnum;
  onRemove: (id: number) => void;
  onRevocation: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todoData, onRemove, onRevocation, onToggle }) => {
  const { id, text, isDone, isDelete } = todoData;

  const [leave, setLeave] = useState(false);

  const icon = isDelete ? <RollbackOutlined /> : <DeleteOutlined />;

  const handleClick = () => {
    const fn = isDelete ? onRevocation : onRemove;
    fn(id);
  };

  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <Checkbox checked={isDone} onChange={() => onToggle(id)} />

        <div className={`todo-item-content ${isDone ? "done" : ""}`}>{text}</div>
      </div>

      <Button type="text" danger={!isDelete} icon={icon} onClick={handleClick}></Button>
    </div>
  );
};

export default TodoItem;
