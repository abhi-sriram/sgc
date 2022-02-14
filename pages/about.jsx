import Layout from '../components/Layout'
import HeadComponent from '../components/HeadComponent'
import Image from 'next/image'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from '@icons-pack/react-simple-icons'
import { createRef, useEffect } from 'react'
import { scrollDivAtom } from '../atoms/ScrollDivAtom'
import { scrollDivFooterAtom } from '../atoms/ScrollDivFooterAtom'
import { useRecoilState } from 'recoil'
import Link from 'next/link'

function CardImage({
  image,
  name,
  designation,
  mail,
  facebook,
  linkedin,
  twitter,
  instagram,
}) {
  return (
    <div className=" space-y-4 rounded-md border border-dashed bg-white p-5 shadow-md hover:bg-gray-50">
      <div className="relative h-44 w-44 rounded-full border border-dashed">
        <Image
          src={`/images/${image}.png`}
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg "
        />
      </div>
      <div className="flex justify-center space-x-4">
        {linkedin ? (
          <div className="cursor-pointer">
            <Linkedin color="#0A66C2" size={20} />
          </div>
        ) : (
          <></>
        )}
        {facebook ? (
          <div className="cursor-pointer">
            <Facebook color="#1877F2" size={20} />
          </div>
        ) : (
          <></>
        )}
        {instagram ? (
          <div className="cursor-pointer">
            <Instagram color="#E4405F" size={20} />
          </div>
        ) : (
          <></>
        )}
        {twitter ? (
          <div className="cursor-pointer">
            <Twitter color="#1DA1F2" size={20} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h1 className="font-mono text-lg text-gray-900 ">{name}</h1>
        <p className="font-sans text-sm text-gray-600">{designation}</p>
        <p className="font-sans text-sm text-gray-600">{mail}</p>
      </div>
    </div>
  )
}

function Index() {
  const [scroll, setScroll] = useRecoilState(scrollDivAtom)
  const [scrollFooter, setScrollFooter] = useRecoilState(scrollDivFooterAtom)

  const scrollDiv = createRef()
  const scrollDivFooter = createRef()

  useEffect(() => {
    scrollDiv.current.scrollIntoView({ behavior: 'smooth' })

    setInterval(() => {
      setScroll(false)
    }, 1000)
  }, [scroll])

  useEffect(() => {
    scrollDivFooter.current.scrollIntoView({ behavior: 'smooth' })

    setInterval(() => {
      setScrollFooter(false)
    }, 1000)
  }, [scrollFooter])
  return (
    <div className="mx-auto max-w-6xl bg-gray-50">
      <HeadComponent title={'About SGC'} />
      {/* Banner */}
      <div className=" flex  h-screen flex-col-reverse items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-purple-500 py-10 px-5 sm:h-full sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-center text-2xl font-semibold text-gray-800 sm:text-4xl ">
            About Student Governing Council
          </h1>
          <p className="text-center font-mono text-sm font-semibold text-gray-200">
            Inclusive Growth of Rgukt Basar Students
          </p>
        </div>
        <div className="relative h-96 w-96">
          <Image src={'/images/hero.png'} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div
        ref={scrollDivFooter}
        className="mx-4 my-10 flex flex-col items-center justify-between  rounded-md border border-gray-100 bg-white shadow-md sm:mx-0 sm:flex-row"
      >
        <div className="relative h-96 w-96">
          <Image src={'/images/bg.png'} layout="fill" objectFit="contain" />
        </div>
        <div className="space-y-4 p-4 sm:w-1/2">
          <h1 className="text-3xl  text-gray-800 sm:text-4xl">Vision</h1>
          <p className="text-sm text-gray-600">
            VISION Aliquet nisi, scelerisque nisl a. Elementum quam ipsum, mi
            lectus tristique id id. Cursus maecenas ullamcorper viverra augue
            nulla montes, etiam. Nisi, tempor aliquam sit nunc volutpat
            sollicitudin. Proin mauris, blandit volutpat pretium vel scelerisque
            suspendisse magna. Cursus venenatis amet senectus euismod sit mattis
            augue.
          </p>
        </div>
      </div>
      <div className="mx-4 my-10 flex flex-col items-center justify-between  rounded-md border border-gray-100 bg-white shadow-md sm:mx-0 sm:flex-row-reverse">
        <div className="relative h-96 w-96">
          <Image src={'/images/bg.png'} layout="fill" objectFit="contain" />
        </div>
        <div className="space-y-4 p-4 sm:w-1/2">
          <h1 className="text-3xl  text-gray-800 sm:text-4xl">Mission</h1>
          <p className="text-sm text-gray-600">
            MISSION Aliquet nisi, scelerisque nisl a. Elementum quam ipsum, mi
            lectus tristique id id. Cursus maecenas ullamcorper viverra augue
            nulla montes, etiam. Nisi, tempor aliquam sit nunc volutpat
            sollicitudin. Proin mauris, blandit volutpat pretium vel scelerisque
            suspendisse magna. Cursus venenatis amet senectus euismod sit mattis
            augue.
          </p>
        </div>
      </div>
      <hr />
      <div className="space-y-10 py-10">
        <h1 className="text-center text-3xl text-gray-900">Body</h1>
        <div className="flex flex-col items-center space-y-10 sm:flex-row  sm:justify-evenly sm:space-y-0">
          <CardImage
            image={'girl'}
            name={'Name'}
            mail={'mail@rgukt.ac.in'}
            designation={'Designation'}
            twitter={'t'}
            facebook={'f'}
          />
          <CardImage
            image={'girl'}
            name={'Name'}
            mail={'mail@rgukt.ac.in'}
            designation={'Designation'}
            facebook={'f'}
            instagram={'i'}
          />
        </div>
        <div className="flex flex-col items-center space-y-10 sm:flex-row sm:justify-evenly sm:space-y-0">
          <CardImage
            image={'girl'}
            name={'Name'}
            mail={'mail@rgukt.ac.in'}
            designation={'Designation'}
            linkedin={'l'}
            facebook={'f'}
          />
          <CardImage
            image={'girl'}
            name={'Name'}
            mail={'mail@rgukt.ac.in'}
            designation={'Designation'}
            facebook={'f'}
            linkedin={'l'}
            instagram={'i'}
          />
          <CardImage
            image={'girl'}
            name={'Name'}
            mail={'mail@rgukt.ac.in'}
            designation={'Designation'}
            instagram={'i'}
            facebook={'f'}
          />
        </div>
      </div>
      <hr ref={scrollDiv} />
      <div className="space-y-10 py-10">
        <h1 className="text-center text-3xl text-gray-900">Panels</h1>
        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3">
          <Link href={'/panel/sports'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Sports
            </a>
          </Link>

          <Link href={'/panel/academics'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Academic
            </a>
          </Link>

          <Link href={'/panel/food'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Food
            </a>
          </Link>

          <Link href={'/panel/hostel-health'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Hostel & Health
            </a>
          </Link>

          <Link href={'/panel/training-placement'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Training & Placement
            </a>
          </Link>

          <Link href={'/panel/reasearch-development'}>
            <a
              className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
              href=""
            >
              Reasearch & Development
            </a>
          </Link>
          <button className="rounded-sm border border-green-500 px-5 py-2 text-green-600 hover:bg-green-600 hover:text-white">
            <Link href={'/panel/arts-culture'}>
              <a
                className="rounded-sm border border-green-500 px-5 py-2 text-center text-green-600 hover:bg-green-600 hover:text-white"
                href=""
              >
                Arts & Culture
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <Layout Component={<Index />} />
    </div>
  )
}

export default About
