import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../../Components/Sidebar";

import Navbar from "../../../Components/Navbar";
import Footer from "../../Footer";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow:  1 }}>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ height: "100vh", overflow: "auto" }}>
          <Navbar />
          
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
