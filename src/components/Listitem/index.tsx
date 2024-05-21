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
  const onAddHnadler = async (id: number, type: string) => {
    //test id 6634b9ca589a9a5bed2a80e4
    let changeData;
    if (type === "add") {
      changeData = {
        favourite: true,
      };
    } else
      changeData = {
        favourite: false,
      };
    await axios.patch(`http://localhost:3000/api/sneakers/${id}`, changeData);
  };
  return (
    <Card
      sx={{
        background: "#161d2f",
        border: "none",
        width: "300px",
        minHeight: "380px",
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
                onClick={() => onAddHnadler(data._id, "delete")}
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                }}
                variant="contained"
              >
                Delete
              </Button>
            ) : (
              <Button
                onClick={() => onAddHnadler(data._id, "add")}
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
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
              width: "250px",
              minHeight: "60px",
            }}
            gutterBottom
          >
            {data.name}
          </Typography>

          <img className="shoe_img" src={data.original_picture_url} alt="" />

          <Typography sx={{ color: "white" }} color="text.secondary">
            Price:
            {data.retail_price_cents / 100}$
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            Brand {data.brand_name}
            <br />
          </Typography>
        </CardContent>

        {/* <img style={{ width: "100%" }} src={data.imageURL} /> */}
      </Box>
    </Card>
  );
};

export default ListItem;
