import { ITask } from "@/types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });
  return response.json();
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const newTodo = await response.json();
  return newTodo;
};
