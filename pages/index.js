// COMPONENTS
import Category from "../components/category.component";


function Home({headlines})
{
	return (
		<div className="container relative mx-auto md:px-32 p-4">
			{
				(headlines && headlines.articles && headlines.articles[0]) &&
				<>
					<p className="text-white text-3xl font-bold bg-black rounded-full px-4 py-1 w-48 text-center">À la une</p>
					<div className="flex flex-col md:flex-row bg-[#1E32C8] justify-between rounded-lg my-4 h-128">
						<p className="text-white text-2xl md:text-4xl font-bold p-8">{headlines.articles[0].title}</p>
						<img className="object-contain rounded-b-lg md:rounded-r-lg md:w-1/2" src={headlines.articles[0].urlToImage}/>
					</div>
				</>
			}
			{headlines.articles && <Category categoryTitle="Nos derniers articles" posts={headlines.articles}/>}
		</div>
	)
}

export async function getStaticProps()
{
	const API_KEY = process.env.REACT_APP_API_KEY;
	const headlines = await fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=' + API_KEY).then(res => res.json());
	
	if (headlines && headlines.articles)
		headlines.articles = headlines.articles.filter(value => value.urlToImage != null);
	
	return {
	  props: {headlines},
	};
}

export default Home;
