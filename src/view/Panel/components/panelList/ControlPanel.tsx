import {} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", label: "全部" },
  { key: "2", label: "进行中" },
  { key: "3", label: "已完成" },
  { key: "4", label: "回收站" },
];

const ControlPanel = () => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="control-panel">
      <Menu onClick={onClick} defaultOpenKeys={["sub1"]} selectedKeys={[current]} items={items} />
    </div>
  );
};

export default ControlPanel;
