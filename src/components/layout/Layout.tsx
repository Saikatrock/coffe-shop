import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from './Navbar'
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />


      <main className="flex-1 relative">
        <Navbar />
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}
