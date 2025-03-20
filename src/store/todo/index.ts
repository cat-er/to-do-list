import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getId } from "@/utils/common";
import { TodoStorageKeyEnum } from "@/types/enum/localStorage";
import type { TodoData, TodoStoreState } from "./types";

// 辅助函数 todoData持久化
const setTodoDataToStorage = (todoData: TodoData[]) => {
  localStorage.setItem(TodoStorageKeyEnum.TODO, JSON.stringify(todoData));
};

const getTodoDataFromStorage = (): TodoData[] => {
  return JSON.parse(localStorage.getItem(TodoStorageKeyEnum.TODO) || "[]");
};

// 初始化state
const initialState: TodoStoreState = {
  todoData: []
};

// 定义store
export const todoStore = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initTodoData: (state) => {
      state.todoData = getTodoDataFromStorage();
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoData.push({
        id: getId(),
        text: action.payload,
        isDone: false
      });
      setTodoDataToStorage(state.todoData);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todoData = state.todoData.filter((item) => item.id !== action.payload);
      setTodoDataToStorage(state.todoData);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todoData = state.todoData.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      setTodoDataToStorage(state.todoData);
    },
    markAllDone: (state) => {
      if (!state.todoData.length) return;
      state.todoData = state.todoData.map((item) => {
        item.isDone = true;
        return item;
      });
      setTodoDataToStorage(state.todoData);
    }
  }
});

export const { initTodoData, addTodo, removeTodo, toggleTodo, markAllDone } = todoStore.actions;

export default todoStore.reducer;
