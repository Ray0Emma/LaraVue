export const routes = [
    {
        path: "/",
        name: "users",
        component: () => import("./components/UserComponent.vue"),
    },
    {
        path: "/create",
        name: "create",
        component: () => import("./components/CreateComponent.vue"),
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: () => import("./components/EditComponent.vue"),
    },
];
