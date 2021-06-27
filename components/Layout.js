import NavigationBar from './NavigationBar';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const { pathname } = useRouter();

    return (
        <main className='p-4'>
            <div className='mb-24'>{children}</div>
            <NavigationBar show={pathname !== '/' ? true : false} />
        </main>
    );
}
