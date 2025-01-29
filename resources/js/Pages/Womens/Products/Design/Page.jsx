import { Link, usePage, router } from "@inertiajs/react";
import React, { useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import InputLabel from '@/Components/InputLabel';
import { urlPath } from "@/Components/Constants/Value";

export default function Womens({ product }) {

    // useEffect(() => {   
    //     console.log(product);
    // }, []);

    const adultPageantSizes = [
        {'id': 0, 'us': 5, 'length_in': 8.5, 'round_cm': 20},
        {'id': 1, 'us': 6, 'length_in': 8.75, 'round_cm': 21},
        {'id': 2, 'us': 7, 'length_in': 9, 'round_cm': 22},
        {'id': 3, 'us': 8, 'length_in': 9.5, 'round_cm': 23},
        {'id': 4, 'us': 9, 'length_in': 9.75, 'round_cm': 24},
        {'id': 5, 'us': 10, 'length_in': 10, 'round_cm': 25},
        {'id': 6, 'us': 11, 'length_in': 10.5, 'round_cm': 26},
        {'id': 7, 'us': 12, 'length_in': 10.75, 'round_cm': 27},
    ];

    const kidPageantSizes = [
        {'id': 0, 'us': 1, 'length_in': 7.5, 'round_cm': 19},
        {'id': 1, 'us': 2, 'length_in': 7.75, 'round_cm': 19.5},
        {'id': 2, 'us': 3, 'length_in': 8, 'round_cm': 20},
        {'id': 3, 'us': 4, 'length_in': 8.25, 'round_cm': 20.5},
    ];

    const euroPageantSizes = [
        {'id': 0, 'us': 36, 'length_cm': 22.5, 'round_cm': 20},
        {'id': 1, 'us': 37, 'length_cm': 23, 'round_cm': 20.5},
        {'id': 2, 'us': 38, 'length_cm': 23.5, 'round_cm': 21},
        {'id': 3, 'us': 39, 'length_cm': 24.5, 'round_cm': 22},
        {'id': 4, 'us': 40, 'length_cm': 25, 'round_cm': 22.5},
        {'id': 5, 'us': 41, 'length_cm': 25.7, 'round_cm': 23.5},
        {'id': 6, 'us': 42, 'length_cm': 26.5, 'round_cm': 24},
        {'id': 7, 'us': 43, 'length_cm': 27, 'round_cm': 24.5},
        {'id': 8, 'us': 44, 'length_cm': 27.7, 'round_cm': 25.5},
        {'id': 9, 'us': 45, 'length_cm': 28.5, 'round_cm': 26},
    ];

    return (
        <PublicLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-100">
                    Jojo Bragais - Womens
                </h2>
            }
        >
            <div className="pt-8 min-h-screen">
                <div className="w-full flex flex-col lg:flex-row gap-6 px-6">

                    {/* Left Side - Product Images */}
                    <div className="lg:w-[75%] w-full h-auto border border-gray-700]rounded-lg overflow-hidden shadow-lg">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                            {product.gallery_images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={`${urlPath}${image.image_path}`}
                                    alt="Product" 
                                    className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="lg:w-[25%] w-full border  rounded-lg p-6  shadow-lg">
                        <h1 className="text-3xl font-bold mb-0">{product.product_name}</h1>
                        <h1 className="text-1xl font-bold text-gray-400 mb-4">{product.categories[0].category_name}</h1>
                        <p className="mb-6">{product.description}</p>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Colors</h2>
                            <div className="flex space-x-4">
                                {product.colors.map((color, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className={`w-6 h-6 rounded-full`} style={{ backgroundColor: color.hex }}></span>
                                        <span className="text-sm">{color.color_name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Available Heel Height</h2>
                            <div className="flex space-x-4">
                                {product.heel_heights.map((heels, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="bg-slate-500 p-2 text-white rounded-xl text-sm">{heels.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Sizes</h2>
                            {product.sizes.map((size, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-md font-medium underline underline-offset-4 mb-2">{size.size_name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {size.size_values.map((value, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm">
                                                {Math.floor(value.size_values)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Size Guide</h2>

                            <h3 className="text-md font-medium mb-2">For 5 & 6.5 inches Pageant Shoes</h3>
                            <table  className="w-full text-sm text-left border border-gray-600 rounded-lg">
                                <thead  className="bg-gray-700 text-gray-400">
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-600">US</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Length (in)</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Round (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adultPageantSizes.map((size) => (
                                        <tr key={size.id} className="hover:bg-white transition-colors">
                                            <td className="py-2 px-4 border-b border-gray-600">{size.us}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.length_in}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.round_cm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className="text-md font-medium mb-2">For Kids Pageant Shoes</h3>
                            <table  className="w-full text-sm text-left  border border-gray-600 rounded-lg">
                                <thead className="bg-gray-700 text-gray-400">
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-600">US</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Length (cm)</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Round (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kidPageantSizes.map((size) => (
                                        <tr key={size.id} className="hover:bg-white transition-colors">
                                            <td className="py-2 px-4 border-b border-gray-600">{size.us}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.length_in}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.round_cm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className="text-md font-medium mb-2">For 4 & 5.5 inches Pageant Shoes</h3>
                            <table className="w-full text-sm text-left  border border-gray-600 rounded-lg">
                                <thead className="bg-gray-700 text-gray-400">
                                    <tr>
                                        <th className="py-2 px-4 border-b border-gray-600">EURO</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Length (cm)</th>
                                        <th className="py-2 px-4 border-b border-gray-600">Round (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {euroPageantSizes.map((size) => (
                                        <tr key={size.id} className="hover:bg-white transition-colors">
                                            <td className="py-2 px-4 border-b border-gray-600">{size.us}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.length_cm}</td>
                                            <td className="py-2 px-4 border-b border-gray-600">{size.round_cm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm">For more information Kindly reach out to our Official Agents or Message us in our Social Media Platforms below</p>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
