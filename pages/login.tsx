import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'

export default function Login() {
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      //   await login(usernameRef.current.value, passwordRef.current.value)
      router.push('/')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.outer}>
        <div className={styles.inner}>
          <form>
            <h3 className={styles.title}>Log in</h3>

            <div className={styles.formgroup}>
              <label className={styles.formlabel}>Email</label>
              <input
                type="email"
                className={styles.formcontrol}
                placeholder="Enter email"
              />
            </div>

            <div className={styles.formgroup}>
              <label className={styles.formlabel}>Password</label>
              <input
                type="password"
                className={styles.formcontrol}
                placeholder="Enter password"
              />
            </div>

            <div className={styles.formgroup}>
              <input
                className="mr-2 border border-[#ced4da]"
                type="checkbox"
                id="customCheck1"
              />
              <label className="inline-block" htmlFor="customCheck1">
                Remember me
              </label>
            </div>

            <button type="submit" className={styles.button}>
              Sign in
            </button>
            <p className={styles.forgotpassword}>
              Forgot <a href="#">password?</a>
            </p>
          </form>
          <div className="w-full text-center mt-4">
            Need an account?{' '}
            <Link href="/register">
              <a className="text-[#167bff]">Sign Up</a>
            </Link>
          </div>
        </div>
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
