import React, { useRef } from 'react'

const UseRefHook = () => {
    const inputref = useRef(null);
    const handleClick =()=>{
        let val = inputref.current.value;
        console.log(val);
    }
  return (
    <React.Fragment>
      <input ref={inputref} type="text" />
      <button onClick={handleClick}>click</button>
    </React.Fragment>
  )
}

export default UseRefHook
