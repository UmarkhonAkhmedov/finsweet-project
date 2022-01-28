import Head from 'next/head'
import { homeBlogData } from '../components/dummyData'
import FAQ from '../components/FAQ'
import Hero from '../components/Home/Hero'
import HomeFeatures from '../components/Home/HomeFeatures'
import HomeTestimonials from '../components/Home/HomeTestimonials'
import HomeWork from '../components/Home/HomeWork'
import Inquiry from '../components/Home/Inquiry'
import Projects from '../components/Home/Projects'
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finsweet</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/logo.svg"/>
      </Head>
      <Hero heading="Building stellar websites for early startups" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." buttonMain="View our work" buttonSm="View Pricing" img="Home/hero__main.svg" link="/work"/>
      <HomeWork/>
      <Projects/>
      <HomeFeatures/>
      <HomeTestimonials/>
      <FAQ/>
      <Inquiry/>
      <h2 className='container'>Our Blog</h2>
      <Blog data={homeBlogData}/>
    </div>
  )
}
