import { BrowserRouter, Routes, Route } from 'react-router';
import Sidebar from './components/Sidebar';
import RootLayout from './layouts/RootLayout';
import Products from './pages/Products';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
