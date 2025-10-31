import ItemList from "./components/item-list";
import { Button } from "@/share-components/atoms/button/default";
import { PlusIcon } from "lucide-react";
import CreateItemModal from "./components/create-item-modal";
import { useState } from "react";

function Items() {
  const [createItemOpenModal, setCreateItemOpenModal] = useState(false);
  return (
    <div className="space-y-8 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Savvytech Frontend Assignment</h1>
        <Button onClick={() => setCreateItemOpenModal(true)}>
          Add New Item
          <PlusIcon className="w-4 h-4 mr-2" />
        </Button>
      </div>
      <ItemList />

      <CreateItemModal open={createItemOpenModal} setOpen={setCreateItemOpenModal} />   
    </div>
  );
}

export default Items;
