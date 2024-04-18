import {
  Box,
  // Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { shoeItem } from "../../App";
import Plus from "../../assets/pngtree-plus-vector-icon-png-image_4017149.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

interface shoeItemProps {
  data: shoeItem;
}

const ListItem = ({ data }: shoeItemProps) => {
  const { pathname } = useLocation();
  const onAddHnadler = async (shoeItem: shoeItem) => {
    await axios.post(
      `https://654d5291cbc3253557417ba3.mockapi.io/basket`,
      shoeItem
    );
  };
  return (
    <Card
      sx={{
        background: "#161d2f",
        border: "none",
        width: "300px",
        maxHeight: "200px",
        borderRadius: 5,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "200px",
          background: "transparent",
        }}
      >
        <CardContent>
          <Stack spacing={2} direction="row">
            {pathname === "/card" ? (
              <Button
                //  onClick={() => onAddHnadler(data)}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                variant="contained"
              >
                Delete
              </Button>
            ) : (
              <Button
                onClick={() => onAddHnadler(data)}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                variant="contained"
              >
                Add
              </Button>
            )}
          </Stack>
          <Typography
            sx={{
              fontSize: 20,
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "800",
            }}
            gutterBottom
          >
            {data.name}
          </Typography>
          {/* <Typography sx={{ color: "white" }} variant="h5" component="div">
            {data.category}
          </Typography> */}
          <Typography sx={{ color: "white" }} color="text.secondary">
            Price: {data.price}$
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            Brand {data.brand}
            <br />
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {data.is_in_inventory ? "Available" : "Out of stock"}
          </Typography>
        </CardContent>

        {/* <img style={{ width: "100%" }} src={data.imageURL} /> */}
      </Box>
    </Card>
  );
};

export default ListItem;
