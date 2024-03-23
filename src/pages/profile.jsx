import { Fragment } from "react";
import { useAuth } from "../context/auth";

const Profile = () => {
	const auth = useAuth();
	return (
		<Fragment>
			<h1>Profile</h1>
			<p>Welcome, {auth.user.username}</p>
		</Fragment>
	);
};

export default Profile;
