import { Fragment } from "react";
import { useAuth } from "../context/auth";

const Logout = () => {
	const auth = useAuth();
	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};
	return (
		<Fragment>
			<h1>Logout</h1>
			<form onSubmit={logout}>
				<label>Seguro quiere salir?</label>
				<button type="submit">Salir</button>
			</form>
		</Fragment>
	);
};

export default Logout;
