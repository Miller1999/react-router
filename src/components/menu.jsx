import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

const Menu = () => {
	//! Link -> Se usa para generar el mismo comportamiento de <a></a>
	//! NavLink -> Igual que Link, la diferencia radica en que se puede usar una funcion para saber si un link esta activo o no
	//* Se suele usar un arreglo con routes donde se ingresan objetos con la informacion que se quiere, de esta manera se puede renderizar usando un .map
	const routes = [];
	routes.push({
		to: "/",
		text: "Home",
		private: false,
	});
	routes.push({
		to: "/blog",
		text: "Blog",
		private: false,
	});
	routes.push({
		to: "/profile",
		text: "Profile",
		private: true,
	});
	routes.push({
		to: "/login",
		text: "Login",
		private: false,
		publicOnly: true,
	});
	routes.push({
		to: "/logout",
		text: "Logout",
		private: true,
	});
	const auth = useAuth();
	return (
		<nav>
			<ul>
				{routes.map((route) => {
					if (route.publicOnly && auth.user) return null;
					if (route.private && !auth.user) return null;
					return (
						<li key={route.text}>
							<NavLink
								to={route.to}
								style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
							>
								{route.text}
							</NavLink>
						</li>
					);
				})}
				{/*				
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
        <li>
					<NavLink
						to="/"
						style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/blog"
						style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
					>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/profile"
						style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
					>
						Profile
					</NavLink>
				</li>
      */}
			</ul>
		</nav>
	);
};

export default Menu;
