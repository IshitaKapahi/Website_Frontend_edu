import uk from './../../assets/5.jpg';
import logo from './../../assets/7.png';
import pic1 from './../../assets/11.png';
import logo1 from './../../assets/6.png';
import pic2 from './../../assets/8.png';
import logo2 from './../../assets/9.png';
import logo3 from './../../assets/10.png';


export default function Universities() {
    
    return (
        <div className='m-12'>
            <span className='text-2xl text-3xl flex gap-10 mt-20'>Partnered Universities</span>

            <div className='flex gap-10 mt-10 my-20'>
                
            <div className='border p-3 w-[20rem] rounded-lg'>
                <span className='flex gap-5'>
                    <img src={uk}  className='w-6'/>
                    <span>Peiora, illinois</span>
                </span>
                <div className='border-b border-gray-200 my-5' />

                <div className='flex flex-col gap-6 mt-5'>
                    <img src={logo} className='w-45 self-center' />

                    <div className='flex gap-3 mt-5 w-[90%] p-3 md:text-center'>
                        <span className='text-sm w-[100%] mx-6'>
                            Starting Fee 
                            <span className='text-gray-500 break-all flex w-[90%]'> $12000</span>
                        </span>

                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm '>
                            IELTS
                            <span className='text-gray-500 flex'> 6.0</span>
                        </span>
                        
                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm'>
                            GRE
                            <span className='text-gray-500 flex'> 280</span>
                        </span>
                       
                    </div>
                    <div classname='flex gap-10'>
                        <img src={pic1} className='w-25 self-center flex' />
                        </div>
                </div>
            </div>



            <div className='border p-4 w-[20rem] rounded-lg'>
                <span className='flex gap-5'>
                    <img src={logo1}  className='w-6'/>
                    <span>Peiora, illinois</span>
                </span>
                <div className='border-b border-gray-200 my-7' />

                <div className='flex flex-col gap-6 mt-5'>
                    <img src={pic2} className='w-45 self-center' />

                    <div className='flex gap-3 mt-5 w-[90%] p-3 md:text-center'>
                        <span className='text-sm w-[100%] mx-6'>
                            Starting Fee 
                            <span className='text-gray-500 break-all flex w-[90%]'> $12000</span>
                        </span>

                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm '>
                            IELTS
                            <span className='text-gray-500 flex'> 6.0</span>
                        </span>
                        
                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm'>
                            GRE
                            <span className='text-gray-500 flex'> 280</span>
                        </span>
                       
                    </div>
                    <div classname='flex gap-10'>
                        <img src={pic1} className='w-25 self-center flex' />
                        </div>
                </div>
            </div>


     
            <div className='border p-4 w-[20rem] rounded-lg'>
                <span className='flex gap-5'>
                    <img src={uk}  className='w-6'/>
                    <span>Peiora, illinois</span>
                </span>
                <div className='border-b border-gray-200 my-3' />

                <div className='flex flex-col gap-6 mt-5'>
                    <img src={logo2} className='w-25 self-center' />

                    <div className='flex gap-3 mt-5 w-[90%] p-3 md:text-center'>
                        <span className='text-sm w-[100%] mx-6'>
                            Starting Fee 
                            <span className='text-gray-500 break-all flex w-[90%]'> $12000</span>
                        </span>

                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm '>
                            IELTS
                            <span className='text-gray-500 flex'> 6.0</span>
                        </span>
                        
                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm'>
                            GRE
                            <span className='text-gray-500 flex'> 280</span>
                        </span>
                       
                    </div>
                    <div classname='flex gap-10'>
                        <img src={pic1} className='w-25 self-center flex' />
                        </div>
                </div>
            </div>





            <div className='border p-4 w-[20rem] rounded-lg'>
                <span className='flex gap-5'>
                    <img src={logo1}  className='w-6'/>
                    <span>Peiora, illinois</span>
                </span>
                <div className='border-b border-gray-200 my-5' />

                <div className='flex flex-col gap-6 mt-5'>
                    <img src={logo3} className='w-45 self-center' />

                    <div className='flex gap-3 mt-5 w-[90%] p-3 md:text-center'>
                        <span className='text-sm w-[100%] mx-6'>
                            Starting Fee 
                            <span className='text-gray-500 break-all flex w-[90%]'> $12000</span>
                        </span>

                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm '>
                            IELTS
                            <span className='text-gray-500 flex'> 6.0</span>
                        </span>
                        
                        <div className='border-l border-gray-200 md:text-center' />
                        <span className='text-sm'>
                            GRE
                            <span className='text-gray-500 flex'> 280</span>
                        </span>
                       
                    </div>
                    <div classname='flex gap-10'>
                        <img src={pic1} className='w-25 self-center flex' />
                        </div>
                </div>
            </div>




            </div>
        </div>
    )
}