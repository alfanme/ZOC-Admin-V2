import SearchBar from '../../components/SearchBar';
import SelectedAddress from '../../components/SelectedAddress';
import AddressList from '../../components/AddressList';
import FloatingButton from '../../components/FloatingButton';
import AddressModal from '../../components/AddressModal';
import { useModal } from '../../context/ModalContext';

export default function address() {
    const { modal, setModal } = useModal();

    const addModalHandler = () =>
        setModal({
            mode: 'add',
            show: true,
        });

    return (
        <>
            <SearchBar />
            <SelectedAddress />
            <AddressList />
            <AddressModal show={modal.show} />
            <FloatingButton onClick={addModalHandler} />
        </>
    );
}
