// COMPONENTS
import Header from './header.layout.component.js';
import Footer from './footer.layout.component.js';

function Layout({ children })
{
	return (
		<div className="flex flex-col bg-backgroundColor h-screen">
			<div className="bg-backgroundColor">
				<Header/>
				<main>{children}</main>
				<Footer/>
			</div>
		</div>
	);
}

export default Layout;

