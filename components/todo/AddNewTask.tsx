"use client";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { useRouter } from "next/navigation";
import { v4 as uuid4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/utils/task";
import { useToast } from "../ui/use-toast";

export function AddNewTask() {
  const { toast } = useToast();
  const router = useRouter();
  const [newTaskValue, setNewTaskvalue] = useState<string>("");
  const [newTaskDescValue, setNewTaskDescValue] = useState<string>("");
  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // alert("Ok Clicked");
    // console.log(newTaskValue, " ", newTaskDescValue);
    const resAdded = await addTodo({
      id: uuid4(),
      name: newTaskValue,
      text: newTaskDescValue,
    });
    if (resAdded) {
      toast({
        title: `Yor new task ${newTaskValue} `,
        description: "Successfully added",
        duration: 5000,
      });
    }
    setNewTaskDescValue("");
    setNewTaskvalue("");
    router.refresh();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full">
          Add new Task <GoPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Task</DialogTitle>
          <DialogDescription>
            Make changes and create your new tasks here. Click save when youre
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmitNewTask}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskName" className="text-right">
                Task
              </Label>
              <Input
                id="task"
                value={newTaskValue}
                required
                name="taskName"
                onChange={(e) => setNewTaskvalue(e.target.value)}
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
                required
                value={newTaskDescValue}
                name="taskDescription"
                onChange={(e) => setNewTaskDescValue(e.target.value)}
                placeholder="Write your task todo's description here"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
