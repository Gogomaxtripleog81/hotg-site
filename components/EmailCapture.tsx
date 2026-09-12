"use client"

import { useState } from 'react'
import styles from './EmailCapture.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setLoading(true)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className={styles.capture}>
      <div className={styles.heading}>Be the first to know.</div>
      <div className={styles.sub}>Sign up for release news, production updates, and announcements from the house.</div>
      {submitted ? (
        <div className={styles.success} role="status">You&apos;re on the list. The house is waiting.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" autoComplete="email" required />
            <button className={styles.btn} type="submit" disabled={loading}>{loading ? '…' : 'Notify me'}</button>
          </div>
        </form>
      )}
      <p className={styles.note}>No spam. Unsubscribe whenever you like.</p>
    </div>
  )
}
