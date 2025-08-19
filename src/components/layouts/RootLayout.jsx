import { Outlet } from "react-router-dom";
// Navbar & Footer
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="main-container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6">
        <Footer />
      </footer>
      <div className="py-4 mt-15">
        <p className="text-gray-500 text-center text-sm">
          © {new Date().getFullYear()} Car Rental. Design by Figma.guru
        </p>
      </div>
    </>
  );
};

export default RootLayout;
