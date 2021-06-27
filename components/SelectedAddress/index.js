import Card from './Card';
import Header from './Header';

export default function SelectedAddress() {
    return (
        <>
            <Header />
            <div className='flex flex-col mt-6 mb-12 gap-y-4'>
                <Card />
                <Card />
            </div>
        </>
    );
}
