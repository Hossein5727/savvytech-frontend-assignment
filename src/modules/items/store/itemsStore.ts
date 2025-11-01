import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Item } from "../components/columns";

interface ItemsState {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

export const useItemsStore = create<ItemsState>()(
  devtools(
    persist(
      (set) => ({
        items: [
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
        ],
        addItem: (item) => set((state) => ({ items: [...state.items, item] })),
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
      }),
      {
        name: "items-storage",
      }
    )
  )
);
