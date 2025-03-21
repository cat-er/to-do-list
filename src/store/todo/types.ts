import { PanelTypeEnum } from "@/view/Panel/types/enums";

export interface TodoData {
  id: number;
  text: string;
  isDone: boolean;
  isDelete: boolean;
}

export interface TodoStoreState {
  todoData: TodoData[];
  currentPanelType: PanelTypeEnum;
}
