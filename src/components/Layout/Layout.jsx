// Structure commune pour toutes les pages

// importer Header
import Header from "../Header/Header.jsx";

// importer Footer
import Footer from "../Footer/Footer.jsx";

// Outlet voir sur la doc de react-router : zone réservée où seront affichées les pages (Home, A_propos, etc.)
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>   
      <Header />  
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />  
    </>
  );
};

  export default Layout;