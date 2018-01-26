import React from "react";
import '../styles/BlogPost.scss';

const BlogPost = (props) => {
  const createBody = (body) => { return { __html: body }; };

  return (
    <div className='BlogPost'>
      <div className="BlogPost__Header">
        <a href={props.url} className='BlogPost__Title'> {props.title} </a>
        <span className='BlogPost__Sub'>{props.date}</span>
      </div>
      <div className='BlogPost__Info' dangerouslySetInnerHTML={createBody(props.info)} />
    </div>
  );
};

export default BlogPost;
