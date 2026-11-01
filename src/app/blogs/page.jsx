import { Link } from "react-router-dom";
import { blogPosts } from "../../content/blogs";

export default function BlogsPage() {
  return (
    <section className="blogs-page">
      <h1>[ /blogs ]</h1>
      <p className="blogs-intro">Notes on technology, hardware, photography, and the things I make.</p>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <Link to={`/blogs/${post.slug}`} className="blog-card-link">
              <img src={post.coverImage} alt={post.coverImageAlt} />
              <div>
                <time dateTime={post.date}>{post.date}</time>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span>READ_MORE →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
