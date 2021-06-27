import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';

const iconClass = 'w-6 h-6';

export default function Card() {
    return (
        <div className='w-full p-4 rounded-xl bg-white shadow-md'>
            {/* Text Area */}
            <div className='m-2 mb-4'>
                <p>Lorem Ipsum</p>
                <p>+628123456789</p>
                <p className='line-clamp-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, adipisci aliquid. Aspernatur mollitia natus quis.
                </p>
            </div>

            {/* Button Area */}
            <div className='flex items-center gap-4'>
                <button className='grid place-items-center flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 text-gray-500'>
                    <TrashIcon className={iconClass} />
                </button>
                <button className='grid place-items-center flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 text-gray-500'>
                    <PencilIcon className={iconClass} />
                </button>
                <button className='flex flex-1 justify-center items-center flex-shrink-0 h-12 rounded-lg bg-blue-500 text-white shadow-md'>
                    <CheckCircleIcon className={iconClass} />
                    <p className='ml-2 font-bold uppercase'>Pilih</p>
                </button>
            </div>
        </div>
    );
}
