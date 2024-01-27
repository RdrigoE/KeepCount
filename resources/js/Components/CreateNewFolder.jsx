import { CheckIcon } from "@/Components/CheckIcon";
import { FolderPlusIcon } from "@/Components/FolderPlusIcon";
import InputError from '@/Components/InputError';
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { useForm } from '@inertiajs/react';


export default function CreateNewFolder({ folder, setCreatingFolder }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        folder_id: folder?.id
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('folders.store'), {
            onSuccess: () => {
                setCreatingFolder(false)
                return reset()
            }
        });
    };

    return (
        <div className="w-full sm:w-1/2 mx-auto mt-10">
            <form onSubmit={submit}>
                <div>
                    <div>
                        <FolderPlusIcon className="mr-2 h-5 w-5" />
                        Create New Folder
                    </div>
                </div>
                <div>
                    <Input className="w-full mb-4" placeholder="Folder Name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                    <div className="flex gap-8">
                        <Button className="w-full bg-green-600" variant="solid" >
                            <CheckIcon className="mr-2 h-5 w-5" />
                            Create Folder
                        </Button>
                        <Button className="w-full bg-red-600" variant="solid" onClick={(e) => setCreatingFolder(false)}>
                            <CheckIcon className="mr-2 h-5 w-5" />
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}