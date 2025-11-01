import { Button } from "@/share-components/atoms/button/default";
import { Input } from "@/share-components/atoms/input/default";
import { Label } from "@/share-components/atoms/label/default";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/share-components/molecules/dialog/default";
import { useState } from "react";
import type { Item } from "./columns";
import { useItemsStore } from "../store/itemsStore";

function EditItemModal({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: Item;
}) {
  const [form, setForm] = useState({
    title: item.title,
    subtitle: item.subtitle,
  });
  const { updateItem } = useItemsStore();
  const handleSubmit = () => {
    updateItem({
      id: item.id,
      title: form.title,
      subtitle: form.subtitle,
      date_created: item.date_created,
    });
    setOpen(false);
    setForm({
      title: form.title,
      subtitle: form.subtitle,
    });
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Item</DialogTitle>
              <DialogDescription>
                Edit the item by filling out the form below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  id="title"
                  name="title"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  value={form.subtitle}
                  onChange={(e) =>
                    setForm({ ...form, subtitle: e.target.value })
                  }
                  id="subtitle"
                  name="subtitle"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" onClick={handleSubmit}>
                Edit Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default EditItemModal;
