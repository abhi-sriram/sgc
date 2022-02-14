import Link from 'next/link'
import { scrollDivAtom } from '../atoms/ScrollDivAtom'
import { useRecoilState } from 'recoil'

function Header() {
  const [scroll, setScroll] = useRecoilState(scrollDivAtom)

  return (
    <div className="sticky top-0 z-50     bg-gray-100 p-5 shadow-md ">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <h1 className="cursor-pointer text-gray-900">Logo</h1>
        </div>
        <div className="flex space-x-5 ">
          <Link href={'/'}>
            <a href="">
              <h3 className="cursor-pointer text-gray-700 hover:text-gray-900">
                Home
              </h3>
            </a>
          </Link>
          <Link href={'/about'}>
            <a href="">
              <h3 className="cursor-pointer text-gray-700 hover:text-gray-900">
                About
              </h3>
            </a>
          </Link>
          <Link href={'/about'}>
            <a href="" onClick={() => setScroll(true)}>
              <h1 className="cursor-pointer text-gray-700 hover:text-gray-900">
                Panels
              </h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
