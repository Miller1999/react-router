import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogPost = () => {
	//Usando useParams() recibimos la informacion despues de : en las URL
	const { slug } = useParams();

	const blogpost = blogData.find((post) => post.slug === slug);
	return (
		<Fragment>
			<h2>{blogpost.title}</h2>
			<p>{blogpost.content}</p>
			<p>{blogpost.author}</p>
		</Fragment>
	);
};

export default BlogPost;
