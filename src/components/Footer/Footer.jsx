import { PhoneIcon, EnvelopeIcon, } from '@heroicons/react/24/outline';
export default function Footer() {
    return (
        <div class="bg-gradient-to-r from-yellow-400 to-stone-200 ... p-4">

            <div className=' mt-30 p-4 flex'>
                <div>
                    <span className=' text-lg  mt-20 mx-2 font-bold'>Office Addreses</span>
                    <div >
                        <span className='text-sm flex gap-10  ml-2 mr-200'>The One Way, No 29, Tyagraj Nagar Road,</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200'>near Vidyapeeta Circle, Vidyapeeta Layout,</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200'>Ashok Nagar, Banashankari Stage I, Banashankari,</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200'>Bengaluru, Karnataka 560050</span>
                        <div className="flex mt-7">
                            <PhoneIcon className='w-5' />
                            <span className="p-2">+919003076571</span>
                            <div className='border-r-2 border-black ' />
                            <span className='p-2'>+918754545254</span>

                        </div>
                        <div className="flex mt-7">
                            <EnvelopeIcon className='w-5' />
                            <span className="p-2">info@edutrust.in</span>


                        </div>
                    </div>


                </div>



                <div className="mx-2">
                    <span className=' text-lg  mt-20 mx-2 font-bold ' >Useful links </span>
                    <div >
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Home</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Abourt US</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Migrate</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Services</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Contact Us</span>

                    </div>


                </div>




                <div className="ml-40">
                    <span className=' text-lg  mt-20 mx-2 font-bold mx-4' >International Careers Streams </span>
                    <div >
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Medices</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Health Care</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Engineering </span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Maritime</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Business Management </span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Finance And Accounts </span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Hospitality</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Visual Media</span>

                    </div>


                </div>



                <div className="ml-20">
                    <span className=' text-lg  mt-20 mx-2 font-bold mx-4' >Study In </span>
                    <div >
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>USA</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>UK</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Canada</span>
                        <span className='text-sm flex gap-10  ml-2 mr-200 p-2'>Australia</span>


                    </div>


                </div>


                <div className="ml-20">
                    <span className=' text-lg  mt-20 mx-2 font-bold mx-4' >Follow us on </span>
                    <div className='flex'>

                    </div>


                </div>








            </div>
        </div>
    )
}