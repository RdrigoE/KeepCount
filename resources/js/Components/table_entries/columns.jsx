"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { EditEntry } from "@/Pages/Entry/EditEntry";
import { DeleteEntry } from "@/Pages/Entry/DeleteEntry";

export const columns = [
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "price",
    header: () => <div className="">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return (
        <div key={row.id} className="font-medium">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: () => <div className="">Total</div>,
    cell: ({ row }) => {
      const amount =
        parseFloat(row.getValue("price")) * parseInt(row.getValue("quantity"));
      const formatted = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return (
        <div key={row.id} className="font-medium">
          {formatted}
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="">Actions</div>,
    cell: ({ row }) => {
      return (
        <DropdownMenu key={row.id}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <EditEntry entry={row} />
                <DeleteEntry entry={row} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
