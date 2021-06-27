import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    LocationMarkerIcon as AddressIcon,
    BookOpenIcon as ServingIcon,
    TruckIcon as ShipmentIcon,
    UserGroupIcon as EmployeeIcon,
} from '@heroicons/react/outline';
import {
    LocationMarkerIcon as AddressIconActive,
    BookOpenIcon as ServingIconActive,
    TruckIcon as ShipmentIconActive,
    UserGroupIcon as EmployeeIconActive,
} from '@heroicons/react/solid';

const iconClass = 'w-8 h-8';

const pages = [
    {
        title: 'Alamat',
        icon: <AddressIcon className={iconClass} />,
        iconActive: <AddressIconActive className={iconClass} />,
        route: '/address',
    },
    {
        title: 'Penyajian',
        icon: <ServingIcon className={iconClass} />,
        iconActive: <ServingIconActive className={iconClass} />,
        route: '/serving',
    },
    {
        title: 'Pengiriman',
        icon: <ShipmentIcon className={iconClass} />,
        iconActive: <ShipmentIconActive className={iconClass} />,
        route: '/shipment',
    },
    {
        title: 'Karyawan',
        icon: <EmployeeIcon className={iconClass} />,
        iconActive: <EmployeeIconActive className={iconClass} />,
        route: '/employee',
    },
];

export default function NavigationBar({ show }) {
    const { pathname } = useRouter();

    return (
        <div
            className={`fixed bottom-0 inset-x-0 flex justify-around
                        items-center px-4 h-20 bg-white shadow-md
                        transition-all duration-300 ease-in-out
                        ${show ? 'bottom-0' : '-bottom-full'}`}>
            {pages.map((page) => (
                <Link href={page.route} key={page.title}>
                    <a
                        className='flex flex-col justify-center
                                items-center text-gray-500'>
                        {pathname === page.route ? page.iconActive : page.icon}
                        <p className='mt-1 text-xs'>{page.title}</p>
                    </a>
                </Link>
            ))}
        </div>
    );
}
