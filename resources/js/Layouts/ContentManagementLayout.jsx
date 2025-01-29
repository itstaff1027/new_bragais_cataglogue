import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import AuthenticatedLayout from './AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ContentManagementLayout({ header, children }) {
    
    const paths = [
        { id: '0', name: 'CMS', route: 'content_management' },
        { id: '1', name: 'Womens Main Page CMS', route: 'content_womens.index' },
        { id: '2', name: 'Womens Featured Products CMS', route: 'featured_product_womens.index' },
        { id: '3', name: 'Womens New Arrival CMS', route: 'new_arrival_product_womens.index' },
        { id: '4', name: 'Set Filter Options CMS', route: 'settings_filters.index' },
        { id: '5', name: 'Womens Filter Items CMS', route: 'settings_filter_products.index' },
        { id: '6', name: 'Banner', route: 'content_banners.index' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Content Management
                </h2>
            }
        >
            <Head title="Content Management" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start p-4">
                                {paths.map((path, i) => (
                                    <ResponsiveNavLink
                                        href={route(`${path.route}`)}
                                        active={route().current(`${path.route}`)}
                                        key={i}
                                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
                                    >
                                        {path.name}
                                    </ResponsiveNavLink>
                                ))}
                            </div>

                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
