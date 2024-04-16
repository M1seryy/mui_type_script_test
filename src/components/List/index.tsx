import { Box } from "@mui/material";
import React from "react";
import ListItem from "../Listitem";
import { shoeItem } from "../../App";

interface MyComponentProps {
  data: shoeItem[];
  search: string;
  filter: string;
}

const List = ({ data, search, filter }: MyComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        py: 2,
      }}
    >
      {filter === "ALL"
        ? data
            .filter((item: shoeItem) =>
              item.name.toLowerCase().includes(search)
            )
            .map((item: shoeItem) => {
              return <ListItem key={item.id} data={item} />;
            })
        : data
            .filter((item: shoeItem) => item.brand.includes(filter))
            .map((item: shoeItem) => {
              return <ListItem key={item.id} data={item} />;
            })}
    </Box>
  );
};

export default List;
