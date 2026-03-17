import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home'
import AllApps from '../pages/AllApps/AllApps'
import AppDetails from '../pages/AppDetails/AppDetails'
import MyInstallation from '../pages/MyInstallation/MyInstallation'
import ErrorPage404 from '../pages/ErrorPage400/ErrorPage400'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404/>,
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
      },
      
      {
        path: "*",
        element: <ErrorPage404 />  
      }
    ],
  },
])