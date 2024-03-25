
import { Container, CssBaseline, Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";



import {NavBar, SideBar, HomePage } from "@catcode/core-components";
import {CatalogPage, ApplicationPage} from "@catcode/catalog";
import { BACKEND_URL, DEPENDENCIES_URL } from "./apiConfig";
import {CatDocsHomePage} from "@catcode/catdocs";


const navbarHeight = 80;

function BasePage() {
  // Adjust this value based on the actual height of your NavBar

  return (
    <>
      <Box sx={{ display: 'flex', lexGrow: 1 }}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <main style={{width: '100%', flexGrow: 1}}>
          <Toolbar />
          <Routes>
            <Route path={'/'} element={<HomePage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL}/>} />
            <Route path={'/catalog'} element={<CatalogPage url={BACKEND_URL} />} />
            <Route path={'/catalog/:system/:application/:deployableUnit/*'} element={<ApplicationPage backend_url={BACKEND_URL} dependency_url={DEPENDENCIES_URL} />} />
            <Route path={'/docs/:system/:application/:deployableUnit/*'} element={<CatDocsHomePage/>}/>
          </Routes>
        </main>
      </Box>
    </>
  );
}

export default BasePage;