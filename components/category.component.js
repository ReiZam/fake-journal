import { useState } from "react";
// COMPONENT
import PostDetails from "./posts/postDetails.component";
import PostsList from "./posts/postsList.component";

function Category({ categoryTitle, posts })
{
	let [post, setPost] = useState(null);

	let openPost = (newPost) => {
		if (!post)
			setPost(newPost);
	}

	let closePost = () => {
		setPost(null);
	}

	return (
		<>
			{post &&
				<div className="flex top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 fixed bg-white bg-black shadow rounded-lg">
					<PostDetails post={post} closePost={closePost}/>
				</div>
				}
				<p className="text-3xl text-gray font-bold py-4 ">{categoryTitle}</p>
				<PostsList posts={posts} openPost={openPost}/>
		</>
	);
}

export default Category;