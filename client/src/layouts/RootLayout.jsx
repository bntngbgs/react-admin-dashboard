import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <main className="flex relative">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};
export default RootLayout;
