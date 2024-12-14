import Image from "next/image";
import Navbar from '@/components/Navbar/page'
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
                <div>
                    <h1></h1>
                </div>
            </section>
        </>
    );
}
