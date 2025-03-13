import React,{ useActionState } from 'react';
import ContextHook from './ContextHook';

const UseActionHook = () => {
    const HandleSubmit =async (prevdata,formData) =>{
        let name = formData.get('name');
        let password = formData.get('password');
        await new Promise(res=>setTimeout(res,2000));
        console.log("handle submit called",name,password);
        if(name && password){
            return {msg:"data submited",name,password}
        }else{
            return {error:"Failed to submit"}
        }
    }
    const [data,action,pending] = useActionState(HandleSubmit,undefined);
    console.log(data);
  return (
    <div>
      <h1>useActionState hook in react Js</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='enter your name' name='name'/>
        <br /><br />
        <input defaultValue={data?.password} type="password" placeholder='enter password name' name='password'/>
        <br /><br />
        <button disabled={pending}>submit data</button>
      </form>
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      {
        data?.msg && <span style={{color:"green"}}>{data?.msg}</span>
      }
      <h3>Name :{data?.name}</h3>
      <h3>Password :{data?.password}</h3>
    </div>
  )
}

export default UseActionHook
