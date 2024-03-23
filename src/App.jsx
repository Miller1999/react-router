import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Profile from "./pages/profile";
import Menu from "./components/menu";
import BlogPost from "./components/blogPost";

function App() {
	//Hash Router usado de esta manera /#/, a partir de aqui se deben escribir los endpoints a los que queramos ir, se usa mas que nada para el front
	// Se usa : para que la aplicacion detecte lo que esta despues y vambie el contenido teniendo en cuenta la URL
	return (
		<Fragment>
			<HashRouter>
				<Menu />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:slug" element={<BlogPost />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<p>Not found</p>} />
				</Routes>
			</HashRouter>
		</Fragment>
	);
}

export default App;
