import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Profile from "./pages/profile";
import Menu from "./components/menu";

function App() {
	//Hash Router usado de esta manera /#/, a partir de aqui se deben escribir los endpoints a los que queramos ir, se usa mas que nada para el front
	return (
		<Fragment>
			<HashRouter>
				<Menu />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<p>Not found</p>} />
				</Routes>
			</HashRouter>
		</Fragment>
	);
}

export default App;
