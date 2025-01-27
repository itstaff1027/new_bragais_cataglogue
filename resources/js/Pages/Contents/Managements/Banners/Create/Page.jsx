import React, { useState , useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

const CreateBanner = ({ Banner }) => {
    const { data, setData, post, errors } = useForm({
        name: '', // Banner_Title
        bg_color: '',
        text_color: '',
        button_color: '',
        image: null,
        header: '',
        sub_header: '',
        description: '',
        sub_description: '',
        label: '',
    });

    const [preUploadedFrontImage, setPreUploadedFrontImage] = useState(null);
    const [preUploadedGalleryImages, setPreUploadedGalleryImages] = useState([]);

    const handleFrontImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreUploadedFrontImage(URL.createObjectURL(file));
            setData('image', file);
        }
    };

    const MAX_LENGTH = {
        header: 50,
        sub_header: 50,
        description: 200,
        sub_description: 200
    };

    const handleInputChange = (field, value) => {
        if (value.length <= MAX_LENGTH[field]) {
            setData(field, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/content_banners');
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Banners
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-semibold mb-6">Create Banner</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel for="image" value="Upload Image" />
                                    <input
                                        type="file"
                                        id="image"
                                        onChange={handleFrontImageChange}
                                        className="block w-full text-sm text-gray-500 border rounded"
                                    />
                                    {preUploadedFrontImage && (
                                        <div className="mt-2">
                                            <img
                                                src={preUploadedFrontImage}
                                                alt="Front Preview"
                                                className="w-full h-32 object-cover rounded"
                                            />
                                        </div>
                                    )}
                                    <InputError message={errors.image} />
                                </div>
                                <div className="mb-6">
                                    <InputLabel for="label" value="Choose Label" />
                                    <select
                                        id="label"
                                        name="label"
                                        value={data.label}
                                        onChange={(e) => setData('label', e.target.value)}
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    >
                                        <option value="" disabled>
                                            Select a Label
                                        </option>
                                        <option value="0">Choose</option>
                                        <option value="mens">Mens</option>
                                        <option value="womens">Womens</option>
                                    </select>
                                    <InputError message={errors.label} />
                                </div>
                                {/* Name Input Field */}
                                <div className="mb-6">
                                    <InputLabel for="name" value="Banner Title" />
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
                                    <InputLabel for="bg_color" value="Banner BG Color (Optional)" />
                                    <TextInput
                                        id="bg_color"
                                        name="bg_color"
                                        value={data.bg_color}
                                        onChange={(e) => setData('bg_color', e.target.value)}
                                        className="w-full"
                                    />
                                    <InputError message={errors.bg_color} />
                                </div>
                                <div className="mb-6">
                                    <InputLabel for="text_color" value="Banner Text Color (Optional)" />
                                    <TextInput
                                        id="text_color"
                                        name="text_color"
                                        value={data.text_color}
                                        onChange={(e) => setData('text_color', e.target.value)}
                                        className="w-full"
                                    />
                                    <InputError message={errors.text_color} />
                                </div>
                                <div className="mb-6">
                                    <InputLabel for="button_color" value="Banner Button Color (Optional)" />
                                    <TextInput
                                        id="button_color"
                                        name="button_color"
                                        value={data.button_color}
                                        onChange={(e) => setData('button_color', e.target.value)}
                                        className="w-full"
                                    />
                                    <InputError message={errors.text_color} />
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
                                    <InputLabel for="description" value="Description 1 " />
                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.description.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.description.length}/{MAX_LENGTH.description}</p>
                                    <InputError message={errors.description} />
                                </div>

                                <div className="mb-6">
                                    <InputLabel for="sub_description" value="Sub Description (Optional) " />
                                    <TextInput
                                        id="sub_description"
                                        name="sub_description"
                                        value={data.sub_description}
                                        onChange={(e) => handleInputChange('sub_description', e.target.value)}
                                        className="w-full"
                                    />
                                    <p className={`text-sm ${data.sub_description.length === 0 ? 'text-gray-500' : 'text-red-500'}`}>{data.sub_description.length}/{MAX_LENGTH.sub_description}</p>
                                    <InputError message={errors.sub_description} />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Create Banner
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateBanner;
