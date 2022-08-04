import { createColumnHelper } from "@tanstack/react-table";
import { DataType } from "./data";

const columnHelper = createColumnHelper<DataType>();

const columns = [
  columnHelper.accessor("analyte", {
    header: () => "Analylte",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor(("date1"), {
    header: "jan-11",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date2", {
    header: "dec-14",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date3", {
    header: "nov-04",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date4", {
    header: "oct-23",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date5", {
    header: "sep-01",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date6", {
    header: "aug-26",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date7", {
    header: "july-17",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("date8", {
    header: "may-03",
    cell: (info) => info.getValue()
  })
];

export default columns;
