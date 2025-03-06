import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './layouts/DashboardLayout';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Users from './pages/Users';
import ProductsForm from './components/ProductsForm';
import CategoryForm from './components/CategoryForm';
import OrderForm from './components/OrderForm';
import UserForm from './components/UserForm';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
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
        {/* Protected Routes */}

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
