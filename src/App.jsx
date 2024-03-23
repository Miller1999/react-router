import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Profile from "./pages/profile";
import { AuthProvider } from "./context/auth";
import Menu from "./components/menu";
import BlogPost from "./components/blogPost";
import Login from "./pages/login";
import Logout from "./pages/logout";

function App() {
	//Hash Router usado de esta manera /#/, a partir de aqui se deben escribir los endpoints a los que queramos ir, se usa mas que nada para el front
	// Se usa : para que la aplicacion detecte lo que esta despues y vambie el contenido teniendo en cuenta la URL
	//! Al modificar el Route al abrirlo y cerralo podemos crear nested routes de esta manera se pueden alojar rutas hijas, esto se puede repeitir todas las veces que se quiera
	return (
		<Fragment>
			<HashRouter>
				<AuthProvider>
					<Menu />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />}>
							<Route path=":slug" element={<BlogPost />} />
						</Route>
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="*" element={<p>Not found</p>} />
					</Routes>
				</AuthProvider>
			</HashRouter>
		</Fragment>
	);
}

export default App;
