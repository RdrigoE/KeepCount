import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { Link } from "@inertiajs/react";
import { FolderIcon } from "./FolderIcon";

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

export default function FolderCard({ folder }) {
  return (
    <Card className="bg-yellow-200 relative">
      <div className="absolute right-0">
        <DropdownMenu key={folder.id} className="">
          <DropdownMenuTrigger asChild className="">
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <EditFolder folder={folder} />
            <Dropdown.Link
              as="button"
              href={route("folders.destroy", folder.id)}
              method="delete"
            >
              Delete folder
            </Dropdown.Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link href={route("folders.show", folder.id)}>
        <CardHeader>
          <CardTitle>
            <FolderIcon className="mr-2 h-5 w-5" />
            {folder.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(folder.created_at).toLocaleString()}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
