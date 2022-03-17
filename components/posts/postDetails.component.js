function PostDetails({post, closePost})
{
	return (
		<div className="flex justify-between flex-col p-4 space-y-4 max-h-[85vh] overflow-y-auto">
			<img className="object-contain rounded-lg" src={post.urlToImage}/>
			<p className="text-xl font-medium">{post.title}</p>
			<p className="text-sm">{post.description}...</p>
			<button className="bg-black text-white rounded-lg" onClick={() => {
				closePost();
			}}>Fermer</button>
		</div>
	);
}

export default PostDetails;