import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Box } from "@mui/material";
import axios from "axios";
import { shoeItem } from "../../App";
import ListItem from "../Listitem";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  const onGetBasketHandler = async () => {
    const res = await axios.get(
      "https://654d5291cbc3253557417ba3.mockapi.io/basket"
    );
    setBasket(res.data);
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
      {basket
        ? basket.map((item: shoeItem) => {
            return <ListItem data={item} />;
          })
        : "Your card is empty"}
    </Box>
  );
};

export default Basket;
