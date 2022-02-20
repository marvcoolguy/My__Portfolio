import '../styles/globals.css';
import { Layout } from '../components/Layout';

import { ProjectProvider } from '../context/ProjectContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProjectProvider>
  );
}

export default MyApp;
