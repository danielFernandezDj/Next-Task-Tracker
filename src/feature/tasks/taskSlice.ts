import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  completed: string;
}

interface TaskState {
  tasks: Task[];
  status: "idle" | "loading" | "failed";
}

const initialState: TaskState = {
  tasks: [],
  status: "idle",
};

//  addTask, removeTask, setTasks.
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, removeTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
