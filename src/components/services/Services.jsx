
import pic1 from './../../assets/12.png';

import pic2 from './../../assets/13.png';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { MapIcon } from '@heroicons/react/24/outline';
export default function Services() {
    return (
        <div className=' bg-gray-50 '>
             <div className='m-12 mt-30 flex gap-20'>
            <span className='text-3xl text-3xl flex gap-10 mt-20 m-19 ml-2'>Our Services</span>
           
            
            <div className='flex gap-10 mt-10 my-20'>
                
            <div className='  p-3 w-[15rem] rounded-lg bg-white'>
                        <ArchiveBoxIcon className='w-10 p-2 bg-yellow-300 rounded-full align-middle md:text-center' />
                    
               
            <div className='flex gap-3 mt-5 md:text-left'>
                        <span className='text-sm w-[100%] mx-6 '>
                        <span className='md:font-bold'>DHL Courier</span>
                            <span className='text-gray-500 break-all flex  my-8'> Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                        </span>
                        
            
            </div>
            <div classname='flex gap-8 my-3'>
                        <img src={pic1} className='w-21 flex' />
                        </div>
        </div>
        </div>


        <div className='flex gap-10 mt-10 my-20'>
                
                <div className=' p-3 w-[15rem] rounded-lg bg-white'>
                            <CreditCardIcon className='w-10 p-2 bg-slate-300 rounded-full align-middle md:text-center' />
                        
                   
                <div className='flex gap-3 mt-5 md:text-left'>
                            <span className='text-sm w-[100%] mx-6 '>
                            <span className='md:font-bold'>Forex</span>
                                <span className='text-gray-500 break-all flex  my-8'> Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                            </span>
                            
                
                </div>
                <div classname='flex gap-8 my-3'>
                            <img src={pic2} className='w-21 flex' />
                            </div>
            </div>
            </div>


            <div className='flex gap-10 mt-10 my-20'>
                
                <div className='p-3  w-[15rem] rounded-lg bg-white'>
                            <MapIcon className='w-10 p-2 bg-slate-300 rounded-full align-middle md:text-center' />
                        
                   
                <div className='flex gap-3 mt-5 md:text-left'>
                            <span className='text-sm w-[100%] mx-6 '>
                            <span className='md:font-bold'>Financial Preparation</span>
                                <span className='text-gray-500 break-all flex  my-8'> Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                            </span>
                            
                
                </div>
                <div classname='flex gap-8 my-3'>
                            <img src={pic2} className='w-21 flex' />
                            </div>
            </div>
            </div>




            <div className='flex gap-10 mt-10 my-20'>
                
                <div className=' p-3  w-[15rem] rounded-lg bg-white'>
                            <ArchiveBoxIcon className='w-10 p-2 bg-slate-300 rounded-full align-middle md:text-center' />
                        
                   
                <div className='flex gap-3 mt-5 md:text-left'>
                            <span className='text-sm w-[100%] mx-6 '>
                            <span className='md:font-bold'>Student VISA</span>
                                <span className='text-gray-500 break-all flex  my-8'> Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                            </span>
                            
                
                </div>
                <div classname='flex gap-8 my-3'>
                            <img src={pic2} className='w-21 flex' />
                            </div>
            </div>
            </div>



            
        </div>
        </div>
        



    )
}