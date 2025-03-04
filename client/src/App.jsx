import { BrowserRouter, Routes, Route } from 'react-router';
import Sidebar from './components/Sidebar';
import RootLayout from './layouts/RootLayout';
import Products from './pages/Products';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Users from './pages/Users';
import ProductsForm from './components/ProductsForm';
import CategoryForm from './components/CategoryForm';
import OrderForm from './components/OrderForm';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="add" element={<ProductsForm />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path="add" element={<CategoryForm />} />
          </Route>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path="add" element={<OrderForm />} />
          </Route>
          <Route path="users">
            <Route index element={<Users />} />
            <Route path="add" element={<UserForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
