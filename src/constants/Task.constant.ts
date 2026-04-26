import { IColumn, ITask } from "@/types/Task";

const COLUMNS: IColumn[] = [
  {
    id: "TODO",
    title: "To Do",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
  },
  {
    id: "DONE",
    title: "Done",
  },
];

const INITIAL_TASKS: ITask[] = [
  {
    id: "1",
    title: "Research",
    description: "Do some research on Next.js",
    status: "DONE",
  },
  {
    id: "2",
    title: "Design",
    description: "Create a design for the app",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "API Development",
    description: "Build the API for the app",
    status: "TODO",
  },
];

export { COLUMNS, INITIAL_TASKS };
