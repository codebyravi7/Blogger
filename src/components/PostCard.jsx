import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 h-72'>
            <div className='w-full flex justify-center items-center mb-4 h-48'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl max-w-full max-h-full ' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard