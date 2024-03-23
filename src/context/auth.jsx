import { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

// simular una lista de administradores traidas del back por ejemplo
const adminList = ["Irisval", "RetaxMaster", "freddier"];

const AuthContext = createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const login = ({ username }) => {
		// Encontrar is el username pertenece a algun administrador, y se le asigna isAdmin si es true
		const isAdmin = adminList.find((admin) => admin === username);
		setUser({ username: username, isAdmin: isAdmin });
		navigate("/profile");
	};
	const logout = () => {
		setUser(null);
		navigate("/");
	};
	const auth = { user, login, logout };
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

// Se crea para proteger la redireccion manual
function AuthRoute({ children }) {
	const auth = useAuth();
	if (!auth.user) {
		return <Navigate to="/login" />;
	} else {
		return children;
	}
}

export { AuthProvider, useAuth, AuthRoute };
