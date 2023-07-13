import './globals.css'
import NavBar from '@/components/layout/NavBar'
import { Inter } from 'next/font/google'

import fullCircle from '@/assets/images/bg-full-circle.png';
import halfCircle from '@/assets/images/bg-half-circle.png';

const backgroundCircles = {
  background:
    `url(${fullCircle.src}) bottom 300px left -100px no-repeat, url(${halfCircle.src}) bottom right -100px no-repeat`,
};

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boston Code and Coffee',
  description: 'A Boston-based meetup community for developers to grow and make friends.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex flex-col items-center justify-center h-full'>
      <body style={backgroundCircles} className="sm:flex flex-col items-center w-full h-full md:max-w-[576px] lg:max-w-[576px]">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
