import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'
import { Header } from './login'

export default function Register({}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.outer}>
        <div className={styles.inner}>
          <form>
            <h3 className={styles.title}>Register</h3>

            <div className={styles.formgroup}>
              <label className={styles.formlabel}>First name</label>
              <input
                type="text"
                className={styles.formcontrol}
                placeholder="First name"
              />
            </div>

            <div className={styles.formgroup}>
              <label className={styles.formlabel}>Last name</label>
              <input
                type="text"
                className={styles.formcontrol}
                placeholder="Last name"
              />
            </div>

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

            <button type="submit" className={styles.button}>
              Register
            </button>
            <p className={styles.forgotpassword}>
              Already registered <Link href="/login">log in?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
