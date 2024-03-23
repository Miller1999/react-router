import { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogPost = () => {
	//Usando useParams() recibimos la informacion despues de : en las URL
	const { slug } = useParams();
	//Usar useNavigation para acceder a la navegacion sin el uso de Link o NavLink, permite acceder y recrear las funciones de las flechas del naegador esto uasndolo de esta manera navigation(-1)
	//Sin embargo, useNavigate permite ejecutar codigo js lo que hace que uno pueda hacer lo que se quiera con la navegacion, reenviar a otri sitio si no se ha autenticado despues de x tiempo, redirigirlos en el moemnto en que pasen 30s de video, etc. Esto permite que uno no se limite a solo paginas html harcodeadas
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
