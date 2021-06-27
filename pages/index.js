import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <Link href='/address'>
            <a>Go to Address</a>
        </Link>
    );
}
