import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { urlPath, womens, top, body, banner } from '@/Components/Constants/Value';

export default function Womens({ featured_images, featured_products, new_arrivals, filtered_products, filters, banner }) {
    const [activeFilter, setActiveFilter] = useState(filters?.filter(id => id.category === womens).map(id => id.id)[0]); // Track active filter

    const handleFilterClick = (filter_id) => {
        setActiveFilter(filter_id); // Update the active filter
    };

    useEffect(() => {
        console.log(featured_products);
    }, []);

    return (
        <PublicLayout
            header={
                <h2 className="text-2xl font-bold text-center text-gray-900">
                    Jojo Bragais - Women's Collection
                </h2>
            }
        >
            <div className="bg-[#020E29] min-h-screen">
                {/* Top Fullscreen Image */}
                {featured_images
                    ?.filter((top_section) => top_section.section_name === top)
                    .map((top_image, i) => (
                        <section key={i} className="relative mt-8">
                            <img
                                src={`${urlPath}${top_image.image_path}`}
                                alt={`Top Section ${i}`}
                                className="relative inset-0 w-full h-auto object-cover"
                            />
                        </section>
                    ))}

                {/* First Product Carousel: Featured Products */}
                <section className="py-16">
                    <h2 className="text-center text-white text-2xl mb-8">Featured Products</h2>
                    <div className="carousel-container flex space-x-6 overflow-x-auto px-6 sm:px-12 md:px-24 lg:px-32 scrollbar-hide">
                        {featured_products
                            ?.filter((featured_product) => featured_product.category === womens)
                            .map((featured_product, i) => (
                                <div
                                    key={i}
                                    className="carousel-item w-64 sm:w-72 h-auto bg-gray-300 rounded-lg shadow-lg flex-shrink-0 hover:scale-105 transition-transform"
                                >
                                    <a
                                        href={`/product/${featured_product.category}/${featured_product.product_id}`}
                                    >
                                        <img
                                            src={`${urlPath}${featured_product.products.front_image}`}
                                            alt={`Featured Product ${i}`}
                                            className="rounded-t-lg h-auto w-full object-cover"
                                        />
                                    </a>
                                    <div className="p-4">
                                        {featured_product.products.product_name && (
                                            <a
                                                href={`/product/${featured_product.category}/${featured_product.product_id}`}
                                                className="hover:underline"
                                            >
                                                <h1 className="text-lg font-semibold text-gray-800">
                                                    {featured_product.products.product_name}
                                                </h1>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Second Fullscreen Image */}
                {featured_images
                    ?.filter((top_section) => top_section.section_name === body)
                    .map((body_image, i) => (
                        <section key={i} className="relative mt-8">
                            <img
                                src={`${urlPath}${body_image.image_path}`}
                                alt={`Body Section ${i}`}
                                className="relative inset-0 w-full h-auto object-cover"
                            />
                        </section>
                    ))}

                {/* Second Product Carousel: New Arrivals */}
                <section className="py-16">
                    <h2 className="text-center text-white text-2xl mb-8">New Arrivals</h2>
                    <div className="carousel-container flex space-x-6 overflow-x-auto px-6 sm:px-12 md:px-24 lg:px-32 scrollbar-hide">
                        {new_arrivals
                            ?.filter((new_arrival) => new_arrival.category === womens)
                            .map((new_arrival, i) => (
                                <div
                                    key={i}
                                    className="carousel-item w-64 sm:w-72 h-auto bg-gray-300 rounded-lg shadow-lg flex-shrink-0 hover:scale-105 transition-transform"
                                >
                                    <a
                                        href={`/product/${new_arrival.category}/${new_arrival.product_id}`}
                                    >
                                        <img
                                            src={`${urlPath}${new_arrival.products.front_image}`}
                                            alt={`New Arrival ${i}`}
                                            className="rounded-t-lg h-auto w-full object-cover"
                                        />
                                    </a>
                                    <div className="p-4">
                                        {new_arrival.products.product_name && (
                                            <a
                                                href={`/product/${new_arrival.category}/${new_arrival.product_id}`}
                                                className="hover:underline"
                                            >
                                                <h1 className="text-lg font-semibold text-gray-800">
                                                    {new_arrival.products.product_name}
                                                </h1>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-16 bg-gray-100">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-start items-center gap-4 mb-8 px-6">
                        {filters
                            ?.filter((filter) => filter.category === womens)
                            .map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => handleFilterClick(filter.id)}
                                    className={`px-6 py-2 text-sm font-medium rounded-full shadow-md transition-all duration-300 ${
                                        activeFilter === filter.id
                                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                                            : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-200'
                                    }`}
                                >
                                    {filter.filter_name}
                                </button>
                            ))}
                    </div>

                    {/* Horizontal Scrollable Product List */}
                    <div className="overflow-x-auto whitespace-nowrap px-6">
                        <div className="flex space-x-6">
                            {filtered_products
                                ?.filter(
                                    (product) =>
                                        product.filters.category === womens &&
                                        product.filter_id === activeFilter
                                )
                                .map((product, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform w-64 flex-shrink-0"
                                    >
                                        <a
                                            href={`/product/${product.category}/${product.product_id}`}
                                        >
                                            <img
                                                src={`${urlPath}${product.products.front_image}`}
                                                alt="Product"
                                                className="h-auto w-full object-cover"
                                            />
                                        </a>
                                        <div className="p-4">
                                            {product.products.product_name && (
                                                <h1 className="text-lg font-semibold text-gray-800">
                                                    {product.products.product_name}
                                                </h1>
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* View All Button */}
                    <div className="flex justify-center mt-8">
                        <a
                            href="/all_womens/products"
                            className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            View All Products
                        </a>
                    </div>
                </section>



                {/* Full-Width Banner */}
                {banner?.filter((label) => label.label === womens).map((data, i) => (
                    <section
                        key={i}
                        className={`flex w-full h-auto justify-center items-center ${data.text_color} ${data.bg_color}`}
                    >
                        <img
                            src={`${urlPath}${data.image_path}`}
                            alt={`Banner ${i}`}
                            className="w-full h-auto object-cover"
                        />
                    </section>
                ))}
            </div>
        </PublicLayout>
    );
}
