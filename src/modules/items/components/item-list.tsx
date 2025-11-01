import { useItemsStore } from "../store/itemsStore";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ItemList() {
  const { items } = useItemsStore();

  console.log(items);
  return (
    <div>
      <DataTable columns={columns} data={items} />
    </div>
  );
}
