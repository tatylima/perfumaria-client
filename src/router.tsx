import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Settings from "pages/Settings";
import ManageProducts from "components/ManageProducts";

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.LOGIN} element={<Login />} />
			<Route path={RoutePath.HOME} element={<Home />} />
			<Route path={RoutePath.SETTINGS} element={<Settings />} />
			<Route path={RoutePath.SETTINGS_PRODUCTS} element={<ManageProducts />} />
		</Routes>
	);
};

export default Router;