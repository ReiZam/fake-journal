// COMPONENTS
import Header from './header.layout.component.js';
import Footer from './footer.layout.component.js';

function Layout({ children })
{
	return (
		<div className="flex flex-col bg-backgroundColor h-screen">
			<Header/>
			<main>{children}</main>
			<Footer/>
		</div>
	);
}

export default Layout;

