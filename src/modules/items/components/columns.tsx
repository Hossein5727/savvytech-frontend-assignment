"use client";

import type { ColumnDef } from "@tanstack/react-table";

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
];
