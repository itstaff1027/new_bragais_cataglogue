import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

// import Gallery from '@/Pages/Gallery/Page';
// import HowToOrder from '@/Pages/Footer/HowToOrder';
// import PublicLayout from '@/Layouts/PublicLayout';
// import { urlPath, womens, top, body, banner } from '@/Constant/Value';
import { urlPath, womens, top, body, banner } from '@/Components/Constants/Value';

import PublicLayout from '@/Layouts/PublicLayout';

export default function Welcome({ featured_images }) {

    // const [top, setTop] = useState([]);
    // const [body, setBody] = useState([]);

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

    return (
        <PublicLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Jojo Bragais - Womens
                </h2>
            }
        >
            {/* <Head title="JOJO BRAGAIS" /> */}
            <div className="bg-[#020E29] min-h-screen">

                {featured_images
                ?.filter(
                    (top_section) => top_section.section_name === top
                )
                .map((top_image, i) => (
                    <>
                        {/* Top Fullscreen Image */}
                        <section className="relative mt-8">
                            <img
                                src={`${urlPath}${top_image.image_path}`} // Use dynamic image path
                                alt={`Top Section ${i}`}
                                className="relative inset-0 w-full h-full object-cover"
                            />
                        </section>
                    </>
                ))}

            {/* First Product Carousel */}
            <section className="py-16">
                <h2 className="text-center text-white text-2xl mb-8">Featured Products</h2>
                <div className="carousel-container mx-auto flex sm:justify-center sm:items-center space-x-4 overflow-x-auto px-8">
                    <div className="carousel-item w-72 h-[400px] bg-gray-300 rounded shadow-lg flex-shrink-0">
                        test
                    </div>
                </div>
            </section>

                {featured_images
                ?.filter(
                    (top_section) => top_section.section_name === body
                )
                .map((top_image, i) => (
                    <>
                        {/* Second Fullscreen Image */}
                        <section className="relative mt-8">
                            <img
                                src={`${urlPath}${top_image.image_path}`} // Use dynamic image path
                                alt={`Second Section ${i}`}
                                className="relative inset-0 w-full h-full object-cover"
                            />
                        </section>
                    </>
                ))}

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
