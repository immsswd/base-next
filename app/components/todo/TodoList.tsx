import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITask } from "@/types/tasks";
import Tasks from "./Tasks";

interface TodoListProps {
  tasksProp: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasksProp }) => {
  return (
    <Table>
      <TableCaption>A list of your recent activities 🏃</TableCaption>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">#</TableHead> */}
          <TableHead></TableHead>
          <TableHead>Task name</TableHead>
          <TableHead className="">Task Description</TableHead>
          <TableHead className="text-right hidden">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasksProp.map((task) => (
          <Tasks key={task.id} task={task} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
