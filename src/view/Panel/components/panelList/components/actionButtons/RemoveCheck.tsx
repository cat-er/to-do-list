import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { removeCheck } from "@/store/todo";
import { useAppDispatch } from "@/hooks/useRedux";

const RemoveCheck = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const handleRemoveCheck = () => {
    dispatch(removeCheck());
  };
  return (
    <Button
      danger
      type="text"
      iconPosition="end"
      icon={<DeleteOutlined />}
      onClick={handleRemoveCheck}
    >
      {t("remove")}
    </Button>
  );
};

export default RemoveCheck;
