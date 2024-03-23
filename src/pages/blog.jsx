import { Fragment } from "react";
import { Link } from "react-router-dom";
import blogData from "../components/blogData";

const Blog = () => {
	return (
		<Fragment>
			<h1>Blog</h1>
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
