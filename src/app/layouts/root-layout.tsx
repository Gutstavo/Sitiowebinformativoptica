import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
