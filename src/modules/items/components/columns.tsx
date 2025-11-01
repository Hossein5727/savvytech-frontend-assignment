"use client";

import { Button } from "@/share-components/atoms/button/default";
import type { ColumnDef } from "@tanstack/react-table";
import { useItemsStore } from "../store/itemsStore";
import { PencilIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import EditItemModal from "./edit-item-modal";

export type Item = {
  id: string;
  title: string;
  subtitle: string;
  date_created: string;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "subtitle",
    header: "Subtitle",
  },
  {
    accessorKey: "date_created",
    header: "Date Created",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <DeleteButton itemId={row.original.id} />
        <EditButton itemId={row.original.id} />
      </div>
    ),
  },
];

// eslint-disable-next-line react-refresh/only-export-components
function DeleteButton({ itemId }: { itemId: string }) {
  const { removeItem } = useItemsStore();
  return (
    <Button onClick={() => removeItem(itemId)}>
      <TrashIcon className="w-4 h-4" />
    </Button>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function EditButton({ itemId }: { itemId: string }) {
  const [editItemOpenModal, setEditItemOpenModal] = useState(false);
  const { items } = useItemsStore();
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    return null;
  }
  return (
    <div>
      <Button onClick={() => setEditItemOpenModal(true)}>
        <PencilIcon className="w-4 h-4" />
      </Button>
      <EditItemModal
        open={editItemOpenModal}
        setOpen={setEditItemOpenModal}
        item={item}
      />
    </div>
  );
}
