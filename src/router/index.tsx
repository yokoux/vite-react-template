import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages";

export enum RoutePaths {
  DEFAULT = "/",
}

const AppRouter = () => {
  const routeDefs = [
    {
      path: RoutePaths.DEFAULT,
      element: <App />,
    },
  ];

  const composeRoutes = () => {
    let elems = [];
    for (const rdef of routeDefs) {
      elems.push(<Route path={rdef.path} element={rdef.element} />);
    }
    return elems;
  };

  return (
    <BrowserRouter>
      <Routes>
        {composeRoutes()}

        <Route
          path="*"
          element={
            <main>
              <h1>404</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
