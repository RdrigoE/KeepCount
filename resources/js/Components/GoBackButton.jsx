import { Button } from "@/shadcn/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowLeftIcon } from "./ArrowLeftIcon";

export default function GoBackButton({ href }) {
    return (
        <Link href={href}>
            <Button className="self-start" variant="outline">
                <ArrowLeftIcon className="mr-2 h-5 w-5" />
                Go Back
            </Button>
        </Link>
    )
}