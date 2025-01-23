import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

const EditFilter = ({ Filters }) => {
    const { data, setData, put, errors } = useForm({
        name: Filters.filter_name || "",
        category: Filters.category || ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/settings_filters/${Filters.id}`);
    };

    return (
        <AuthenticatedLayout
                    header={
                        <h2 className="text-xl font-semibold leading-tight text-gray-800">
                            Edit Filters
                        </h2>
                    }
                >
                    <div className="py-12">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <h1 className="text-xl font-semibold mb-6">Edit Filter</h1>
                                    <form onSubmit={handleSubmit}>
                                        {/* Name Input Field */}
                                        <div className="mb-6">
                                            <InputLabel for="name" value="Filter Name" />
                                            <TextInput
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full"
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="mb-6">
                                            <InputLabel for="category" value="Filter Category" />
                                            <TextInput
                                                id="category"
                                                name="category"
                                                value={data.category}
                                                onChange={(e) => setData('category', e.target.value)}
                                                className="w-full"
                                            />
                                            <InputError message={errors.category} />
                                        </div>
        
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Edit Filter
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </AuthenticatedLayout>
    );
};

export default EditFilter;
