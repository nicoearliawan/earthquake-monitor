import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Today from "../pages/Today"
import Template from "../Template"
import LastWeek from "../pages/LastWeek"

export const router = createBrowserRouter([
    {
        path: "/", element: <Template />,
        children: [
            { path: "/", element: <App /> },
            { path: "/today", element: <Today /> },
            { path: "/last-week", element: <LastWeek /> },
        ]
    }
])