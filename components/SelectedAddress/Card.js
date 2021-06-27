import { XIcon } from '@heroicons/react/solid';
export default function Card() {
    return (
        <div className='flex justify-between items-center w-full p-4 rounded-xl shadow-md bg-white'>
            <button className='grid place-items-center flex-shrink-0 w-12 h-12 rounded-full bg-red-100 text-red-500'>
                <XIcon className='w-6 h-6' />
            </button>
            <div className='ml-4 mr-6'>
                <p>Lorem Ipsum</p>
                <p className='line-clamp-1'>Pengirim: Lorem ipsum dolor sit</p>
            </div>
            <button className='grid place-items-center flex-shrink-0 w-12 h-12 rounded-lg bg-white text-blue-500 shadow-lg'>
                <p className='text-2xl font-bold'>3</p>
            </button>
        </div>
    );
}
