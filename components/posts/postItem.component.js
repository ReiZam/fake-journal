function PostItem({ post })
{
	return (
		<div className="transition ease-in-out delay-50 cursor-pointer active:-translate-y-0 hover:-translate-y-1 flex flex-col">
			<img className="object-fill rounded-lg" src={post.urlToImage}/>
			<p className="font-regular text-xl p-4 text-center">{post.title}</p>
		</div>
	);
}

export default PostItem;