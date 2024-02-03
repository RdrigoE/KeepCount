import { Card, CardHeader, CardTitle } from "@/shadcn/ui/card";

export default function SheetCard({ sheet }) {
    return (
        <Link href={route('sheets.show', sheet.id)} >
            <Card>
                <CardHeader>
                    <CardTitle>
                        {/* <FileIcon className="mr-2 h-5 w-5" /> */}
                        {sheet.name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(sheet.created_at).toLocaleString()}</p>
                </CardContent>
            </Card>
        </Link>
    );
}