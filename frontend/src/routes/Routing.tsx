import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import TestPage from "../pages/TestPage";

interface RouteType {
  path: string;
  isPrivate: boolean;
  component: any;
}

const PrivateRoute = ({
  element,
  isAuthenticated,
}: {
  element: any;
  isAuthenticated: Boolean;
}) => {
  console.log({ isAuthenticated });
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const GetRoutes = () => {
  //const isAuthenticated = useSelector(IsLoggedIn);

  return (
    <Routes>
      {routeList.map((route: RouteType, index) =>
        route.isPrivate ? (
          <Route
            path={route.path}
            key={index}
            element={
              <PrivateRoute
                isAuthenticated={true}
                element={route.component}
              />
            }
          />
        ) : (
          <Route path={route.path} key={index} element={route.component} />
        )
      )}
    </Routes>
  );
};

export const routeList: RouteType[] = [
  {
    path: "/",
    isPrivate: false,
    component: <TestPage />,
  },
  {
    path: "/home",
    isPrivate: true,
    component: <TestPage />,
  },
];

export default GetRoutes;