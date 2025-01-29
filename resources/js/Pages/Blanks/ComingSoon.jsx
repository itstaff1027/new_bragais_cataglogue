import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

// import Gallery from '@/Pages/Gallery/Page';
// import HowToOrder from '@/Pages/Footer/HowToOrder';
// import PublicLayout from '@/Layouts/PublicLayout';
// import { urlPath, womens, top, body, banner } from '@/Constant/Value';
import { urlPath, womens, top, body, banner } from '@/Components/Constants/Value';

import PublicLayout from '@/Layouts/PublicLayout';

export default function ComingSoon({  }) {

    return (
        <PublicLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Jojo Bragais - Mens
                </h2>
            }
        >
            {/* <Head title="JOJO BRAGAIS" /> */}
            <div className="min-h-screen flex justify-center items-center text-white">

                <h1 className="text-3xl">Coming Soon!</h1>

            </div>
        </PublicLayout>
    );
}
