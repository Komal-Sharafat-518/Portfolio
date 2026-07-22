import { motion } from 'framer-motion'

const CERTS = [
  {
    title: 'Basics of Python',
    issuer: 'UniAthena, in partnership with Cambridge International Qualifications, UK',
    note: 'Blockchain-verified · July 2025',
    link: '/certificates/python-basics.pdf',
  },
  {
    title: 'Graphic Designing — Batch IV',
    issuer: 'Codator · Qualified as Beginner Graphic Designer',
    link: '/certificates/graphic-designing.png',
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'Codator — for contributions as a society member',
    link: '/certificates/appreciation.png',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 border-t border-line/30">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
          05 / Certifications
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
          Certificates &amp; recognition
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid sm:grid-cols-3 gap-5"
        >
          {CERTS.map((c) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              variants={item}
              whileHover={{ y: -4 }}
              className="block border border-line/50 rounded-lg p-6 hover:border-signal/60 transition-colors"
            >
              <span className="font-mono text-xs text-signal">◆</span>
              <h3 className="font-display text-lg font-semibold text-ink mt-3">
                {c.title}
              </h3>
              <p className="font-mono text-xs text-muted mt-2">{c.issuer}</p>
              {c.note && <p className="font-mono text-[11px] text-signal/80 mt-2">{c.note}</p>}
              <p className="font-mono text-[11px] text-muted mt-4 group-hover:text-signal">
                View certificate →
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
