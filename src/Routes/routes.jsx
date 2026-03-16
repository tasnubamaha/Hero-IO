import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import AllApps from '../pages/AllApps/AllApps'
import AppDetails from '../pages/AppDetails/AppDetails'
import MyInstallation from '../pages/MyInstallation/MyInstallation'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <AllApps />
      },
      {
        path: "apps/:id",
        element: <AppDetails />
      },
      {
        path: "installation",
        element: <MyInstallation />
      }
    ],
  },
])
