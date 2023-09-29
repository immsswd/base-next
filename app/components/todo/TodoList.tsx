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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <Table>
      <TableCaption>A list of your recent activities 🏃</TableCaption>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">#</TableHead> */}
          <TableHead>Task name</TableHead>
          <TableHead className="">Task Description</TableHead>
          <TableHead className="text-right hidden">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <Tasks key={task.id} task={task} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
