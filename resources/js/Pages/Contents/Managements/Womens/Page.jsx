import React, { useEffect } from 'react';
import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { urlPath } from '@/Components/Constants/Value';

const IndexCMsWomens = ({ featured_images }) => {

    const destroy = (e, id) => {
        e.preventDefault();

        if (confirm('Are you sure?')){
            router.delete(`/content_womens/${id}`);
        }
    };

    useEffect(() => {
        console.log(featured_images);
    }, []);
    
    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Content Management
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg">
                        <div className="p-6">
                            <div className="container mx-auto p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-2xl font-bold">Womens</h1>
                                    <Link
                                        href="/content_womens/create"
                                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                                    >
                                        Create CMs Images
                                    </Link>
                                </div>

                                {featured_images
                                ?.filter(
                                    (section) => section.category === 'womens'
                                )
                                .map((section, i) => (
                                    <div className="p-4 w-full" key={i}>
                                        <h1 className="text-xl font-bold">{section.section_name === "banner" ? "For" : "Women Screen Size Image" } {section.section_name}</h1>
                                        <section className="relative mt-8">
                                            <button 
                                                className="absolute flex right-0 z-50" 
                                                onClick={(e) => destroy(e, section.id)}
                                            >
                                                Remove
                                            </button>
                                            <img
                                                src={`${urlPath}${section.image_path}`}
                                                alt={`${section.section_name} section`}
                                                className="relative inset-0 w-full h-full object-cover"
                                            />
                                        </section>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
};

export default IndexCMsWomens;
