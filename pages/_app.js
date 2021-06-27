import 'tailwindcss/tailwind.css';
import '../global.css';
import Layout from '../components/Layout';
import { ModalProvider } from '../context/ModalContext';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <ModalProvider>
                <Component {...pageProps} />
            </ModalProvider>
        </Layout>
    );
}

export default MyApp;
