import PostItem from './postItem.component.js';

function PostsList({ posts, openPost })
{
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{posts.map((value, index) => {
				return <PostItem openPost={openPost} post={value} key={index}/>
			})}
		</div>
	);
}

export default PostsList;