import { useRouter } from 'next/router';
import { SearchIcon, HomeIcon } from '@heroicons/react/solid';

export default function SearchBar() {
    const router = useRouter();

    return (
        <div
            className='sticky top-4 z-50 flex justify-between
                        items-center gap-4 mb-8 h-14'>
            <button
                onClick={() => router.push('/')}
                className='grid place-items-center flex-shrink-0
                            w-14 h-14 rounded-xl bg-white
                            text-gray-500 shadow-xl active:shadow-md'>
                <HomeIcon className='w-6 h-6 pointer-events-none' />
            </button>
            <input
                type='text'
                placeholder='Cari nama, hp, alamat...'
                className='relative pl-6 pr-14 w-full h-full rounded-xl
                            bg-white text-gray-700 shadow-xl ring-blue-200
                            focus:shadow-none focus:ring-4 focus:outline-none'
            />
            <SearchIcon
                className='absolute top-4 right-4 w-6 h-6
                            text-gray-500 pointer-events-none'
            />
        </div>
    );
}
