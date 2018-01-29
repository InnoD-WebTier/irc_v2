import React from "react";
import BlogPost from '../components/BlogPost';
import '../styles/BlogList.scss';


const BlogList = props => (
  <div className="BlogList">
    {props.blogposts.map((blogpost) => {
      return (<BlogPost
        title={blogpost.node.frontmatter.title}
        subtitle={blogpost.node.frontmatter.subtitle}
        date={blogpost.node.frontmatter.date}
        info={blogpost.node.html}
        url={blogpost.node.frontmatter.url}
      />);
    })}
  </div>
);

export default BlogList;
