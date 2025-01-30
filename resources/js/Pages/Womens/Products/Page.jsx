import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { urlPath, womens } from '@/Components/Constants/Value';

export default function AllWomensProducts({ products, heel_heights, categories, banner, appliedFilters }) {
    const [selectedCategory, setSelectedCategory] = useState(appliedFilters.category_id || '');
    const [selectedHeelHeight, setSelectedHeelHeight] = useState(appliedFilters.heel_height_id || '');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        // console.log("Filters Applied:", { selectedCategory, selectedHeelHeight });
        console.log(products);
    }, [selectedCategory, selectedHeelHeight]);

    // Handle Filtering & Fetch Data
    const handleFilter = () => {
        router.get('/all_womens/products', {
            category_id: selectedCategory,
            heel_height_id: selectedHeelHeight,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <PublicLayout
            header={
                <h2 className="text-2xl font-bold text-center text-gray-900">
                    Jojo Bragais - Women's Collection
                </h2>
            }
        >
            <div className="pt-6 min-h-screen">
                <div className="container mx-auto px-6 relative">

                    {/* Filter Button */}
                    <div className="flex justify-between items-center mb-6">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            onClick={() => setIsFilterOpen(true)}
                        >
                            Filter
                        </button>
                    </div>

                    {/* Sliding Filter Panel */}
                    <div className={`fixed top-0 right-0 h-full bg-white shadow-lg w-72 p-6 transition-transform duration-300 ease-in-out ${
                        isFilterOpen ? "translate-x-0" : "translate-x-full"
                    } z-50`}>
                        {/* Close Button */}
                        <button 
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                            onClick={() => setIsFilterOpen(false)}
                        >
                            ✖
                        </button>

                        <h3 className="text-xl font-semibold mb-4">Filters</h3>

                        {/* Category Filter */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Category</label>
                            <select
                                className="border rounded px-4 py-2 w-full"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Heel Height Filter */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Heel Height</label>
                            <select
                                className="border rounded px-4 py-2 w-full"
                                value={selectedHeelHeight}
                                onChange={(e) => setSelectedHeelHeight(e.target.value)}
                            >
                                <option value="">All Heel Heights</option>
                                {heel_heights.map((heelHeight) => (
                                    <option key={heelHeight.id} value={heelHeight.id}>
                                        {heelHeight.value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Apply Filters Button */}
                        <button 
                            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
                            onClick={handleFilter}
                        >
                            Apply Filters
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                        {products.data.length > 0 ? (
                            products.data.map((product, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-md">
                                    <a href={`/product/womens/${product.id}`}>
                                        <img src={`${product.front_image}`} alt={product.product_name} className="h-auto w-full" />
                                    </a>
                                    <div className="p-4">
                                        <a href={`/product/womens/${product.id}`} className="hover:underline">
                                            <h2 className="text-lg font-semibold">{product.product_name}</h2>
                                        </a>
                                        
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-8">No products found.</p>
                        )}
                    </div>

                    {/* Pagination with Filters Maintained */}
                    {products.links.length > 0 && (
                        <nav className="flex justify-center mt-6">
                            {products.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url ? `${link.url}&category_id=${selectedCategory}&heel_height_id=${selectedHeelHeight}` : '#'}
                                    className={`px-4 py-2 mx-1 rounded ${
                                        link.active ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </nav>
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
                                src={`${data.image_path}`}
                                alt={`Banner ${i}`}
                                className="w-full max-w-none h-auto object-cover"
                            />
                        </section>
                    ))}
            </div>
        </PublicLayout>
    );
}
