import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BOOT_LINES = [
  '$ whoami',
  '> Komal Sharafat — Computer Science Student & Software Developer',
  '$ skills --list',
  '> Web Dev · AI Automation · C++ · Python · Databases',
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      setDone(true)
      return
    }
    const current = BOOT_LINES[lineIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 350)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-32 blueprint-grid overflow-x-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full">
        <div className="mb-8 max-w-xl border border-line/50 rounded-lg bg-panel/50 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line/40 bg-panel/80">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-[11px] text-muted">terminal</span>
          </div>
          <div className="font-mono text-sm md:text-base text-muted p-4 min-h-[110px]">
            {BOOT_LINES.slice(0, lineIndex + (done ? 0 : 1)).map((line, i) => {
              const isCurrent = i === lineIndex && !done
              const text = isCurrent ? line.slice(0, charIndex) : line
              const isOutput = line.startsWith('>')
              return (
                <div key={i} className={isOutput ? 'text-signal' : 'text-muted'}>
                  {text}
                  {isCurrent && <span className="animate-pulse">▌</span>}
                </div>
              )
            })}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 24 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] text-ink"
        >
          Turning ideas into
          <br />
          software that <span className="text-signal">actually works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-muted text-lg"
        >
          Computer Science student building across the stack — web
          applications, C++ &amp; DSA projects, databases, and AI-powered
          automation. Open to internships and entry-level roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="font-mono text-sm bg-signal text-bg px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            View projects →
          </a>
          <a
            href="/resume.pdf"
            className="font-mono text-sm border border-line px-6 py-3 rounded text-ink hover:border-signal hover:text-signal transition-colors"
          >
            Download resume
          </a>
          <span className="ml-2 font-mono text-xs text-muted tracking-widest">
            ↓ SCROLL
          </span>
        </motion.div>
      </div>
    </section>
  )
}