import { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogPost = () => {
	//Usando useParams() recibimos la informacion despues de : en las URL
	const { slug } = useParams();
	//Usar useNavigation para acceder a la navegacion sin el uso de Link o NavLink, permite acceder y recrear las funciones de las flechas del naegador esto uasndolo de esta manera navigation(-1)
	const navigate = useNavigate();

	const blogpost = blogData.find((post) => post.slug === slug);
	const returnToBlog = () => {
		navigate("/blog");
	};

	return (
		<Fragment>
			<h2>{blogpost.title}</h2>
			<button onClick={returnToBlog}>Volver al blog</button>
			<p>{blogpost.content}</p>
			<p>{blogpost.author}</p>
		</Fragment>
	);
};

export default BlogPost;
