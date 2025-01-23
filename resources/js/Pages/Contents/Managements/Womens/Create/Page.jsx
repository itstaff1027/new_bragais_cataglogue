import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Colors from '@/Components/Colors';
import Sizes from '@/Components/Sizes';
import HeelHeights from '@/Components/HeelHeights';
import Categories from '@/Components/Categories';

const CreateCMsWomens = ({ colors, sizes, heel_heights, categories }) => {
  const { data, setData, post, errors, reset } = useForm({
    section_name: '',
    category: 'womens',
    header: '',
    sub_header: '',
    description_1: '',
    description_2: '',
    image: null,
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

    const handleGalleryImagesChange = (e) => {
        const files = Array.from(e.target.files);
        const filePreviews = files.map(file => URL.createObjectURL(file));
        setPreUploadedGalleryImages(prev => [...prev, ...filePreviews]);
        setData('gallery_images', [...data.gallery_images, ...files]);
    };

    const handleGalleryImageRemove = (index) => {
        setPreUploadedGalleryImages(prev => prev.filter((_, i) => i !== index));
        setData('gallery_images', data.gallery_images.filter((_, i) => i !== index));
    };

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
        console.log(data);
        e.preventDefault();
        post('/content_womens');
    };

  return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Images For Womens
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg">
                        <div className="p-6">
                            <div className="container mx-auto p-6">
                                <h1 className="text-2xl font-bold mb-4">Add Images</h1>
                                <div>
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
                                    <div className="mb-4">
                                        <InputLabel for="section_name" value="Section Name" />
                                        <select
                                            id="section_name"
                                            name="section_name"
                                            value={data.section_name}
                                            onChange={(e) => setData('section_name', e.target.value)}
                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        >
                                            <option value="" disabled>
                                                Select a Section
                                            </option>
                                            <option value="0">Choose</option>
                                            <option value="top">Top</option>
                                            <option value="body">Body</option>
                                            <option value="banner">Banner</option>
                                        </select>
                                        <InputError message={errors.section_name} />
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

                                    {/* Repeat similar fields for HeelHeights, Heel Heights, Categories */}
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    
  );
};

export default CreateCMsWomens;
