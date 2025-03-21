import {} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { PanelTypeEnum } from "@/view/Panel/types/enums";
import { useAppDispatch } from "@/hooks/useRedux";
import { setCurrentPanelType } from "@/store/todo";

type MenuItem = Required<MenuProps>["items"][number];

const ControlPanel = () => {
  const { t } = useTranslation();

  const [current, setCurrent] = useState("all");

  const items: MenuItem[] = [
    { key: PanelTypeEnum.ALL, label: t("control_panel.all") },
    { key: PanelTypeEnum.ACTIVE, label: t("control_panel.active") },
    { key: PanelTypeEnum.COMPLETED, label: t("control_panel.completed") },
    { key: PanelTypeEnum.TRASH, label: t("control_panel.trash") }
  ];

  const dispatch = useAppDispatch();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    dispatch(setCurrentPanelType(e.key as PanelTypeEnum));
  };

  return (
    <div className="control-panel">
      <Menu selectedKeys={[current]} items={items} onClick={onClick} />
    </div>
  );
};

export default ControlPanel;
