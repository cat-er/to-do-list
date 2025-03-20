import { useChangeLng } from "@/i18n/hooks/useChangeLng";
import { I18nEnum } from "@/i18n/enums";
import { TranslationOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: I18nEnum.CN,
    label: "中文"
  },
  {
    key: I18nEnum.EN,
    label: "English"
  }
];

const TopBar = () => {
  const { t } = useTranslation();
  const { language, changeLng } = useChangeLng();

  const dropdownMenu: MenuProps = {
    items,
    selectable: true,
    defaultSelectedKeys: [language],
    onClick: ({ key }) => changeLng(key as I18nEnum)
  };

  return (
    <div className="top-bar">
      <Dropdown menu={dropdownMenu}>
        <Button type="text" size="large" iconPosition="end" icon={<TranslationOutlined />}>
          {t("language")}
        </Button>
      </Dropdown>
    </div>
  );
};

export default TopBar;
