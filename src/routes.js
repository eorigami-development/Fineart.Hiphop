import About from "./components/About";
import Secret from "./components/Secret";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
    {
        path: "/signup",
        component: Signup,
        exact: true,
    },
    {
        path: "/profile",
        component: Profile,
        exact: true,
    },
];
