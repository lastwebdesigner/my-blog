import striptags from 'striptags';
import { Helmet } from 'react-helmet';
import React from 'react';
import { Link } from 'gatsby';

function calculateReadingTime(html) {
  if (!html) return 'less than a minute';
  let readingTime =
    striptags(html)
      .trim()
      .split(/\s+/).length / 200;
  return Math.floor(readingTime);
}

const Postlayout = ({ post, prev, next }) => (
  <>
    {post && post.frontmatter.status !== 'draft' && (
      <React.Fragment>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <link
            rel="canonical"
            href={`https://www.antoniofullone.com/${post.frontmatter.path}`}
          />
          <meta name="description" content={post.excerpt} />
        </Helmet>
        <article className="post single container has-gutter-outside">
          <header>
            <h1 className="post__title">{post.frontmatter.title}</h1>
            <div className="post__meta">
              <time
                className="post__date"
                dateTime={new Date(post.frontmatter.date).toDateString()}
              >
                {new Date(post.frontmatter.date).toDateString()}
              </time>
              <span className="reading-time">
                {' '}
                Reading Time: {calculateReadingTime(post.html)} minutes
              </span>
            </div>
          </header>
          {post.frontmatter.image && (
            <picture className="main-image">
              <img
                className="post-image"
                src={post.frontmatter.image}
                alt={post.frontmatter.imageDesc}
              />
              <figcaption className="freight-sans--light">
                {post.frontmatter.imageDesc}
              </figcaption>
            </picture>
          )}
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <ul className="follow-links container margin-y-l next-previous">
            {prev && (
              <li className="prev">
                <Link
                  aria-label="Previous post"
                  className="prev-post"
                  to={prev.frontmatter.path}
                />
              </li>
            )}
            {next && (
              <li className="next">
                <Link
                  className="next-post"
                  aria-label="Next Post"
                  to={next.frontmatter.path}
                />
              </li>
            )}
          </ul>
        </article>
      </React.Fragment>
    )}
  </>
);

export default Postlayout;
