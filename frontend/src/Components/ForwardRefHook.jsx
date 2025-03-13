import React from 'react'
import {useFormStatus} from 'react-dom'
const ForwardRefHook = () => {
    const handlesubmit =async (e) =>{
       await new Promise(res=>setTimeout(res,2000));
        console.log("submit")
    }
    const SubmitForm = () =>{
            const {pending} = useFormStatus();
            console.log(pending);
            
            return(
                <>
                 <input type="text" placeholder='enter your name' /><br />
                 <input type="text" placeholder='enter your password' /><br />
                 <button className='text-amber-50 bg-amber-600' style={pending?{backgroundColor:"black"}:null} disabled={pending}>submit</button>
                </>
            )
        }
    return (
        <div>
            <form action={handlesubmit}>
               <SubmitForm/>
            </form>
        </div>
    )
}

export default ForwardRefHook

