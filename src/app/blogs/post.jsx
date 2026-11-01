import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../content/blogs";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);

  if (!post) {
    return (
      <section className="blog-post-page">
        <h1>[ BLOG_NOT_FOUND ]</h1>
        <p>This post could not be found.</p>
        <Link to="/blogs">← BACK_TO_BLOGS</Link>
      </section>
    );
  }

  const { Content } = post;

  return (
    <article className="blog-post-page">
      <Link to="/blogs">← BACK_TO_BLOGS</Link>
      <header className="blog-post-header">
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
      </header>
      <div className="blog-article">
        <Content />
      </div>
    </article>
  );
}
