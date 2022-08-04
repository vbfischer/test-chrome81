import {
    flexRender,
    getCoreRowModel,
    useReactTable
  } from "@tanstack/react-table";
  import React from "react";
  
  import { Grid, HeaderCell, Row, Cell } from "./styles";
  
  import rawData from "../data";
  import rawColumns from "../columns";
  
  export const GridView = () => {
    const data = React.useMemo(() => [...rawData], []);
  
    const columns = React.useMemo(() => rawColumns, []);
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel()
    });
    return (
      <Grid>
        {table.getHeaderGroups().map((headerGroup) => (
          <Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeaderCell key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </HeaderCell>
            ))}
          </Row>
        ))}
  
        {table.getRowModel().rows.map((row) => (
          <Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Cell>
            ))}
          </Row>
        ))}
      </Grid>
    );
  };
  