'use client'

import { Button } from '@/components/ui/button'
import { FormEvent, useState } from 'react'
import SectionHeader from '../shared/section-header'

function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const json = await res.json()

      if (!res.ok || !json.success) {
        throw new Error(json.error?.message || 'Failed to send message')
      }

      setStatus({
        type: 'success',
        message: 'Thanks for your message! We will get back to you soon.'
      })
    } catch (error: any) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-17.5" id="contact">
      <div className="app-container max-w-4xl">
        <SectionHeader
          subtitle="Contact Us"
          title={
            <>
              Let&apos;s Build Something <span className="text-primary">Amazing</span> Together
            </>
          }
        />

        <div className="bg-paper mt-10 rounded-3xl p-8 sm:p-12">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background border-paper focus:border-primary w-full rounded-xl border-2 px-4 py-4 text-sm font-medium text-white placeholder-zinc-500 shadow-sm transition-colors outline-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background border-paper focus:border-primary w-full rounded-xl border-2 px-4 py-4 text-sm font-medium text-white placeholder-zinc-500 shadow-sm transition-colors outline-none disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Web Development Project"
                className="bg-background border-paper focus:border-primary w-full rounded-xl border-2 px-4 py-4 text-sm font-medium text-white placeholder-zinc-500 shadow-sm transition-colors outline-none disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="bg-background border-paper focus:border-primary w-full resize-none rounded-xl border-2 px-4 py-4 text-sm font-medium text-white placeholder-zinc-500 shadow-sm transition-colors outline-none disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-background mt-4 inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 px-8.75 py-2 text-sm font-extrabold whitespace-nowrap shadow-xs transition-all duration-300 outline-none hover:bg-transparent hover:text-white focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 lg:ml-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>

            {status && (
              <div
                className={`mt-2 rounded-lg p-4 text-center text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-primary/20 text-primary border-primary/30 border'
                    : 'bg-destructive/20 border-destructive/30 border text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
