// STYLES
import '../styles/globals.css';

// COMPONENTS
import Layout from '../components/layout/layout.component.js';

function FakeJournalApp({ Component, pageProps }) {
  return (
	<Layout>
		<Component {...pageProps} />
	</Layout>
  );
}

export default FakeJournalApp
