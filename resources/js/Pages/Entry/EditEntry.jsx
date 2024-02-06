import { Button } from "@/shadcn/ui/button";
import { CheckIcon } from "@/Components/CheckIcon";
import {
  Dialog,
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

export function EditEntry({ entry }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    ...entry,
  });
  console.log(data.original);

  const submit = (e) => {
    e.preventDefault();
    post(route("entries.update", entry), {
      onSuccess: () => reset(),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your entry here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit}>
          <Input
            className="w-full mb-4"
            placeholder="Item"
            value={data.item}
            onChange={(e) => setData("item", e.target.value)}
          />
          <InputError message={errors.item} className="mt-2" />

          <Input
            type="number"
            className="w-full mb-4"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => setData("quantity", e.target.value)}
          />
          <InputError message={errors.quantity} className="mt-2" />

          <Input
            className="w-full mb-4"
            placeholder="Price"
            value={data.price}
            onChange={(e) => setData("price", e.target.value)}
          />
          <InputError message={errors.price} className="mt-2" />

          <DialogFooter>
            <Button className="w-full bg-green-600" variant="solid" type="submit">
              Edit Entry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
