import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { shoeItem } from "../../App";
import ListItem from "../Listitem";
import Loader from "../loader";

const Basket = ({ data }: any) => {
  const [basket, setBasket] = useState<shoeItem[]>([]);
  const [error, setError] = useState(false);

  const onGetBasketHandler = async () => {
    // const res = await axios.get(
    //   "https://654d5291cbc3253557417ba3.mockapi.io/basket"
    // );
    // console.log(res);
    // setBasket(res.data);
    // if (res.data.length === 0) {
    //   setError(true);
    // }
  };

  useEffect(() => {
    onGetBasketHandler();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 4,
        // py: 2,
      }}
    >
      {data
        .filter((item: shoeItem) => item.favourite === true)
        .map((item: shoeItem) => {
          return <ListItem data={item} />;
        })}
    </Box>
  );
};

export default Basket;
