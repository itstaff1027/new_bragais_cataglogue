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
                    <a href="/" className="hover:underline">
                        Womens
                    </a>
                    <a href="/coming_soon" className="hover:underline">
                        Mens
                    </a>
                    {/* <a href="#" className="text-red-500 hover:underline">
                        Outlet
                    </a> */}
                </nav>
            </header>

            <div className="w-full overflow-hidden bg-[#020E29] shadow-md">
                {children}
            </div>

            {/* Footer */}
            <footer className="bg-[#020E29] py-8 w-full px-6">
                <div className="container mx-auto text-white">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                        {/* Social Media Links */}
                        <div className="sm:w-1/2 mb-6 sm:mb-0 text-center sm:text-left">
                            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                            <p className="text-sm mb-6">Follow us on our social media channels or get in touch with us directly.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="https://www.facebook.com/jojobragaisofficial/" target="_blank" className="flex items-center space-x-2 hover:text-blue-500">
                                    <i className="fab fa-facebook-f text-2xl"></i>
                                    <span>Jojo Bragais Shoes</span>
                                </a>
                                <a href="https://www.instagram.com/jojobragais/" target="_blank" className="flex items-center space-x-2 hover:text-pink-500">
                                    <i className="fab fa-instagram text-2xl"></i>
                                    <span>@jojobragaisofficial</span>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61567630512077" target="_blank" className="flex items-center space-x-2 hover:text-blue-500">
                                    <i className="fab fa-facebook-f text-2xl"></i>
                                    <span>Jojo Bragais Man</span>
                                </a>
                                <a href="https://www.instagram.com/jojobragais.man/" target="_blank" className="flex items-center space-x-2 hover:text-pink-500">
                                    <i className="fab fa-instagram text-2xl"></i>
                                    <span>@jojobragais.man</span>
                                </a>
                                <a href="https://www.jojobragais.com/" target="_blank" className="flex items-center space-x-2 hover:text-yellow-500">
                                    <i className="fa-solid fa-globe text-2xl"></i>
                                    <span>jojobragais.com</span>
                                </a>
                                <a href="https://www.tiktok.com/@jojobragaisofficial" target="_blank" className="flex items-center space-x-2 hover:text-slate-500">
                                    <i className="fa-brands fa-tiktok text-2xl"></i>
                                    <span>@jojobragaisofficial</span>
                                </a>
                                <a href="mailto:contact@jojobragais.shoecietyinc.com" className="flex items-center space-x-2 text-blue-400 hover:underline">
                                    <i className="fa-solid fa-envelope text-2xl"></i>
                                    <span>contact@jojobragais.shoecietyinc.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="sm:w-1/2 text-center sm:text-right">
                            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                            <div className="mb-6">
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:0273400400">(02) 7340-0400</a>
                                </p>
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:0270014741">(02) 7001-4741</a>
                                </p>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Official Agents</h3>
                            <p className="text-sm mb-2">(Viber, WhatsApp, or Messaging App)</p>
                            <div className="space-y-4">
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:+639177059774">+63 917-7059-774</a>
                                </p>
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:+639177069758">+63 917-7069-758</a>
                                </p>
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:+639542642116">+63 954-264-2116</a>
                                </p>
                                <p className="text-blue-400 hover:underline">
                                    <a href="tel:+639171374771">+63 917-137-4771</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        &copy; 2018 Jojo Bragais - Shoeciety Inc. All Rights Reserved.
                    </div>
                </div>
            </footer>


        </>
    );
}
