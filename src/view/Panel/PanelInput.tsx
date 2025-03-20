import { Button, Input, Form, Space } from "antd";
import type { Rule, FormProps } from "antd/lib/form";
import { useAppDispatch } from "@/hooks/useRedux";
import { addTodo } from "@/store/todo";
import { useTranslation } from "react-i18next";

type FieldType = {
  task: string;
};

const PanelInput = () => {
  const { t } = useTranslation();

  const rules: Record<string, Rule[]> = {
    task: [
      {
        required: true,
        message: t("panel_input_required")
      }
    ]
  };

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(addTodo(values.task));
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item<FieldType> name="task" rules={rules.task}>
        <Space.Compact block>
          <Input size="large" placeholder={t("panel_input_placeholder")} allowClear />
          <Button type="primary" htmlType="submit" size="large">
            {t("submit")}
          </Button>
        </Space.Compact>
      </Form.Item>
    </Form>
  );
};

export default PanelInput;
