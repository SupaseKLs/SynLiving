import Image from "next/image";
import Link from "next/link";
import Cart from '@/assets/svg/cart.svg'
import User from '@/assets/svg/user.svg'
import Search from '@/assets/svg/search.svg'
export default function HomePage() {
    return (
        <nav className="flex justify-between items-center h-12">
            <ul className="uppercase text-white flex">
                <li className="px-3"><Link href="">About</Link></li>
                <li className="px-3"><Link href="">Shop</Link></li>
                <li className="px-3"><Link href="">Arrival</Link></li>
                <li className="px-3"><Link href="">Product</Link></li>
                <li className="px-3"><Link href="">Contact</Link></li>
            </ul>

            <div className="flex">
                <Link className="px-2" href=""><Image src={Search} alt="search" /></Link>
                <Link className="px-2" href=""><Image src={User} alt="user" /></Link>
                <Link className="px-2" href=""><Image src={Cart} alt="cart" /></Link>
            </div>
        </nav>
    );
}
