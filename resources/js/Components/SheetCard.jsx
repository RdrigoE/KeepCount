import { Link } from "@inertiajs/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/shadcn/ui/card";
import { FolderIcon } from "./FolderIcon";
import { EditSheet } from "@/Pages/Sheet/EditSheet";

import Dropdown from "./Dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";

import { Button } from "@/shadcn/ui/button";
import { MoreHorizontal } from "lucide-react";
import { EditFolder } from "@/Pages/Folder/EditFolder";


export default function SheetCard({ sheet }) {
  return (
    <Card>
      <DropdownMenu key={sheet.id}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <EditSheet sheet={sheet} />
          <Dropdown.Link
            as="button"
            href={route("sheets.destroy", sheet.id)}
            method="delete"
          >
            Delete sheet
          </Dropdown.Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href={route("sheets.show", sheet.id)}>
        <CardHeader>
          <CardTitle>
            {/* <FileIcon className="mr-2 h-5 w-5" /> */}
            {sheet.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(sheet.created_at).toLocaleString()}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
