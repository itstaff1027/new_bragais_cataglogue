import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { urlPath, womens } from '@/Components/Constants/Value';

export default function AllWomensProducts({ products, heel_heights, categories, banner }) {
    const [activeCategories, setActiveCategories] = useState([]);
    const [activeHeelHeights, setActiveHeelHeights] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let filtered = products;

        if (activeCategories.length > 0) {
            filtered = filtered.filter(product =>
                product.categories.some(category => activeCategories.includes(category.id))
            );
        }

        if (activeHeelHeights.length > 0) {
            filtered = filtered.filter(product =>
                product.heel_heights.some(heelHeight => activeHeelHeights.includes(heelHeight.id))
            );
        }

        setFilteredProducts(filtered);
    }, [activeCategories, activeHeelHeights, products]);

    const toggleCategoryFilter = (id) => {
        setActiveCategories((prev) =>
            prev.includes(id) ? prev.filter((categoryId) => categoryId !== id) : [...prev, id]
        );
    };

    const toggleHeelHeightFilter = (id) => {
        setActiveHeelHeights((prev) =>
            prev.includes(id) ? prev.filter((heelId) => heelId !== id) : [...prev, id]
        );
    };

    return (
        <PublicLayout
            header={
                <h2 className="text-2xl font-bold text-center text-gray-900">
                    Jojo Bragais - Women's Collection
                </h2>
            }
        >
            <div className="bg-[#020E29] pt-6 min-h-screen">
                <div className="container mx-auto px-6">
                    {/* Filters Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-400">Filter by Category</h3>
                        <div className="flex flex-wrap gap-3">
                            {categories?.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg shadow transition-all border ${
                                        activeCategories.includes(filter.id)
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'
                                    }`}
                                    onClick={() => toggleCategoryFilter(filter.id)}
                                >
                                    {filter.category_name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-400">Filter by Heel Height</h3>
                        <div className="flex flex-wrap gap-3">
                            {heel_heights?.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg shadow transition-all border ${
                                        activeHeelHeights.includes(filter.id)
                                            ? 'bg-green-600 text-white border-green-600'
                                            : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'
                                    }`}
                                    onClick={() => toggleHeelHeightFilter(filter.id)}
                                >
                                    {filter.value}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Filters Badges */}
                    <div className="mb-8 flex flex-wrap gap-2">
                        {activeCategories.length > 0 && (
                            <div className="flex gap-2 items-center">
                                <span className="text-sm font-semibold text-gray-600">Selected Categories:</span>
                                {categories
                                    .filter((cat) => activeCategories.includes(cat.id))
                                    .map((cat) => (
                                        <span
                                            key={cat.id}
                                            className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full"
                                        >
                                            {cat.category_name}
                                        </span>
                                    ))}
                            </div>
                        )}
                        {activeHeelHeights.length > 0 && (
                            <div className="flex gap-2 items-center">
                                <span className="text-sm font-semibold text-gray-600">Selected Heel Heights:</span>
                                {heel_heights
                                    .filter((heel) => activeHeelHeights.includes(heel.id))
                                    .map((heel) => (
                                        <span
                                            key={heel.id}
                                            className="px-3 py-1 bg-green-200 text-green-800 text-xs font-medium rounded-full"
                                        >
                                            {heel.value}
                                        </span>
                                    ))}
                            </div>
                        )}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
                            >
                                <img
                                    src={`${urlPath}${product.front_image}`}
                                    alt={`Product ${product.product_name}`}
                                    className="h-auto w-full object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{product.product_name}</h2>
                                    {product.header && (
                                        <p className="text-sm text-gray-600">{product.header}</p>
                                    )}
                                    {product.sub_header && (
                                        <p className="text-xs text-gray-500">{product.sub_header}</p>
                                    )}
                                    {product.description_1 && (
                                        <p className="text-xs text-gray-400 mt-2">
                                            {product.description_1}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <p className="text-center text-gray-500 mt-8">
                            No products match your selected filters.
                        </p>
                    )}
                </div>

                {/* Banner Section */}
                {banner
                    ?.filter((label) => label.label === womens)
                    .map((data, i) => (
                        <section
                            key={i}
                            className={`mt-12 w-full h-auto p-8 flex justify-center items-center ${data.text_color} ${data.bg_color}`}
                        >
                            <img
                                src={`${urlPath}${data.image_path}`}
                                alt={`Banner ${i}`}
                                className="w-full max-w-none h-auto object-cover"
                            />
                        </section>
                    ))}
            </div>
        </PublicLayout>
    );
}
