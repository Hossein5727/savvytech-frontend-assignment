import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/share-components/molecules/dialog/default";
import { Label } from "@/share-components/atoms/label/default";
import { Input } from "@/share-components/atoms/input/default";
import { Button } from "@/share-components/atoms/button/default";
import { useState } from "react";
import { toast } from "sonner";
import { useItemsStore } from "../store/itemsStore";

function CreateItemModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { addItem } = useItemsStore();
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
  });

  const handleSubmit = () => {
    if (form.title === "" || form.subtitle === "") {
      toast.error("Please fill out all fields");
      return;
    }
    addItem({
      id: crypto.randomUUID(),
      title: form.title,
      subtitle: form.subtitle,
      date_created: new Date().toISOString().split("T")[0],
    });
    toast.success("Item created successfully");
    setOpen(false);
    setForm({
      title: "",
      subtitle: "",
    });
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <div>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Item</DialogTitle>
              <DialogDescription>
                Create a new item by filling out the form below.
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
                Create Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default CreateItemModal;
