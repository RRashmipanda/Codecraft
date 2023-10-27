import React from 'react'
import Layout from '../../Components/layout/Layout'
import HeroSection from '../../Components/heroSection/HeroSection'
import BlogPostCard from '../../Components/blogPostCard/BlogPostCard'
import { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div>
      <Layout>
       <HeroSection/>
       <BlogPostCard/>
       
      </Layout>
    </div>
  )
}

export default Home
