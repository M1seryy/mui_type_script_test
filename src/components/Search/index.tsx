import { Box, InputBase } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { shoeItem } from "../../App";



const Search = ({ search, filter }: any) => {
  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    filter(e.target.value);
  };

  return (
    <>
      <InputBase
        value={search}
        onChange={onSearchHandler}
        placeholder="Search for your favourite shoes"
        sx={{
          width: "60%",
          height: "40px",
          border: "1px solid white",
          borderRadius: "10px",
          mt: 1,
          color: "white",
          p: 2,
          fontFamily: "sans-serif",
        }}
      />
    </>
  );
};

export default Search;
