import React from 'react'
import "./styles.scss"
import {
    BrowserRouter as Router,
    Link,
    NavLink,
} from "react-router-dom";
import { 
    AccountOff, 
    Logo, 
    Search, 
    BlogOff, 
    BrandOff, 
    CategoryOff, 
    DashboardOff, 
    HomeOff, 
    MarketingOff, 
    MessageOff, 
    OrdersOff, 
    ProductOff, 
    SettingsOff, 
    UserOff, 
    Logout } from '../../shared/icon-set2';
const MainMenu = () => {



    return (
        <div className="menus-content">
            <div className="main-menu">
                <span className="logo"><Logo /></span>
                <div className="menu-block">
                    <div className="vertical-menu">
                        <a href="#"><HomeOff /></a>
                        <a href="#"><MessageOff /></a>
                        <a href="#"><UserOff /></a>
                        <a href="#"><SettingsOff /></a>
                        <button className="line-button"><Logout /></button>
                    </div>
                </div>
               
            </div>
            <div className="sub-menu">
                <section className ="search-block">
                    <input type="text" className="custom-input" id="search" placeholder="Search" />
                    <button type="button" className="btn btn-dark"><Search /></button>
                </section>
                <div className="sub-menu-block">
                    <div className="vertical-menu">
                        <NavLink to={'/dashboard'}><DashboardOff />Dashboard</NavLink>
                        <NavLink to={'/orders'}><OrdersOff />Orders</NavLink>
                        <NavLink to={'/customer'}><AccountOff />Customer</NavLink>
                        <NavLink to={'/category'}><CategoryOff />Category</NavLink>
                        <NavLink to={'/products'}><ProductOff />Products</NavLink>
                        <NavLink to={'/brand'}><BrandOff />Brand</NavLink>
                        <NavLink to={'/blog'}><BlogOff />Blog</NavLink>
                        <NavLink to={'/marketing'}><MarketingOff />Marketing</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainMenu;

