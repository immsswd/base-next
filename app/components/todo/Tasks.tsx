"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { ITask } from "@/types/tasks";

// import { ActionTask } from "./ActionTask";
import { ClipboardEdit, DeleteIcon, Trash2Icon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/utils/task";
import { useToast } from "@/components/ui/use-toast";

interface TasksProps {
  task: ITask;
}

const Tasks: React.FC<TasksProps> = ({ task }) => {
  const { toast } = useToast();
  const router = useRouter();
  // state form
  const [editTaskValue, setEditTaskValue] = useState<string>(task.name);
  const [editTaskDescValue, setEditTaskDescValue] = useState<string>(task.text);
  const handleSubmitEditTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(editTaskValue, " ", editTaskDescValue);
    const respEdit = await editTodo({
      id: task.id,
      name: editTaskValue,
      text: editTaskDescValue,
    });
    if (respEdit) {
      toast({
        title: `Task ${task.name} `,
        description: "Successfully edited",
        duration: 5000,
      });
    }
    router.refresh();
  };

  // handle Delete
  const handleDeleteTask = async (id: string) => {
    const deleted = await deleteTodo(id);

    toast({
      title: `Task ${task.name} `,
      description: "Successfully deleted",
      variant: "destructive",
      duration: 5000,
    });

    router.refresh();
  };

  return (
    <>
      <TableRow key={task.id}>
        {/* <TableCell className="font-medium">{task.id}</TableCell> */}
        <TableCell className="flex items-center">
          {/* <ActionTask /> */}

          {/* dialog edit start*/}
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-2 py-2">
                <ClipboardEdit className="h-4 w-4 hover:text-red-400" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit your task</DialogTitle>
                {/* <DialogDescription>
                  Make changes and create your new taks here. Click save when
                  youre done.
                </DialogDescription> */}
              </DialogHeader>
              {/* <form onSubmit={handleSubmitNewTask}> */}
              <form onSubmit={handleSubmitEditTask}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="taskName" className="text-right">
                      Task
                    </Label>
                    <Input
                      id="task"
                      value={editTaskValue}
                      name="taskName"
                      onChange={(e) => setEditTaskValue(e.target.value)}
                      placeholder="Task todo's name here"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="taskDescription" className="text-right">
                      Description
                    </Label>
                    {/* <Input
                id="task"
                defaultValue="Implement flutter app for new design"
                className="col-span-3"
              /> */}
                    <Textarea
                      id="task-description"
                      value={editTaskDescValue}
                      name="taskDescription"
                      rows={5}
                      onChange={(e) => setEditTaskDescValue(e.target.value)}
                      placeholder="Write your task todo's description here"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant={"destructive"} type="submit">
                    Save Edited changes?
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* dialog edit end*/}
          {/* dialog delete start */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-2 py-2">
                <Trash2Icon className="h-4 w-4 hover:text-red-400 text-slate-600" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Delete: {task.name}?
                </DialogTitle>
                {/* <DialogDescription>
                  Make changes and create your new taks here. Click save when
                  youre done.
                </DialogDescription> */}
              </DialogHeader>
              <Button
                variant={"destructive"}
                onClick={(e) => handleDeleteTask(task.id)}
              >
                Yes, delete!
              </Button>
            </DialogContent>
          </Dialog>
          {/* dialog delete end */}
        </TableCell>
        <TableCell>{task.name}</TableCell>
        <TableCell className="w-full">{task.text}</TableCell>
      </TableRow>
    </>
  );
};

export default Tasks;
