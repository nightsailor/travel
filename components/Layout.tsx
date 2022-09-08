import Link from 'next/link'
import Head from 'next/head'

export type LayoutProps = {
  children?: JSX.Element | JSX.Element[]
  title?: string
}

export default function Layout({
  children,
  title = 'Voyager - Trip Planner',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
