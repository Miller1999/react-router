import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import blogData from "../components/blogData";

const Blog = () => {
	//El componente Outlet se usa para renderizar las paginas hijas o Nested pages
	return (
		<Fragment>
			<h1>Blog</h1>
			<Outlet />
			<ul>
				{blogData.map((post) => (
					<BlogLink post={post} key={post.title} />
				))}
			</ul>
		</Fragment>
	);
};

const BlogLink = ({ post }) => {
	return (
		<li>
			<Link to={`/blog/${post.slug}`}>{post.title}</Link>
		</li>
	);
};

export default Blog;
