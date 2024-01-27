import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { Link } from "@inertiajs/react";
import { FolderIcon } from "./FolderIcon";

export default function FolderCard({ folder }) {
    return (
        <Link href={route('folders.show', folder.id)} >
            <Card>
                <CardHeader>
                    <CardTitle>
                        <FolderIcon className="mr-2 h-5 w-5" />
                        {folder.name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(folder.created_at).toLocaleString()}</p>
                </CardContent>
            </Card>
        </Link>
    );
}