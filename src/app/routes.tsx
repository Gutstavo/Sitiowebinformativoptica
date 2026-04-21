import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/root-layout";
import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { LensCarePage } from "./pages/lens-care-page";
import { PromotionsPage } from "./pages/promotions-page";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "nosotros", Component: AboutPage },
      { path: "cuidados", Component: LensCarePage },
      { path: "promociones", Component: PromotionsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
