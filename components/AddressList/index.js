import Card from './Card';
import Header from './Header';

export default function AddressList() {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-y-4 mt-6'>
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}
