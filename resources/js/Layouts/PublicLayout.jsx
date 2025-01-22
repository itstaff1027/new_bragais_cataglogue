import { Head, Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
// import Gallery from '@/Pages/Gallery/Page';
// import HowToOrder from '@/Pages/Footer/HowToOrder';

export default function PublicLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <Head title="JOJO BRAGAIS" />
            <nav className="nav_container flex flex-1 justify-end">
                <Link className="absolute items-center justify-center flex w-full h-24" href="/">
                    <ApplicationLogo src="/assets/jojobragaiswhite.png" className="block h-16 w-auto fill-current text-gray-800" />
                </Link>
                {user ? (
                    <Link
                        href={route('dashboard')}
                        className="z-50 rounded-md px-8 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <div className="hidden">
                        {/* <Link
                            href={route('login')}
                            className="z-50 rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('registers')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link> */}
                    </div>
                )}
            </nav>

            {/* Logo and Navigation */}
            <header className="text-center bg-[#020E29]">
                <nav className="flex justify-center space-x-6 text-white text-lg">
                    <a href="#" className="hover:underline">
                        Home
                    </a>
                    <a href="#" className="hover:underline">
                        Products
                    </a>
                    <a href="#" className="hover:underline">
                        About Us
                    </a>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                    <a href="#" className="hover:underline">
                        About Us
                    </a>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                </nav>
            </header>

            <div className="w-full overflow-hidden bg-[#020E29] shadow-md">
                {children}
            </div>

            {/* Footer */}
            <footer className="bg-[#020E29] py-8">
            <div className="text-center text-white">
                <h3 className="text-lg mb-4">How to Order</h3>
                <p className="text-sm">Follow our easy guide to place your order.</p>
                <div className="mt-4">
                <a href="#" className="text-blue-400 hover:underline">
                    Learn More
                </a>
                </div>
            </div>
            </footer>
        </>
    );
}
