import React, { useState, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Colors from '@/Components/Colors';
import Sizes from '@/Components/Sizes';
import HeelHeights from '@/Components/HeelHeights';
import Categories from '@/Components/Categories';
import { urlPath } from '@/Components/Constants/Value';

const EditProduct = ({ product, colors, sizes, heel_heights, categories }) => {
  const { data, setData, put, errors } = useForm({
    product_name: product.product_name || '',
    status: product.status || '',
    cost: product.cost || 0,
    srp: product.srp || 0,
    colors: product.colors || [],
    sizes: product.sizes || [],
    heel_heights: product.heel_heights || [],
    categories: product.categories || [],
    description: product.description || [],
    front_image: null,
    gallery_images: []
  });

  const [preUploadedFrontImage, setPreUploadedFrontImage] = useState(product.front_image ? `${urlPath}${product.front_image}` : null);
  const [preUploadedGalleryImages, setPreUploadedGalleryImages] = useState(
    product.gallery_images ? product.gallery_images.map(img => ({ id: img.id, path: `${urlPath}${img.image_path}` })) : []
  );
  const [newGalleryImages, setNewGalleryImages] = useState([]);

  // Handle front image change
  const handleFrontImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreUploadedFrontImage(URL.createObjectURL(file));
      setData('front_image', file);
    }
  };

  const saveFrontImage = () => {
    const formData = new FormData();
    formData.append('front_image', data.front_image);
    formData.append('id', product.id);

    router.post('/inventory/product/front_image/upload', formData, {
      onSuccess: () => {
        alert('Front image updated successfully!');
      },
      onError: (err) => {
        console.error('Error updating front image:', err);
      },
    });
  };

  // Handle gallery images
  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map(file => URL.createObjectURL(file));
    const newImages = files.map((file, index) => ({ id: `new-${index}`, path: filePreviews[index], file }));

    setNewGalleryImages(prev => [...prev, ...newImages]);
  };

  const removeGalleryImage = (index) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const imageToDelete = preUploadedGalleryImages[index];
      router.post(`/inventory/product/gallery_image/delete`, { id: imageToDelete.id }, {
        onSuccess: () => {
          alert('Image removed successfully!');
          setPreUploadedGalleryImages(prev => prev.filter((_, i) => i !== index));
        },
        onError: (err) => {
          console.error('Error deleting image:', err);
        },
      });
    }
  };

  const saveGalleryImages = () => {
    const formData = new FormData();
    newGalleryImages.forEach(image => formData.append('gallery_images[]', image.file));
    formData.append('id', product.id);

    router.post('/inventory/product/gallery_images/upload', formData, {
      onSuccess: (response) => {
        alert('Gallery images updated successfully!');
        setNewGalleryImages([]);
        // setPreUploadedGalleryImages(prev => [...prev, ...response.props.images]);
      },
      onError: (err) => {
        console.error('Error updating gallery images:', err);
      },
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    put(`/inventory/products/${product.id}`);
  };

  useEffect(() => {
    console.log(product);
    console.log(`${urlPath}${product.front_image}`)
  }, [])

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Edit Product
        </h2>
      }
    >
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-md rounded-lg">
            <div className="p-6">
              <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <InputLabel for="front_image" value="Upload Front Image" />
                    <input type="file" id="front_image" onChange={handleFrontImageChange} className="block w-full text-sm text-gray-500 border rounded" />
                    {preUploadedFrontImage && (
                      <div className="mt-2">
                        <img src={preUploadedFrontImage} alt="Front Preview" className="w-full h-32 object-cover rounded" />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={saveFrontImage}
                      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
                    >
                      Save Front Image
                    </button>
                    <InputError message={errors.front_image} />
                  </div>

                  {/* Gallery Images */}
                  <div className="mb-4">
                    <InputLabel for="gallery_images" value="Upload Gallery Images" />
                    <input type="file" id="gallery_images" multiple onChange={handleGalleryImagesChange} className="block w-full text-sm text-gray-500 border rounded" />
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {preUploadedGalleryImages.map((img, index) => (
                        <div key={img.id} className="relative">
                          <img src={img.path} alt="Gallery Preview" className="w-full h-32 object-cover rounded" />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            X
                          </button>
                        </div>
                      ))}
                      {newGalleryImages.map((img, index) => (
                        <div key={img.id} className="relative">
                          <img src={img.path} alt="New Gallery Preview" className="w-full h-32 object-cover rounded" />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={saveGalleryImages}
                      className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600"
                    >
                      Save Gallery Images
                    </button>
                    <InputError message={errors.gallery_images} />
                  </div>
                  <div className="mb-4">
                    <InputLabel for="name" value="Product Name" />
                    <TextInput
                      type="text"
                      id="name"
                      name="name"
                      value={data.product_name}
                      onChange={(e) => setData('product_name', e.target.value)}
                      className="w-full border px-4 py-2"
                    />
                    <InputError message={errors.product_name} />
                  </div>
                  <div className="mb-4">
                    <InputLabel for="status" value="Status" />
                    <TextInput
                      type="text"
                      id="status"
                      name="status"
                      value={data.status}
                      onChange={(e) => setData('status', e.target.value)}
                      className="w-full border px-4 py-2"
                    />
                    <InputError message={errors.status} />
                  </div>
                  <div className="mb-4">
                      <InputLabel for="cost" value="Cost" />
                      <TextInput
                          type="number"
                          id="cost"
                          name="cost"
                          value={data.cost}
                          onChange={(e) => setData('cost', e.target.value)}
                          className="w-full border px-4 py-2"
                      />
                      <InputError message={errors.status} />
                  </div>
                  <div className="mb-4">
                      <InputLabel for="srp" value="SRP" />
                      <TextInput
                          type="number"
                          id="srp"
                          name="srp"
                          value={data.srp}
                          onChange={(e) => setData('srp', e.target.value)}
                          className="w-full border px-4 py-2"
                      />
                      <InputError message={errors.srp} />
                  </div>
                    <div className="mb-4">
                        <InputLabel for="colors" value="Colors" />
                        <Colors.Selection
                            handleSelectedColor={(selectedColor, isRemoving = false) => {
                                if (isRemoving) {
                                    // Remove the color by ID
                                    setData('colors', data.colors.filter(color => color.id !== selectedColor.id)); // Remove the color by ID
                                } else {
                                    // Check if the color is already in the list before adding it
                                    if (!data.colors.some(color => color.id === selectedColor.id)) {
                                    // Add the selected color
                                    setData('colors', [...data.colors, selectedColor]);
                                    }
                                }
                            }} 
                            colors={data.colors} 
                            availableColors={colors}
                        />
                        <InputError message={errors.colors} />
                    </div>

                    <div className="mb-4">
                        <InputLabel for="sizes" value="Sizes" />
                        <Sizes.Selection
                            handleSelectedSizes={(selectedSize, isRemoving = false) => {
                                if (isRemoving) {
                                    // Remove the color by ID
                                    setData('sizes', data.sizes.filter(size => size.id !== selectedSize.id)); // Remove the Size by ID
                                } else {
                                    // Check if the Size is already in the list before adding it
                                    if (!data.sizes.some(size => size.id === selectedSize.id)) {
                                    // Add the selected Size
                                    setData('sizes', [...data.sizes, selectedSize]);
                                    }
                                }
                            }} 
                            sizes={data.sizes} 
                            availableSizes={sizes}
                        />
                        <InputError message={errors.sizes} />
                    </div>

                    <div className="mb-4">
                        <InputLabel for="heel_height" value="Heel Heights" />
                        <HeelHeights.Selection
                            handleSelectedHeelHeights={(selectedHeelHeight, isRemoving = false) => {
                                if (isRemoving) {
                                    // Remove the color by ID
                                    setData('heel_heights', data.heel_heights.filter(HeelHeight => HeelHeight.id !== selectedHeelHeight.id)); // Remove the HeelHeight by ID
                                } else {
                                    // Check if the HeelHeight is already in the list before adding it
                                    if (!data.heel_heights.some(HeelHeight => HeelHeight.id === selectedHeelHeight.id)) {
                                    // Add the selected HeelHeight
                                    setData('heel_heights', [...data.heel_heights, selectedHeelHeight]);
                                    }
                                }
                            }} 
                            heelHeights={data.heel_heights} 
                            availableHeelHeights={heel_heights}
                        />
                        <InputError message={errors.HeelHeights} />
                    </div>

                    <div className="mb-4">
                        <InputLabel for="categories" value="Category" />
                        <Categories.Selection
                            handleSelectedCategories={(selectedCategories, isRemoving = false) => {
                                if (isRemoving) {
                                    // Remove the color by ID
                                    setData('categories', data.categories.filter(categories => categories.id !== selectedCategories.id)); // Remove the categories by ID
                                } else {
                                    // Check if the categories is already in the list before adding it
                                    if (!data.categories.some(categories => categories.id === selectedCategories.id)) {
                                    // Add the selected HeelHeight
                                    setData('categories', [...data.categories, selectedCategories]);
                                    }
                                }
                            }} 
                            categories={data.categories} 
                            availableCategories={categories}
                        />
                        <InputError message={errors.categories} />
                    </div>

                    <div className="mb-4">
                        <InputLabel for="description" value="Description" />
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full border px-4 py-2"
                        />
                        <InputError message={errors.description} />
                    </div>

                  {/* Repeat similar blocks for Heel Heights and Categories */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default EditProduct;
