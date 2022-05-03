import React from "react";
import { Details, CustomerList } from "./modules/customer";
import { OrderList, OrderDetails, AddOrder } from "./modules/order";
import { CategoryList, AddCategory } from "./modules/category";
import NoMatch from "./modules/not-found/NoMatch";
import MainMenu from "./template/menu/main-menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-content">
        <MainMenu />
        <Routes>
          <Route path="/customer/:id" element={<Details />} />
          <Route path="/customer" element={<CustomerList />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/order/add-order" element={<AddOrder />} />
          <Route path="/order" element={<OrderList />} />
          <Route path="/category/add-category" element={<AddCategory />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
