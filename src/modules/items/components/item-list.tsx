import { columns, type Item } from "./columns";
import { DataTable } from "./data-table";

const data: Item[] = [
  {
    id: "1",
    title: "Item 1",
    subtitle: "Item 1 subtitle",
    date_created: "2021-01-01",
  },
  {
    id: "2",
    title: "Item 2",
    subtitle: "Item 2 subtitle",
    date_created: "2021-01-02",
  },
];
export default function ItemList() {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

