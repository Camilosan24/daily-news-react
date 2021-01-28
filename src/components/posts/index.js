import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import NewsLetter from "../utils/newsLetter";
import { getPostById, clearPostById } from "../../store/actions";
import { showToast } from "../utils/tools";

const PostComponent = (props) => {
	const post = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	console.log(post);
	useEffect(() => {
		dispatch(getPostById(props.match.params.id));
   }, [dispatch, props.match.params.id]);

   useEffect(()=>{
      return () =>
      dispatch(clearPostById())
   },[dispatch])

   useEffect(()=>{
      if(post.postById === '404'){
         showToast('ERROR', 'The page you request is not avaible')
         props.history.push('/')
      }
   },[post])
	return (
		<>
			{post.postById ? (
				<div className="article_container">
					<h1>{post.postById.title}</h1>
					<div
						className="image"
						style={{ background: `url(${post.postById.imagexl})` }}
					></div>
					<div className="author">
						Created By <span>{post.postById.author}</span>
						<Moment format="DD MMMM">{post.postById.createdAt}</Moment>
					</div>
               <div className="mt-3">
                  <div dangerouslySetInnerHTML={{__html: post.postById.content}}></div>
               </div>
				</div>
			) : null}
			<NewsLetter />
		</>
	);
};

export default PostComponent;
