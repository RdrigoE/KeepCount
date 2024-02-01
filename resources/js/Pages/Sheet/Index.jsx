import { CheckIcon } from "@/Components/CheckIcon";
import { FolderPlusIcon } from '@/Components/FolderPlusIcon';
import InputError from '@/Components/InputError';
import { columns } from '@/Components/table_entries/columns';
import { DataTable } from "@/Components/table_entries/data-table";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { useForm } from '@inertiajs/react';


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
            onSuccess: () => {
                return reset()
            }
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full sm:w-1/2 mx-auto mt-10">
                <form onSubmit={submit}>
                    <div>
                        <div>
                            <FolderPlusIcon className="mr-2 h-5 w-5" />
                            Create New Entry
                        </div>
                    </div>
                    <div>
                        <Input className="w-full mb-4" placeholder="Item"
                            value={data.item}
                            onChange={e => setData('item', e.target.value)}
                        />
                        <InputError message={errors.item} className="mt-2" />

                        <Input className="w-full mb-4" placeholder="Quantity"
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
                            <Button className="w-full bg-red-600" variant="solid" onClick={(e) => setCreatingFolder(false)}>
                                <CheckIcon className="mr-2 h-5 w-5" />
                                Cancel
                            </Button>
                        </div>
                    </div>
                </form>
                <div>

                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={entries} />
                    </div>

                </div>
            </div>
        </AuthenticatedLayout >
    );
}