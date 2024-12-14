import Image from "next/image";
import Navbar from '@/components/Navbar/page'
import Fur1 from '@/assets/images/Fur1.png'
import Fur2 from '@/assets/images/Fur2.png'
import Fur3 from '@/assets/images/Fur3.png'
import Fur4 from '@/assets/images/Fur4.png'
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
                        <div className="flex justify-center items-center h-full">
                            <h1 className="uppercase text-[8vw]">synliving</h1>
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
                        <div className="relative bg-secondary">
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

            <section id="Product">
                <div className="uppercase text-secondary bg-Tertiary font-semibold flex justify-center text-2xl items-center h-16">
                    <h1>Product</h1>
                </div>
            </section>
        </>
    );
}
