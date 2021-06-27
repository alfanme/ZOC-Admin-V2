import { useState, createContext, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
    const [modal, setModal] = useState({
        mode: '', // ['add', 'edit', 'select']
        show: false,
    });

    const value = {
        modal,
        setModal,
    };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
}
