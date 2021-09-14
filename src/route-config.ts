import MainlinePB from "./paint/MainlinePB";
import MainMenu from "./MainMenu";
import Spoven1PB from "./paint/Spoven1PB";
import Spoven2PB from "./paint/Spoven2PB";
import Spoven3PB from "./paint/Spoven3PB";

const routes = [
    //*Main
    {
        path: "/", component: MainMenu, exact: true
    },

    //*MainlinePB
    {
        path: "/mainline", component: MainlinePB, exact: true
    },

    //*MainlinePB
    {
        path: "/spoven1", component: Spoven1PB, exact: true
    },

    //*MainlinePB
    {
        path: "/spoven2", component: Spoven2PB, exact: true
    },

    //*MainlinePB
    {
        path: "/spoven3", component: Spoven3PB, exact: true
    },
];

export default routes;
