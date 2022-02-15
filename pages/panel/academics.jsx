import Layout from '../../components/Layout'
import HeadComponent from '../../components/HeadComponent'

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from '@icons-pack/react-simple-icons'
import Image from 'next/image'

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
    <div className="  space-y-4 rounded-md border border-dashed bg-white p-5 shadow-md hover:bg-gray-50">
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
  return (
    <div>
      <HeadComponent title={'Academics Panel'} />
      <div className=" flex h-screen items-center justify-center rounded-sm bg-gradient-to-br from-blue-400 to-purple-500 py-10 px-5 sm:h-96  ">
        <div className=" space-y-3 ">
          <h1 className="text-center text-2xl font-semibold text-gray-800 sm:text-4xl">
            About Student Governing Council
          </h1>
          <h1 className="text-center text-3xl font-semibold text-gray-100 sm:text-4xl">
            Academics Panel
          </h1>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col justify-center space-y-10 bg-gray-50 p-10 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="relative h-96  rounded-md border border-dashed border-gray-400 bg-gradient-to-br from-blue-50 to-blue-300 p-4 shadow-md sm:w-96">
          <h1 className="mb-10 font-sans text-3xl font-medium text-gray-700">
            Vision
          </h1>
          <div className="z-30">
            <div className="flex items-center space-x-4">
              {/* <div className="h-4 w-10 rounded-full border border-dashed border-green-600 "></div> */}
              <h3 className="text-sm text-gray-800">
                {' '}
                &nbsp;&nbsp;&nbsp;To assist in the robust functioning of
                Academics in coordination with the Administration and the entire
                campus community.
              </h3>
            </div>
          </div>

          {/* <img
            src="/images/hero.png"
            alt=""
            className="absolute bottom-0 right-0 z-0  h-52 w-52 object-contain"
          /> */}
        </div>
        <div className="relative  h-96 rounded-md border border-dashed border-gray-400 bg-gradient-to-br from-blue-50 to-blue-300 p-4 shadow-md sm:w-96">
          <h1 className="mb-10 font-sans text-3xl font-medium text-gray-700">
            Objective
          </h1>
          <div className="z-30">
            <div className="flex items-center  space-x-4">
              {/* <div className="h-4 w-28 rounded-full border border-dashed border-green-600 "></div> */}
              <h3 className="text-sm text-gray-800">
                {' '}
                &nbsp;&nbsp;&nbsp;The objective of the Institute Academic
                Affairs Council is to address all the issues related to the
                academic affairs of students. It is the representation of
                students in all matters related to the academic programme, the
                curriculum, the academic office and administration. The council
                also strives to conduct tech activities, secure internships and
                promote undergraduate research.
              </h3>
            </div>
          </div>

          {/* <img
            src="/images/hero.png"
            alt=""
            className="absolute bottom-0 right-0 z-0  h-52 w-52 object-contain"
          /> */}
        </div>
      </div>

      {/* Responsibilities */}
      <hr />
      <div className="mx-auto max-w-5xl p-10">
        <h1 className=" mb-10 text-3xl font-semibold text-gray-800">
          Functions & Roles
        </h1>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {' '}
            1. Infrastructure & Learning Resources
          </h3>
          <div className="ml-10">
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 1.1</span>{' '}
              Classroom, Laboratory & Resources Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 1.2</span> Library
              Committee
            </h3>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {' '}
            2. Student Welfare Committees
          </h3>
          <div className="ml-10">
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 2.1</span> Soft
              Skills Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 2.2</span> Student
              Career Advancement Committees
            </h3>
            <div className="ml-5">
              <h3 className="text-sm text-gray-800">
                {' '}
                <span className="font-semibold text-gray-900"> 2.2.1</span>{' '}
                Student Orientation Committee
              </h3>
              <h3 className="text-sm text-gray-800">
                {' '}
                <span className="font-semibold text-gray-900"> 2.2.2</span>{' '}
                Student Progression committee
              </h3>
              <h3 className="text-sm text-gray-800">
                {' '}
                <span className="font-semibold text-gray-900"> 2.2.3</span>{' '}
                Social Responsibility & Institutional Values Committee
              </h3>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {' '}
            3. Information & Broadcasting
          </h3>
          <div className="ml-10">
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 3.2</span>{' '}
              Academics Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 3.2</span> Web &
              Design Committee
            </h3>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {' '}
            4. Club Managers & Convenors
          </h3>
          <div className="ml-10">
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 4.1</span>{' '}
              E-Education Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 4.2</span>{' '}
              Competetive Examination Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              <span className="font-semibold text-gray-900"> 4.3</span> Boards
              Of Studies Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 4.4</span> External
              Affairs Committee
            </h3>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {' '}
            5. Miscellaneous Committees
          </h3>
          <div className="ml-10">
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 5.1</span>{' '}
              Internships and Industrial Visits Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              {' '}
              <span className="font-semibold text-gray-900"> 5.2</span> Research
              & Development Committee
            </h3>
            <h3 className="text-sm text-gray-800">
              <span className="font-semibold text-gray-900"> 5.3</span> Students
              Grievance Committee( Examination & Scholarship)
            </h3>
          </div>
        </div>
        <div className="my-5">
          <a
            href="https://drive.google.com/file/d/1vsTvHrhpcAqOdkxpZd86EO4EdZQscquQ/view?usp=sharing"
            target="_blank"
            className=" border border-green-500 px-5 py-2 text-green-500 hover:bg-green-500 hover:text-white"
          >
            View Document
          </a>
        </div>
      </div>
      <hr />
      <div className="mx-auto max-w-5xl p-10">
        <h1 className=" mb-10 text-3xl font-semibold text-gray-800">
          Members of the council
        </h1>
      </div>
      <div className="relative h-96 w-full sm:h-screen">
        <Image src={'/panels/academics.jpg'} layout="fill" />
      </div>
      <hr />
      <div className="mx-auto max-w-5xl p-10">
        <h1 className=" mb-10 text-3xl font-semibold text-gray-800">Body</h1>
        <div className="flex flex-col items-center space-y-10 sm:flex-row  sm:space-x-4 sm:space-y-0">
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
        <div className="mt-10 flex flex-col items-center  space-y-10 sm:flex-row sm:space-x-4 sm:space-y-0">
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
        </div>
      </div>
    </div>
  )
}

function Academics() {
  return (
    <div>
      <Layout Component={<Index />} />
    </div>
  )
}

export default Academics
