import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar/page'
import CategoryFilter from "@/components/Categories/page";
import Fur1 from '@/assets/images/Fur1.png'
import Fur2 from '@/assets/images/Fur2.png'
import Fur3 from '@/assets/images/Fur3.png'
import Fur4 from '@/assets/images/Fur4.png'
import Arrow from '@/assets/svg/Arrow.svg'
export default function HomePage() {
    return (
        <>
            <header
                style={{
                    backgroundImage: 'url(/images/synlivingbg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                }}>
                <div className="w-11/12 mx-auto">
                    <div>
                        <Navbar />
                        <div className="flex justify-center items-center h-screen text-primary">
                            <h1 className="uppercase text-[9vw]">synliving</h1>
                        </div>
                    </div>

                </div>
            </header>

            <section id="About" className="bg-primary h-screen flex justify-center items-center">
                <div className="max-w-[600px] uppercase text-3xl text-secondary text-center">
                    <h1>Welcome to our furniture shop, where timeless and stylish designs meet story telling.</h1>
                </div>
            </section>

            <section id="Arrivals">
                <div className="uppercase text-secondary bg-Tertiary font-semibold flex justify-center text-2xl items-center h-16">
                    <h1>New Arrivals</h1>
                </div>
                <div>
                    <div className="grid grid-cols-3">
                        <div className="relative">
                            <Image className="h-full w-full" src={Fur1} alt="furniture" />
                            <div className="absolute bottom-0 pb-10 pl-6 text-white">
                                <h1 className="text-4xl">Lorem ipsum</h1>
                                <p>Lorem ipsum ipsum</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image className="h-full w-full" src={Fur4} alt="furniture" />
                            <div className="absolute bottom-0 pb-10 pl-6 text-white">
                                <h1 className="text-4xl">Lorem ipsum</h1>
                                <p>Lorem ipsum ipsum</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image className="h-full w-full" src={Fur3} alt="furniture" />
                            <div className="absolute bottom-0 pb-10 pl-6 text-white">
                                <h1 className="text-4xl">Lorem ipsum</h1>
                                <p>Lorem ipsum ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-[60%,40%]">
                        <div className="relative">
                            <Image className="h-full w-full" src={Fur2} alt="furniture" />
                            <div className="absolute bottom-0 pb-10 pl-6 text-white">
                                <h1 className="text-4xl">Lorem ipsum</h1>
                                <p>Lorem ipsum ipsum</p>
                            </div>
                        </div>
                        <div className="relative text-primary bg-secondary">
                            <div className="pl-20 pt-20 text-4xl uppercase">
                                <h1>New Arrivals</h1>
                            </div>
                            <div className="absolute bottom-0 pb-12 right-0 pr-20 text-xl">
                                <p>See all</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Product" className="h-full">
                <div className="uppercase text-secondary bg-Tertiary font-semibold flex justify-center text-2xl items-center h-16">
                    <h1>Product</h1>
                </div>
                <div className="w-11/12 mx-auto pt-20">
                    <CategoryFilter />
                </div>
            </section>

            <footer className="relative h-screen flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-center text-secondary text-8xl">Subscribe to our <br /> Newsletter</h1>
                    <div className="relative mt-40">
                        <input className="text-2xl py-4 pr-96 border-b-2 border-secondary focus:outline-none focus:border-secondary placeholder-secondary" type="text" name="" placeholder="ENTER YOUR EMAIL" id="" />
                        <div className="absolute right-0 bottom-0 pb-4 pr-8">
                            <Image src={Arrow} width={30} height={30} alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 border-t-2 border-secondary w-screen mt-40">
                    <div className="py-6 text-xl text-secondary flex justify-between items-center w-11/12 mx-auto">
                        <div>
                            <h1>© 2024 S. All Rights Reserved</h1>
                        </div>

                        <ul className="flex">
                            <li className="px-2"><Link href="">Facebook</Link></li>
                            <li className="px-2"><Link href="">Instagram</Link></li>
                            <li className="px-2"><Link href="">Twitter</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
