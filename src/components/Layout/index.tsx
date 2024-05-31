import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10131f",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        height: "110vh",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
