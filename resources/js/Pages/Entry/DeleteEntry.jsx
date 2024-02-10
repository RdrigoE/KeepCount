import { Button } from "@/shadcn/ui/button";
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
import Dropdown from "@/Components/Dropdown";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export function DeleteEntry({ entry }) {
  const { data, setData, patch, clearErrors, reset, errors } = useForm({
    ...entry.original,
  });

  const [open, setOpen] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    fetch(route("entries.destroy", entry.original.id), {
      method: "DELETE",
    }).then(setOpen(false));
  };

  console.log(route("entries.destroy", entry.original.id));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline m-4">Delete Item</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to <i>Delete Item</i>:<br /> "{data.item}"
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submit}>
          <DialogFooter>
            <Dropdown.Link
              as="button"
              href={route("entries.destroy", entry.original.id)}
              method="delete"
              onSuccess={(e) => setOpen(false)}
            >
            <Button
              className="w-full bg-green-600"
              variant="solid"
              type="submit"
            >
              Delete Entry
            </Button>
            </Dropdown.Link>

          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
