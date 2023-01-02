import brand_icon from "./../../assets/3.jpeg";
import {HeartIcon, UserCircleIcon} from '@heroicons/react/24/outline';

export default function NavBar() {
    return (
        <nav className="flex justify-between px-10 absolute w-full top-0 z-20">
            <div className="flex gap-5 items-center">
                <div>
                    <img className="w-24" src={brand_icon}/>
                </div>
            
                <a href="#" className="font-bold mr-2">Home</a>
                <a href="#" className="font-bold mr-2">About Us</a>
                <a href="#" className="font-bold mr-2">Migrate</a>
                <a href="#" className="font-bold mr-2">Services</a>
                <a href="#" className="font-bold mr-2">Contact Us</a>
            </div>

            <div className="flex gap-5">
                <HeartIcon className="w-5" />
                <UserCircleIcon className="w-5" />
            </div>
        </nav>
    )
}