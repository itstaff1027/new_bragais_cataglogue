import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
// import Gallery from '@/Pages/Gallery/Page';
// import HowToOrder from '@/Pages/Footer/HowToOrder';
// import PublicLayout from '@/Layouts/PublicLayout';
// import { urlPath } from '@/Constant/Constant';

import PublicLayout from '@/Layouts/PublicLayout';

export default function Welcome({ laravelVersion, phpVersion, images }) {

    const [top, setTop] = useState([]);
    const [body, setBody] = useState([]);

    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    // useEffect(() => {
        

    //     const top = images.filter(name => name.section_name === 'top')[0];
    //     const body = images.filter(name => name.section_name === 'body')[0];
    //     setTop(top.images.filter(filter => filter.gender === 'womens').map(test => test.image_url));
    //     setBody(body.images.filter(filter => filter.gender === 'womens').map(test => test.image_url))


    // }, []);

    return (
        <PublicLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Jojo Bragais - Womens
                </h2>
            }
        >
            {/* <Head title="JOJO BRAGAIS" /> */}
            <div className=" min-h-screen">

            {/* Top Fullscreen Image */}
            <section className="relative mt-8">
                <img
                    src="/assets/chel1.jpg"
                    alt="Top Section"
                    className="relative inset-0 w-full h-full"
                    layout="fill" objectFit="cover"
                />
            </section>

            {/* First Product Carousel */}
            <section className="py-16">
                <h2 className="text-center text-white text-2xl mb-8">Featured Products</h2>
                <div className="carousel-container mx-auto flex sm:justify-center sm:items-center space-x-4 overflow-x-auto px-8">
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                </div>
            </section>

            {/* Second Fullscreen Image */}
            <section className="relative">
                <img
                    src="/assets/muph2024.jpg"
                    alt="Second Section"
                    className="relative inset-0 w-full h-full"
                    layout="fill" objectFit="cover"
                />
            </section>

            {/* Second Product Carousel */}
            <section className="py-16">
                <h2 className="text-center text-white text-2xl mb-8">New Arrivals</h2>
                <div className="carousel-container mx-auto flex sm:justify-center sm:items-center space-x-4 overflow-x-auto px-8">
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                    <div className="carousel-item w-64 h-64 bg-gray-300 rounded shadow-lg flex-shrink-0"></div>
                </div>
            </section>


        </div>
        </PublicLayout>
    );
}
