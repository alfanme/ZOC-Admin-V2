import Link from 'next/link';
import { SearchIcon, HomeIcon } from '@heroicons/react/solid';

export default function SearchBar() {
    return (
        <div
            className='sticky top-4 z-50 flex justify-between
                        items-center gap-4 mb-8'>
            <Link href='/'>
                <a
                    className='grid place-items-center flex-shrink-0
                                w-14 h-14 rounded-xl bg-white text-gray-500
                                shadow-xl'>
                    <HomeIcon className='w-6 h-6' />
                </a>
            </Link>
            <div
                className='flex justify-between items-center pr-6 h-14 w-full bg-white
                        rounded-xl shadow-xl'>
                <input
                    type='text'
                    placeholder='Cari nama, hp, alamat...'
                    className='px-6 w-full h-full rounded-xl
                            bg-transparent focus:outline-none'
                />
                <SearchIcon className='w-6 h-6 text-gray-500' />
            </div>
        </div>
    );
}
