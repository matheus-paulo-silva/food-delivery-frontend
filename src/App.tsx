import React from "react";
import { Details, CustomerList } from "./modules/customer";
import { OrderList, OrderDetails, AddOrder } from "./modules/order";
import { CategoryList, AddCategory } from "./modules/category";
import { CharacterList, CharacterDetail } from "./modules/character";
import { ComicsList, ComicsDetail } from "./modules/comics";
import NoMatch from "./modules/not-found/NoMatch";
import MainMenu from "./template/menu/main-menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"
import Store from './globals/redux/store'
import "./styles/index.scss";


const App: React.FC = () => {
  return (
    <Provider store={Store}>
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
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/:characterId" element={<CharacterDetail />} />
            <Route path="/comics" element={<ComicsList />} />
            <Route path="/comics/:comicsId" element={<ComicsDetail />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
