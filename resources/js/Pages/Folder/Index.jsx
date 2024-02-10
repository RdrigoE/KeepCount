import CreateNewFolder from "@/Components/CreateNewFolder";
import CreateNewSheet from "@/Components/CreateNewSheet";
import { FilePlusIcon } from "@/Components/FilePlusIcon";
import FolderCard from "@/Components/FolderCard";
import GoBackButton from "@/Components/GoBackButton";
import SheetCard from "@/Components/SheetCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/shadcn/ui/button";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, folder, canMakeSheet, folders, sheets }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    folder_id: folder?.id,
  });

  const [creatingFolder, setCreatingFolder] = useState(false);
  const [creatingSheet, setCreatingSheet] = useState(false);

  const hasParent = folder;

  const submit = (e) => {
    e.preventDefault();
    post(route("folders.store"), {
      onSuccess: () => {
        setCreatingFolder(false);
        return reset();
      },
    });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title={folder ? folder.name : "Folders"} />
      <h1 className="w-full sm:w-1/2 mx-auto p-5 text-2xl text-center underline">
        {folder ? folder.name : "Folders"}
      </h1>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          {folder?.folder_id ? (
            <GoBackButton href={route("folders.show", folder.folder_id)} />
          ) : (
            <GoBackButton href={route("folders.index")} />
          )}
          {creatingFolder ? (
            <CreateNewFolder
              folder={folder}
              setCreatingFolder={setCreatingFolder}
            />
          ) : (
            <Button
              className="w-full"
              variant="outline"
              onClick={(e) => setCreatingFolder(true)}
            >
              <FilePlusIcon className="mr-2 h-5 w-5" />
              Add New Folder
            </Button>
          )}

          {canMakeSheet ? (
            creatingSheet ? (
              <CreateNewSheet
                folder={folder}
                setCreatingSheet={setCreatingSheet}
              />
            ) : (
              <Button
                className="w-full"
                variant="outline"
                onClick={(e) => setCreatingSheet(true)}
              >
                <FilePlusIcon className="mr-2 h-5 w-5" />
                Add New Sheet
              </Button>
            )
          ) : (
            ""
          )}
        </div>
        <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {folders.map((folder) => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
          {sheets
            ? sheets.map((sheet) => {
                return <SheetCard key={sheet.id} sheet={sheet} />;
              })
            : ""}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
