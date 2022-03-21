export const routes = [
    {
        path: "/",
        name: "users",
        component: UserComponent,
    },
    {
        path: "/create",
        name: "create",
        component: CreateComponent,
    },
    {
        path: "/edit/{id}",
        name: "edit",
        component: EditComponent,
    },
];

//   const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
//   })
//   export default router
