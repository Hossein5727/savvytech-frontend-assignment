import ItemList from "./components/Item-list";
import { Button } from "@/share-components/atmos/button/default";
import { PlusIcon } from "lucide-react";

function Items() {
  return (
    <div className="space-y-8 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Savvytech Frontend Assignment</h1>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add New Item
        </Button>
      </div>
      <ItemList />
    </div>
  );
}

export default Items;
