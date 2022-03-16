import PostItem from './postItem.component.js';

function PostsList({ posts })
{
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{posts.map((value, index) => {
				return <PostItem post={value} key={index}/>
			})}
		</div>
	);
}

export default PostsList;