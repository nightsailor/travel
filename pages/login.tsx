import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'
import AuthLayout from '../components/AuthLayout'

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
    <AuthLayout title="Voyager - Login">
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
    </AuthLayout>
  )
}
