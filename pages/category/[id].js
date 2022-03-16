import PostsList from "../../components/posts/postsList.component";

function Category({categoryInformations, headlines})
{
	return (
		<div className="container relative mx-auto md:px-32 p-4">
			<p className="text-3xl text-gray font-bold py-4 ">Nos derniers articles - {categoryInformations.categoryName}</p>
			{(headlines && headlines.articles) && <PostsList posts={headlines.articles}/>}
		</div>
	);
}

function getCategoryInformationsById(id)
{
	switch(id)
	{
		case 'politics':
			return {
				categoryName: 'Politique',
				categorySearch: 'politics'
			}
		case 'environment':
			return {
				categoryName: 'Environnement',
				categorySearch: 'environment'
			}
		case 'movie':
			return {
				categoryName: 'Cinéma',
				categorySearch: 'movie'
			}
		case 'music':
			return {
				categoryName: 'Musique',
				categorySearch: 'music'
			}
		case 'lifestyle':
			return {
				categoryName: 'Lifestyle',
				categorySearch: 'life'
			}
		default:
			return {
				categoryName: 'Inconnu',
				categorySearch: undefined
			}
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {id: 'politics'}
			},
			{
				params: {id: 'environment'}
			},
			{
				params: {id: 'movie'}
			},
			{
				params: {id: 'music'}
			},
			{
				params: {id: 'lifestyle'}
			},
		],
		fallback: false
	}
}


export async function getStaticProps({params})
{
	const API_KEY = process.env.REACT_APP_API_KEY;
	const categoryInformations = getCategoryInformationsById(params.id);
	const headlines = categoryInformations.categorySearch != null ? await fetch('https://newsapi.org/v2/everything?q=' + categoryInformations.categorySearch + '&apiKey=' + API_KEY).then(res => res.json()) : undefined;
	
	return {
	  props: {headlines, categoryInformations},
	};
}
export default Category;