import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/share-components/molecules/dialog/default";
import { Label } from "@/share-components/atoms/label/default";
import { Input } from "@/share-components/atoms/input/default";
import { Button } from "@/share-components/atoms/button/default";

function CreateItemModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default CreateItemModal;
