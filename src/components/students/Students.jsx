import pic1 from './../../assets/16.jpeg';
import pic3 from './../../assets/19.jpeg';
export default function Students(){
    return(
        <div  className="bg-zinc-100">
        <div className=' mt-30 flex gap-20'>
        <span className='text-3xl text-3xl flex gap-10 mt-20 m-19 ml-2'>What Our Students Say</span>
        <div className='flex gap-10 mt-10 my-20'>
                
            <div className='  p-3 w-[25rem] rounded-lg bg-white'>
                      
                    
               
            <div className=' mt-5 md:text-left'>
                        <span className='text-sm w-[100%] '>
                        <span >Our mission is to empower all students to apply their acquired skills and knowledge, and to rely upon their personal attributes to lead productive lives and to become contributing members of the global community.</span>
                           
                        </span>
                         
            </div>
            <div className=' p-3 w-[20rem] rounded-lg flex'>
            <span>
                    <img src={pic1}  className='w-13 rounded-full'/>
                </span>
                <div className='text-sm w-[100%] mx-10 mt-2  '>
                    <span className='font-bold '>Purnima</span> 
                    <div className='flex'>
                 
                    <span className='text-slate-400 '>University Of Pacific</span>  
                    
                    </div> 
        
                    <span >USA</span>
                
                    </div>
                
            </div>
            
        </div>
        </div>



        <div className='flex gap-10 mt-10 my-20'>
                
                <div className='  p-3 w-[25rem] rounded-lg bg-white'>
                          
                        
                   
                <div className=' mt-5 md:text-left'>
                            <span className='text-sm w-[100%] '>
                            <span >Our mission is to empower all students to apply their acquired skills and knowledge, and to rely upon their personal attributes to lead productive lives and to become contributing members of the global community.</span>
                               
                            </span>
                             
                </div>
                <div className=' p-3 w-[20rem] rounded-lg flex'>
                <span>
                        <img src={pic3}  className='w-13 rounded-full'/>
                    </span>
                    <div className='text-sm w-[100%] mx-10 mt-2  '>
                        <span className='font-bold '>Raj</span> 
                        <div className='flex'>
                     
                        <span className='text-slate-400 '>University Of Pacific</span>  
                        
                        </div> 
            
                        <span >USA</span>
                    
                        </div>
                    
                </div>
                
            </div>
            </div>

        </div>
            
        </div>
    )
}