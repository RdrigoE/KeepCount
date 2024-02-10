import { Button } from "@/shadcn/ui/button";
import { CheckIcon } from "@/Components/CheckIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/ui/dialog";
import { Input } from "@/shadcn/ui/input";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useState } from "react";

export function EditFolder({ folder }) {
  const { data, setData, patch, clearErrors, reset, errors } = useForm({
    ...folder,
  });

  const [open, setOpen] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    patch(route("folders.update", folder.id), 
      { onSuccess: () => 
      {
        setOpen(false);
      }}, );
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button variant="outline m-4">Edit Folder</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Folder</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit}>
          <Input
            className="w-full mb-4"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
          />
          <InputError message={errors.name} className="mt-2" />

          <DialogFooter>
            <Button className="w-full bg-green-600" variant="solid" type="submit">
              Edit folder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      </Dialog>
  );
}
