import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import Layout from "./ui/Layout.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import Product from "./pages/Products.tsx";
import NotFound from "./pages/NotFound.tsx";
import ArtSuppliesGuide from "./pages/ArtSupplies.tsx";
import FAQs from "./pages/FAQ.tsx";
import PencilTechniques from "./pages/PencilTechniques.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import ReturnPolicy from "./pages/ReturnPolicy.tsx";
import ShippingPolicy from "./pages/ShippingPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import Tutorials from "./pages/Tutorials.tsx";
import ArtistSpotlights from "./pages/ArtistSpotlights.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/art-supplies", element: <ArtSuppliesGuide /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Product /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/*", element: <NotFound /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/returns", element: <ReturnPolicy /> },
      { path: "/shipping", element: <ShippingPolicy /> },
      { path: "/terms", element: <TermsOfService /> },
      { path: "/tutorials", element: <Tutorials /> },
      { path: "/spotlight", element: <ArtistSpotlights /> }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
