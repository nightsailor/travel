import styles from '../styles/login.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { LayoutProps } from './Layout'

export default function AuthLayout({
  children,
  title = 'Voyager - Login',
}: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={styles.outer}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  )
}

export function Header({}) {
  return (
    <header className="py-2 shadow-[0px_14px_80px_rgba(34,35,58,0.2)] h-[56px] bg-white w-full absolute top-0 flex item-center justify-start ">
      <Link href="/">
        <a className="text-3xl font-medium px-8 sm:pl-20 ">Voyagre</a>
      </Link>

      <div className="flex items-center justify-start ">
        <Link href="/login">
          <a className="text-lg mr-2 sm:mr-4 ">Login</a>
        </Link>
        <Link href="/register">
          <a className="text-lg ">Register</a>
        </Link>
      </div>
    </header>
  )
}
