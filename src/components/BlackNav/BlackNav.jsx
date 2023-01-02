import pic from './../../assets/25.png';
import pic1 from './../../assets/26.png';
export default function BlackNav() {
    return(
        <div className="bg-black p-5" >
            <div className=" flex rounded-l-full   ">
            <span className=' text-white align-middle ml-40 text-3xl p-2 my-0'>Amazon</span>
            <img src={pic} className='w-7 h-9 my-2 '/>
            <img src={pic1} className='w-7 h-9 my-2 mx-23 p-4'/>
            <div className='mt-1 flex rounded-lg bg-white p-2 gap-4'>
                    <span className='w-52 flex gap-3 items-center w-full'>
                    <span className='text-gray-500 w-full'>Enter Your Mobile Number</span>
                    </span>
                    <button className='mt-1 flex rounded-lg bg-yellow-500 p-2 gap-4'>Submit</button>
                   </div>
                   <span className='text-white text-xl my-5 mx-4'>or</span>
                   <div className='mt-1 flex rounded-lg bg-white p-2 gap-4'>
                    <span className='w-52 flex gap-3 items-center w-full'>
                    <span className='text-gray-500 w-full'>Enter Your Mobile Number</span>
                    </span>
                    <button className='mt-1 flex rounded-lg bg-yellow-500 p-2 gap-4'>Submit</button>
                   </div>
                   <span className='text-white text-xl my-5 mx-4'>to get the app link</span>

                    
                       
                    
            </div>
            
        </div>
    )
}