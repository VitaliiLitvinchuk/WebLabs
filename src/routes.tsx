import HomePage from "./components/home-page";
import Lab5Table from "./components/table";

const rootPath = "/WebLabs";

export interface IRouteEndpoint {
    path: string,
    component: JSX.Element | null,
    name: string,
    nested: IRouteEndpoint[] | null
}

export const routes: IRouteEndpoint[] = [
    {
        path: rootPath,
        component: <HomePage />,
        name: "WEB Розробка",
        nested: null,
    },
    {
        path: `${rootPath}/lab5`,
        component: null,
        name: "Лаб 5",
        nested: [
            {
                path: `${rootPath}/lab5/table`,
                component: <Lab5Table />,
                name: "Таблиця",
                nested: null,
            },
        ]
    }
]

export default rootPath; 
