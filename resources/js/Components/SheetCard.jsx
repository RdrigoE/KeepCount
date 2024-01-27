import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { FileIcon } from "./FileIcon";

export default function FolderCard({ sheet }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <FileIcon className="mr-2 h-5 w-5" />
                    {sheet.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(folder.created_at).toLocaleString()}</p>
            </CardContent>
        </Card>
    );
}