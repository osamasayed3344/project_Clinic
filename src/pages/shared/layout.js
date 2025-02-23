import React from "react";
import { Outlet,Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout(){
    return(
        <>
        <Header></Header>
        <nav>
            <ul className="UnorderList Flexable">
                <li><Link to="/" className="itemlink">الصفحة الرئيسية</Link></li>
                <li><Link to="/doctors" className="itemlink">الاطباء</Link></li>
                <li><Link to="/services" className="itemlink">الخدمات</Link></li>
                <li><Link to="/contact" className="itemlink">الاتصال بنا</Link></li>
                <li><button className="btn btn-primary">تسجيل الدخول</button></li>
                <li><button className="btn btn-success">انشاء حساب جديد</button></li>
            </ul>
        </nav>
        <section className="BodyPage">
            <Outlet/>
        </section>
        <Footer></Footer>
        </>
    );
}