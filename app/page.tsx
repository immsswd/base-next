import AddTask from "./components/todo/AddTask";
import TodoList from "./components/todo/TodoList";
import { getAllTodos } from "@/utils/task";

export default async function Home() {
  const tasks = await getAllTodos();
  // console.log(tasks);
  return (
    <main className="flex flex-wrap">
      <div className="grow md:w-2/5 items-center px-8 py-20 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Your daily</h1>
          <AddTask />
        </div>
      </div>
      <div className="grow md:w-[60%] items-center px-8 py-20">
        <TodoList tasksProp={tasks} />
      </div>
    </main>
  );
}
