import Link from "next/link";
import { useEffect, useState } from "react";

function useWindowDimension()
{
	const [width, setWindowWidth] = useState(0);
	const [height, setWindowHeight] = useState(0);

	const updateDimensions = () => {
		setWindowWidth(window.innerWidth)
		setWindowHeight(window.innerHeight);
	};

	return {
		width,
		height,
		updateDimensions
	};
}

function Header()
{
	let [menuOpen, setMenuOpen] = useState(false);
	const dimension = useWindowDimension();

	useEffect(() => {
		dimension.updateDimensions();

		window.addEventListener('resize', dimension.updateDimensions);

		return () => window.removeEventListener('resize', dimension.updateDimensions);
	}, []);

	return (
		<nav className="relative py-6 bg-white">
			<div className="container mx-auto px-4 md:px-0 flex justify-between md:items-center space-y-4 flex-col">
				<div className="flex flex-row justify-between">
					<Link href="/" >
						<div className="flex flex-row cursor-pointer">
							<p className="text-3xl font-thin">fake journal</p>
							<p className="text-3xl font-regular hover:text-yellow">.</p>
						</div>
					</Link>
					<button onClick={() => {setMenuOpen(!menuOpen)}} type="button" className="inline-flex items-center p-2 ml-1 text-sm bg-black md:hidden hover:bg-black/90 focus:outline-none focus:ring-1 focus:ring-gray-200">
						<svg className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
				</div>
				{
					(menuOpen || (dimension.width >= 768)) &&
					<ul className="flex md:space-x-16 md:flex-row flex-col">
						<li className="cursor-pointer text-lg font-bold hover:text-political_color">
							<Link href="/category/politics">Politique</Link>
						</li>
						<li className="cursor-pointer text-lg font-bold hover:text-environment_color">
							<Link href="/category/environment">Environnement</Link>
						</li>
						<li className="cursor-pointer text-lg font-bold hover:text-cinema_color">
							<Link href="/category/movie">Cinéma</Link>
						</li>
						<li className="cursor-pointer text-lg font-bold hover:text-music_color">
							<Link href="/category/music">Musique</Link>
						</li>
						<li className="cursor-pointer text-lg font-bold hover:text-lifestyle_color">
							<Link href="/category/lifestyle">Lifestyle</Link>
						</li>
					</ul>
				}
				
			</div>
		</nav>
	);
}

export default Header;