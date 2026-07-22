import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 border-t border-line/30">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-widest text-signal mb-4"
        >
          01 / About
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative border border-line/50 rounded-lg p-8 md:p-12"
        >
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-signal" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-signal" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-signal" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-signal" />

          <p className="font-display text-2xl md:text-3xl leading-relaxed text-ink">
            I'm a Computer Science student who builds across the stack — web
            applications, C++ &amp; data structures projects, database
            systems, and AI-powered automation workflows.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            My projects range from an AI voice receptionist for dental
            clinics to a full C++ hostel management system and SQL-driven
            databases. I care about shipping working systems end to end —
            design, development, and deployment. Currently pursuing my BSCS
            and open to internships and entry-level roles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
