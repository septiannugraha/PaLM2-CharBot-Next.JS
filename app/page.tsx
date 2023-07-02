import Image from 'next/image'
import Link from 'next/link'
import ChatHistory from './components/ChatHistory'
import App from './components/App'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black items-center justify-between p-24">
      {/* <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      </div> */}
        <App/>
    </main>
  )
}
