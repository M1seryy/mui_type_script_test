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
import Login from "./components/Login/Login";

export interface shoeItem {
  _id: number;
  brand_name: string;
  category: Array<string>;
  color: string;
  id: number;
  original_picture_url: string;
  is_in_inventory: boolean;
  items_left: number;
  name: string;
  retail_price_cents: number;
  release_year: number;
  favourite: boolean;
}
// <shoeItem[]>
function App() {
  const [filter, setFilter] = useState("ALL");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sneakersPerPage] = useState(8);

  const lastIndex = currentPage * sneakersPerPage;
  const firstPage = lastIndex - sneakersPerPage;
  const currentSneakers = data.slice(firstPage, lastIndex);

  const onPaginate = (nextPageNumber: number) => {
    setCurrentPage(nextPageNumber);
  };

  const pagination: any = {
    lastIndex,
    firstPage,
    currentSneakers,
    sneakersPerPage,
  };

  const fetchShoes = async () => {
    const respose = await axios.get("http://localhost:3000/api/sneakers");
    setData(respose.data.sneakers);
  };
  useEffect(() => {
    fetchShoes();
  }, []);
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Sidebar onChangeFilter={setFilter} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    width: "100%",
                  }}
                >
                  <Search filter={setSearchValue} />\
                  <List
                    data={currentSneakers}
                    search={searchValue}
                    filter={filter}
                    pagination={pagination}
                    totalSneakers={data.length}
                    onPaginate={onPaginate}
                  />
                </Box>
              </>
            }
          />

          <Route
            path="/card"
            element={
              <>
                <Sidebar onChangeFilter={setFilter} />
                <Basket data={data} />
              </>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
