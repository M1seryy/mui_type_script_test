import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onChangeFilter }: any) => {
  const brands: Array<string> = [
    "ALL",
    "Nike",
    "Air Jordan",
    "adidas",
    "Gucci",
    "Converse",
  ];

  const onFilterChange = (name: string) => {
    onChangeFilter(name);
  };
  return (
    <Box
      sx={{
        width: "20%",
        display: "flex",
        height: "100vh",
        background: "#161d2f",
        borderRadius: "15px",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        fontFamily: "sans-serif",
        padding: 10,
        boxSizing: "border-box",
      }}
    >
      {brands.map((item) => {
        return (
          <Typography
            key={Math.random()}
            onClick={() => onFilterChange(item)}
            sx={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "800",
              ":hover": {
                color: "grey",
                transition: "300ms",
              },
            }}
          >
            {item}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Sidebar;
