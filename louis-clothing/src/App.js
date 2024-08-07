import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home/home.component";
import Navigation from "./component/routes/navigation/navigation.componenet";
import Authentication from "./component/routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="shop"
          element={<Shop />}
        />
        <Route
          path="auth"
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
