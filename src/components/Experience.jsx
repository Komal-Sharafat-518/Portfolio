import { motion } from 'framer-motion'

const TIMELINE = [
  {
    period: '2024 — 2028 (ongoing)',
    title: 'B.S. Computer Science (BSCS)',
    org: 'University of Engineering and Technology (UET), Narowal Campus',
   detail: 'CGPA: 3.50/4.00. Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Software Engineering, AI & Emerging Technologies.',
  },
  {
    period: '2025 — 2026',
    title: 'Independent Software & AI Automation Projects',
    org: 'Self-directed',
    detail: 'Designed and built AI-powered applications and automation workflows, including an AI voice receptionist and an AI productivity platform, deployed and maintained via GitHub and Vercel.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 border-t border-line/30">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
          04 / Experience
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
          Timeline
        </h2>

        <div className="relative pl-8 border-l border-line/40 flex flex-col gap-12">
          {TIMELINE.map((t) => (
            <motion.div
              key={t.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="relative"
            >
              <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-signal" />
              <p className="font-mono text-xs text-muted tracking-widest mb-1">{t.period}</p>
              <h3 className="font-display text-xl font-semibold text-ink">{t.title}</h3>
              <p className="font-mono text-sm text-signal mb-2">{t.org}</p>
              <p className="text-muted">{t.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
