import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
         <div>
        <h1 className='text-4xl underline font-bold text-black text-center'>Product Page</h1>
    </div>

    <div className='flex underline text-2xl font-bold gap-10'>
    <Link to='/product/men'>Men's Collection</Link>
    <Link to='/product/women'>Women's Collection</Link>
    </div>

    
    </div>
    
  )
}

export default Product
