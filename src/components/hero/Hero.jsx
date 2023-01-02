import girl from './../../assets/4.jpg';

import uk from './../../assets/5.jpg';
import { ChevronDownIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <div className='bg-yellow-400/90 w-full h-screen flex flex-col justify-center'>
            <img className="absolute right-0 h-screen z-10" src={girl} />
            <div className='grid grid-cols-2 grid-rows-2 px-10 items-end justify-items-start w-1/2'>
                <span className='text-6xl'>Let your</span>

                    <span className='flex row-span-2 items-end'>
                       
                        <span className='font-bold text-6xl'>wings</span>
                        
                    </span>

                <span className='text-6xl font-bold flex'>dream take</span>
            </div>

            <div className='px-10 mt-44 z-10 w-[75%]'>
                <span className=''>Find your dream college</span>

                <div className='mt-3 flex rounded-l-full shadow-lg rounded-r-full bg-white p-4 gap-4'>
                    <span className='w-52 flex gap-3 items-center'>
                        <img src={uk} className="w-5" />
                        <ChevronDownIcon className='w-5 text-gray-400' />
                    </span>
                    <div className='border-r-2 border-gray-200'/>

                    <span className='w-full flex gap-3 items-center'>
                        <span className='text-gray-500 w-full'>Choose your degree</span>
                        <ChevronDownIcon className='w-5 text-gray-400' />
                    </span>
                    <div className='border-r-2 border-gray-200'/>

                    <span className='w-full flex gap-3 items-center'>
                        <span className='text-gray-500 w-full'>Area of study</span>
                        <ChevronDownIcon className='w-5 text-gray-400' />
                    </span>
                    <div className='border-r-2 border-gray-200'/>

                    <span className='w-full flex gap-3 items-center'>
                        <span className='text-gray-500 w-full'>Course or Specialization</span>
                        <ChevronDownIcon className='w-5 text-gray-400' />
                    </span>

                    <button className='p-2 bg-yellow-300 rounded-full'>
                        <MagnifyingGlassIcon className='w-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}