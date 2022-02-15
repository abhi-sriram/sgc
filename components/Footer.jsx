import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from '@icons-pack/react-simple-icons'

function Footer() {
  // flex w-full flex-col space-y-5  sm:flex-row sm:justify-evenly
  return (
    <footer className="bg-gradient-to-tr from-gray-900 to-black p-5 px-5 py-14">
      <div
        className="mx-auto flex max-w-7xl flex-col  space-y-4 sm:flex-row sm:justify-around sm:space-y-0
      "
      >
        <div className="flex flex-col   space-y-2">
          <h1 className="text-6xl text-white"> Logo</h1>
          <h1 className="text-gray-200">Student Governing Council</h1>
        </div>

        <div className="flex flex-col  space-y-2 ">
          <h1 className="font-semibold text-gray-100">Community </h1>
          <div className="flex space-x-2">
            <Linkedin color="#0A66C2" size={20} />
            <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
              LinkedIn
            </li>
          </div>
          <div className="flex space-x-2">
            <Instagram color="#E4405F" size={20} />
            <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
              Instagram
            </li>
          </div>

          <div className="flex space-x-2">
            <Facebook color="#1877F2" size={20} />
            <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
             Facebook
            </li>
          </div>
          <div className="flex space-x-2">
            <Twitter color="#1DA1F2" size={20} />
            <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
              Twitter
            </li>
          </div>
        </div>
        <div className="flex flex-col   space-y-2">
          <h1 className="font-semibold text-gray-100">Quick Links</h1>
          <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
            Gallery
          </li>
          <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
            Archive
          </li>
          <li className="cursor-pointer list-none text-sm text-gray-200 hover:text-gray-500 hover:underline">
            Events
          </li>
        </div>
        <div className="flex flex-col justify-center">
          <button className="rounded-sm border border-dashed border-white px-5 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900">
            {' '}
            Submit Grievance
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center font-semibold text-gray-100">
          &copy;2022 RGUKT - Basar
        </h1>
        <h2 className="text-center font-thin text-gray-400">
          All Rights Reserved
        </h2>
      </div>
    </footer>
  )
}

export default Footer

// <div className="flex flex-col justify-center space-y-2">
//   <button className="rounded-sm border border-dashed border-green-500 px-5 py-2 text-green-600 hover:bg-green-600 hover:text-white">
//     {' '}
//     <Link href={'/about'}>
//       <a href="" onClick={() => setScrollFooter(true)}>
//         Know More
//       </a>
//     </Link>
//   </button>

// <button className="rounded-sm border border-dashed border-white px-5 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900">
//   {' '}
//   Need Help ?
// </button>
// </div>
