import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Azure from "../views/Azure.vue";
import Cisco from "../views/Cisco.vue";
import Microsoft365 from "../views/Microsoft365.vue";
import Windows from "../views/Windows.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/azure",
            name: "azure",
            component: Azure,
        },
        {
            path: "/cisco",
            name: "cisco",
            component: Cisco,
        },
        {
            path: "/windows",
            name: "windows",
            component: Windows,
        },
        {
            path: "/microsoft365",
            name: "microsoft365",
            component: Microsoft365,
        },
    ],
});

export default router;
