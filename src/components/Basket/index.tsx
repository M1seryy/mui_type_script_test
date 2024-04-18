import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { shoeItem } from "../../App";
import ListItem from "../Listitem";
import Loader from "../loader";

const Basket = () => {
  const [basket, setBasket] = useState<shoeItem[]>([]);
  const [error, setError] = useState(false);

  const onGetBasketHandler = async () => {
    const res = await axios.get(
      "https://654d5291cbc3253557417ba3.mockapi.io/basket"
    );

    console.log(res);
    setBasket(res.data);

    if (res.data.length === 0) {
      setError(true);
    }
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
      {error ? (
        basket.length !== 0 ? (
          basket.map((item: shoeItem) => {
            return <ListItem data={item} />;
          })
        ) : // <Typography
        // sx={{
        //   fontSize: 30,
        //   color: "white",
        // }}
        // >
        //   Your card is empty
        // </Typography>
        null
      ) : (
       <Loader/>
      )}
    </Box>
  );
};

export default Basket;
