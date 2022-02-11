import Layout from '../components/Layout'
import HeadComponent from '../components/HeadComponent'
import Image from 'next/image'
import { createRef } from 'react'

function Index() {
  return (
    <div className="mx-auto max-w-6xl bg-gray-50">
      <HeadComponent title={'SGC - Student Governing Council'} />
      {/* Banner */}
      <div className="fade-in-text flex  h-screen flex-col-reverse items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-purple-500 py-10 px-5 sm:h-full sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="fade-in-text  text-2xl font-semibold text-gray-800 sm:text-5xl ">
            Student Governing Council
          </h1>
          <p className="font-mono text-sm font-semibold text-gray-200">
            Inclusive Growth of Rgukt Basar Students
          </p>
          <button className="rounded-sm border border-dashed border-black px-5 py-2 text-gray-900 hover:bg-gray-900 hover:text-gray-100">
            {' '}
            Need Help ?
          </button>
        </div>
        <div className="relative h-96 w-96">
          <Image src={'/images/hero.png'} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="mx-4 my-10 flex flex-col items-center justify-between  rounded-md border border-gray-100 bg-white shadow-md sm:mx-0 sm:flex-row">
        <div className="relative h-96 w-96">
          <Image src={'/images/bg.png'} layout="fill" objectFit="contain" />
        </div>
        <div className="space-y-4 p-4 sm:w-1/2">
          <h1 className="text-3xl  text-gray-800 sm:text-4xl">About Rgukt</h1>
          <p className="text-sm text-gray-600">
            About RGUKT Located in the adobe of goddess Ganan Saraswati, RGUKT
            Basar visions to cater gifted rural youth of Telangana. RGUKT is
            well-known for it’s infrastructure and teaching methodology that
            enables every student to access ICT based learning experience.
          </p>
          <button className="rounded-sm border border-green-500 px-5 py-2 text-green-600 hover:bg-green-600 hover:text-white">
            {' '}
            Know More
          </button>
        </div>
      </div>
      <div className="mx-4 my-10 flex flex-col items-center justify-between  rounded-md border border-gray-100 bg-white shadow-md sm:mx-0 sm:flex-row-reverse">
        <div className="relative h-96 w-96">
          <Image src={'/images/bg.png'} layout="fill" objectFit="contain" />
        </div>
        <div className="space-y-4 p-4 sm:w-1/2">
          <h1 className="text-3xl  text-gray-800 sm:text-4xl">About SGC</h1>
          <p className="text-sm text-gray-600">
            About SGC SGC is a student body of RGUKT Basar that strives for
            healthy learning environment... Divided into Panels, aims to work
            for so and so Nisi, tempor aliquam sit nunc volutpat sollicitudin.
            Proin mauris, blandit volutpat pretium vel scelerisque suspendisse
            magna. Cursus venenatis amet senectus euismod sit mattis augue.
          </p>
          <button className="rounded-sm border border-green-500 px-5 py-2 text-green-600 hover:bg-green-600 hover:text-white">
            {' '}
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <Layout Component={<Index />} />
    </div>
  )
}

export default Home
