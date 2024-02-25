import  Destinations from "./pages/destinations";
import  About from "./pages/about";
import Home from "./pages/home";
import Packages from "./pages/packages";

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About/> },
  { path: '/destinations', component: <Destinations /> },
  { path: '/packages', component: <Packages /> },
];

export default routes;