// import Loadable from "react-loadable";
// import Loading from "./components/Loading";
import About from "./views/pages/about/About";
import Faq from "./views/pages/faq/Faq";
import Home from "./views/pages/home/Home";

// const About = Loadable({
//   loader: () => import("./views/pages/About"),
//   loading: Loading
// });

// const Faq = Loadable({
//   loader: () => import("./views/pages/Faq"),
//   loading: Loading
// });

const routes = [
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    exact: true,
    name: "Conócenos",
    component: About
  },
  {
    path: "/faq",
    exact: true,
    name: "Preguntas Frecuentes",
    component: Faq
  }
];

export default routes;
