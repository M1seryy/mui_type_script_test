import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ListItem from "../Listitem";
import { shoeItem } from "../../App";
import Loader from "../loader";

interface MyComponentProps {
  data: shoeItem[];
  search: string;
  filter: string;
  pagination: any;
  totalSneakers: number;
  onPaginate: any;
}

const List = ({
  data,
  search,
  filter,
  pagination,
  totalSneakers,
  onPaginate,
}: MyComponentProps) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalSneakers / pagination.sneakersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          gap: 4,
          py: 2,
        }}
      >
        {data.length !== 0 ? (
          filter === "ALL" ? (
            data
              .filter((item: shoeItem) =>
                item.brand_name?.toLowerCase().includes(search)
              )
              .map((item: shoeItem) => {
                return <ListItem key={item.id} data={item} />;
              })
          ) : (
            data
              .filter((item: shoeItem) => item.brand_name.includes(filter))
              .map((item: shoeItem) => {
                return <ListItem key={item.id} data={item} />;
              })
          )
        ) : (
          <Loader />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        {pageNumbers.map((item) => {
          return (
            <Button
              onClick={() => onPaginate(item)}
              key={item}
              sx={{
                width: "20px",
                color: "white",
                fontSize: "22px",
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default List;
