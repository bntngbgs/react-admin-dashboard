import { BrowserRouter, Routes, Route } from 'react-router';
import Sidebar from './components/Sidebar';
import RootLayout from './layouts/RootLayout';
import Products from './pages/Products';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Users from './pages/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
