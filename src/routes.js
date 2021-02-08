import About from "./components/About";
import Secret from "./components/Secret";

export default [
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
];
