import HomePage from "../pages/home.jsx";
import LegsOne from "../pages/legsone.jsx";
import PushOne from "../pages/pushone.jsx";
import PullOne from "../pages/pullone.jsx";
import LegsTwo from "../pages/legstwo.jsx";
import PushTwo from "../pages/pushtwo.jsx";
import PullTwo from "../pages/pulltwo.jsx";
import NotFoundPage from "../pages/404.jsx";

var routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/legsone/",
        component: LegsOne,
    },
    {
        path: "/pushone/",
        component: PushOne,
    },
    {
        path: "/pullone/",
        component: PullOne,
    },
    {
        path: "/legstwo/",
        component: LegsTwo,
    },
    {
        path: "/pushtwo/",
        component: PushTwo,
    },
    {
        path: "/pulltwo/",
        component: PullTwo,
    },
    {
        path: "(.*)",
        component: NotFoundPage,
    },
];

export default routes;
