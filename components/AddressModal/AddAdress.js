import { useModal } from '../../context/ModalContext';
import { PaperAirplaneIcon } from '@heroicons/react/solid';

const inputClass = `
    px-4 h-12 bg-gray-100 rounded-xl
    ring-blue-200 focus:bg-white focus:ring-4
    focus:outline-none`;

const textAreaClass = `
    p-4 h-28 bg-gray-100 rounded-xl ring-blue-200
    focus:bg-white focus:ring-4 focus:outline-none
`;

export default function AddAdress() {
    const { setModal } = useModal();

    const closeModal = () =>
        setModal({
            mode: '',
            show: false,
        });

    return (
        <>
            <h1 className='mb-8 ml-2 text-2xl font-bold'>Tambah Alamat</h1>

            {/* Form Area */}
            <div className='flex flex-col gap-4'>
                <input
                    type='text'
                    placeholder='Nama pelanggan'
                    className={inputClass}
                />
                <input
                    type='text'
                    placeholder='No. Hp pelanggan'
                    className={inputClass}
                />
                <textarea
                    placeholder='Alamat pelanggan'
                    className={textAreaClass}></textarea>
            </div>

            {/* Button Area */}
            <div className='flex justify-between items-center mt-6'>
                <button
                    onClick={closeModal}
                    className='px-4 h-12 bg-gray-100 text-gray-500 rounded-xl
                                font-bold uppercase'>
                    Batal
                </button>
                <button
                    onClick={() => console.log('Tambah Alamat')}
                    className='flex justify-center items-center px-4 h-12
                                bg-blue-500 text-white rounded-xl
                                font-bold uppercase'>
                    <p className='mr-2'>Tambah</p>
                    <PaperAirplaneIcon className='w-6 h-6 rotate-90' />
                </button>
            </div>
        </>
    );
}
