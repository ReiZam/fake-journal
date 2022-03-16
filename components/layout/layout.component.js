// COMPONENTS
import Header from './header.layout.component.js';
import Footer from './footer.layout.component.js';

function Layout({ children })
{
	return (
		<>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	);
}

export default Layout;

