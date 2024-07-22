import React from 'react'
import CreatePost from './CreatePost'
import PostCard from './PostCard'

const Home = () => {
  return (
    <div className=' w-3/6 mt-11'>
      <div className='py-4'>
      <h2 className='text-4xl pb-3 text-[#C5C7CA]'>Hello Jane</h2>
      <p className='text-[#7F8084] text-lg w-3/4'>How are you doing today? Would you like to share something with the community 🤗</p>
      </div>

      <CreatePost/>

      <PostCard/>
      <PostCard/>

    </div>
  )
}

export default Home
