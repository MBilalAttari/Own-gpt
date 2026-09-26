import React from 'react'

const Button = (p) => {
    console.log(p)

  return (

      <button className={`border border-gray-400 text-sm font-semibold py-1 px-3 rounded-md cursor-pointer ${p.className}`}>{p.children}</button>

  )
}

export default Button
