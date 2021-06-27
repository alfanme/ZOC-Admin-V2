import { PlusIcon } from '@heroicons/react/solid';

export default function FloatingButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className='fixed bottom-28 right-4 grid place-items-center
                            w-16 h-16 bg-white text-blue-500 rounded-full
                            shadow-lg active:shadow-md'>
            <PlusIcon className='w-10 h-10' />
        </button>
    );
}
