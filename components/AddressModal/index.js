import { useModal } from '../../context/ModalContext';
import AddAdress from './AddAdress';

function ModalContent(modal) {
    switch (modal.mode) {
        case 'add':
            return <AddAdress />;
    }
}

export default function AddressModal({ show }) {
    const { modal } = useModal();

    return (
        <div
            className={`fixed top-0 inset-x-0 z-50 w-screen h-screen
                        bg-black bg-opacity-25
                        transition-all ease-in-out
                        ${
                            show
                                ? 'top-0 duration-100 bg-opacity-25'
                                : '-top-full duration-300 bg-opacity-0'
                        }`}>
            <div
                className={`fixed bottom-0 inset-x-0 bg-white
                            px-4 pt-8 pb-4 rounded-t-xl
                            transition-all ease-in-out
                            ${
                                show
                                    ? 'bottom-0 duration-500'
                                    : '-bottom-full duration-300'
                            }`}>
                {ModalContent(modal)}
            </div>
        </div>
    );
}
