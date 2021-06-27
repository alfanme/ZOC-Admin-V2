import { PrinterIcon } from '@heroicons/react/solid';

export default function Header() {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='ml-2 text-2xl font-bold text-gray-700'>
                Alamat Terpilih
            </h1>
            <button className='flex justify-center items-center px-4 h-12 rounded-lg bg-white text-blue-500 shadow-md'>
                <PrinterIcon className='w-6 h-6' />
                <p className='ml-2 font-bold uppercase'>Print</p>
            </button>
        </div>
    );
}
