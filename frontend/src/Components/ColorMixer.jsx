import React, { useState } from 'react'

const ColorMixer = () => {
    const [r,setr] = useState(0);
    const [g,setg] = useState(0);
    const [b,setb] = useState(0);
  return (
    <div style={{width:"100vh",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div style={{width:"200px",height:"200px",backgroundColor:`rgb(${r},${g},${b})`}}></div>
      <input type="range" min={0} max={255} value={r} onChange={(e)=>setr(e.target.value)} /><br /><br />
      <input type="range" min={0} max={255} value={g} onChange={(e)=>setg(e.target.value)} /><br /><br />
      <input type="range" min={0} max={255} value={b} onChange={(e)=>setb(e.target.value)} /><br /><br />
    </div>
  )
}

export default ColorMixer
