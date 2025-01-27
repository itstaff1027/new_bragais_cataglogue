import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

const EditFeaturedProduct = ({ FeaturedProduct, products }) => {
    const { data, setData, put, errors } = useForm({
        product_id: FeaturedProduct.product_id || 0,
        category: 'womens',
        header: FeaturedProduct.header || '',
        sub_header: FeaturedProduct.sub_header || '',
        description_1: FeaturedProduct.description_1 || '',
        description_2: FeaturedProduct.description_2 || '',
    });

    const MAX_LENGTH = {
        header: 50,
        sub_header: 50,
        description_1: 200,
        description_2: 200
    };

    const handleInputChange = (field, value) => {
        if (value.length <= MAX_LENGTH[field]) {
            setData(field, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/featured_product_womens/${FeaturedProduct.id}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Featured Products
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-semibold mb-6">Edit Featured Product</h1>
                            <form onSubmit={handleSubmit}>
                                {/* Name Input Field */}
                                <div className="mb-6">
                                    <InputLabel for="product_id" value={`Featured Product Current Name: ${FeaturedProduct.products.product_name}`} />
                                    <select
                                        id="product_id"
                                        name="product_id"
                                        value={data.product_id}
                                        onChange={(e) => setData('product_id', e.target.value)}
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    >
                                        <option value="" disabled>
                                            Select a Product
                                        </option>
                                        <option value="0">Choose</option>
                                        {products.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.product_name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.product_id} />
                                </div>
                                <div className="mb-6">
                                    <InputLabel for="header" value="Header" />
                                    <TextInput
                                        id="header"
                                        name="header"
                                        value={data.header}
                                        onChange={(e) => handleInputChange('header', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.header.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.header.length}/{MAX_LENGTH.header}</p>
                                    <InputError message={errors.header} />
                                </div>

                                <div className="mb-6">
                                    <InputLabel for="sub_header" value="Sub Header (Optional)" />
                                    <TextInput
                                        id="sub_header"
                                        name="sub_header"
                                        value={data.sub_header}
                                        onChange={(e) => handleInputChange('sub_header', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.sub_header.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.sub_header.length}/{MAX_LENGTH.sub_header}</p>
                                    <InputError message={errors.sub_header} />
                                </div>

                                <div className="mb-6">
                                    <InputLabel for="description_1" value="Description 1 " />
                                    <TextInput
                                        id="description_1"
                                        name="description_1"
                                        value={data.description_1}
                                        onChange={(e) => handleInputChange('description_1', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.description_1.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.description_1.length}/{MAX_LENGTH.description_1}</p>
                                    <InputError message={errors.description_1} />
                                </div>

                                <div className="mb-6">
                                    <InputLabel for="description_2" value="Description 2 (Optional)" />
                                    <TextInput
                                        id="description_2"
                                        name="description_2"
                                        value={data.description_2}
                                        onChange={(e) => handleInputChange('description_2', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.description_2.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.description_2.length}/{MAX_LENGTH.description_2}</p>
                                    <InputError message={errors.description_2} />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Edit Featured Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditFeaturedProduct;
