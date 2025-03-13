import React, { useContext, useState } from 'react'
import { User } from './Data.jsx'

const ContextHook = () => {
    const data = useContext(User) ;   

    return (
    <div>
        default value = {data}
    </div>
  )
}


export default ContextHook
