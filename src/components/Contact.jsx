import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-line/30 blueprint-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/95 to-bg pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
          06 / Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6">
          Let's build something.
        </h2>
        <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
          Open to internships and entry-level roles. Reach out — I usually reply within a day.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:komalsharafat0@gmail.com"
            className="font-mono text-sm bg-signal text-bg px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            komalsharafat0@gmail.com
          </a>
          <a
            href="https://github.com/Komal-Sharafat-518"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm border border-line px-6 py-3 rounded hover:border-signal hover:text-signal transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/komal-sharafat-93697538b/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm border border-line px-6 py-3 rounded hover:border-signal hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <footer className="relative mt-24 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Komal Sharafat — still learning, still shipping.
      </footer>
    </section>
  )
}
