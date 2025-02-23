import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./shared/layout";
import MainPage from "./Mainpage/MainPage";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
import Contact from "./Contact/contact";
import React from "react";

export default function App(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<MainPage></MainPage>}></Route>
                    <Route path="doctors" element={<Doctors></Doctors>}></Route>
                    <Route path="services" element={<Services></Services>}></Route>
                    <Route path="contact" element={<Contact></Contact>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}