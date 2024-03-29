import { CheckIcon } from "@/Components/CheckIcon";
import { FolderPlusIcon } from '@/Components/FolderPlusIcon';
import InputError from '@/Components/InputError';
import { columns } from '@/Components/table_entries/columns';
import { DataTable } from "@/Components/table_entries/data-table";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { useForm } from '@inertiajs/react';
import { EditEntry } from "../Entry/EditEntry";


export default function Index({ auth, sheet, entries }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        item: '',
        quantity: '',
        price: '',
        sheet_id: sheet.id
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('entries.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="w-full sm:w-1/2 mx-auto p-5 text-2xl text-center underline">
                {sheet.name}
            </h1>
            <div className="w-full sm:w-1/2 mx-auto">
                <form onSubmit={submit} className="px-5 mx-5 py-2 bg-gray-200 rounded-xl">
                    <div>
                        <div>
                            Create New Entry
                        </div>
                    </div>
                    <div>
                        <Input className="w-full mb-4" placeholder="Item"
                            value={data.item}
                            onChange={e => setData('item', e.target.value)}
                        />
                        <InputError message={errors.item} className="mt-2" />

                        <Input type="number" className="w-full mb-4" placeholder="Quantity"
                            value={data.quantity}
                            onChange={e => setData('quantity', e.target.value)}
                        />
                        <InputError message={errors.quantity} className="mt-2" />

                        <Input className="w-full mb-4" placeholder="Price"
                            value={data.price}
                            onChange={e => setData('price', e.target.value)}
                        />
                        <InputError message={errors.price} className="mt-2" />

                        <div className="flex gap-8">
                            <Button className="w-full bg-green-600" variant="solid" >
                                <CheckIcon className="mr-2 h-5 w-5" />
                                Create Entry
                            </Button>
                        </div>
                    </div>
                </form>
                <div>
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={entries}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}