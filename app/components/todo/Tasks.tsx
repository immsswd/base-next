import { TableCell, TableRow } from "@/components/ui/table";
import { ITask } from "@/types/tasks";

interface TasksProps {
  task: ITask;
}

const Tasks: React.FC<TasksProps> = ({ task }) => {
  return (
    <>
      <TableRow key={task.id}>
        {/* <TableCell className="font-medium">{task.id}</TableCell> */}
        <TableCell>{task.name}</TableCell>
        <TableCell>{task.text}</TableCell>
      </TableRow>
    </>
  );
};

export default Tasks;
