function PostDetails({post, openPost})
{
	return (
		<div className="flex justify-between flex-col p-4 space-y-4">
			<img className="object-contain rounded-lg" src={post.urlToImage}/>
			<p className="text-xl font-medium">{post.title}</p>
			<p className="text-sm">{post.description}...</p>
			<button className="bg-black text-white rounded-lg" onClick={() => {
				openPost(null);
			}}>Fermer</button>
		</div>
	);
}

export default PostDetails;