import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Search from "./components/Search";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket";
import path from "path";

export interface shoeItem {
  brand: string;
  category: string;
  gender: string;
  id: number;
  imageURL: string;
  is_in_inventory: boolean;
  items_left: number;
  name: string;
  price: number;
  slug: string;
}
// <shoeItem[]>
function App() {
  const [filter, setFilter] = useState("ALL");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchShoes = async () => {
    const respose = await axios.get(
      "https://654d5291cbc3253557417ba3.mockapi.io/shoes"
    );
    setData(respose.data);
  };
  useEffect(() => {
    fetchShoes();
  }, []);
  return (
    <div>
      <Layout>
        <Sidebar onChangeFilter={setFilter} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Search filter={setSearchValue} />
                  <List data={data} search={searchValue} filter={filter} />
                </Box>
              </>
            }
          />

          <Route path="/card" element={<Basket />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
