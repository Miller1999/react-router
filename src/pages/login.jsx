import { Fragment, useState } from "react";
import { useAuth } from "../context/auth";

const Login = () => {
	const auth = useAuth();
	const [userName, setUserName] = useState("");
	const login = (e) => {
		e.preventDefault();
		auth.login({ userName });
	};
	return (
		<Fragment>
			<h1>Login</h1>
			<form onSubmit={login}>
				<label>Escribe tu nombre de usuario:</label>
				<input value={userName} onChange={(e) => setUserName(e.target.value)} />
				<button type="submit">Entrar</button>
			</form>
		</Fragment>
	);
};

export default Login;
