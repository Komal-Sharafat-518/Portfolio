import { motion } from 'framer-motion'

const GROUPS = [
  { label: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { label: 'Web', items: ['HTML5', 'CSS3', 'JavaScript'] },
  { label: 'AI & Automation', items: ['AI APIs', 'AI Voice Agents', 'n8n', 'Workflow Automation'] },
  { label: 'Integrations', items: ['API Integration', 'Google Calendar API', 'Gmail API', 'Google Sheets'] },
  { label: 'Data & Tools', items: ['SQLite', 'Git', 'GitHub', 'Vercel', 'Canva'] },
  { label: 'Core CS', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Software Engineering'] },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 border-t border-line/30">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
          02 / Skills
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
          Stack &amp; tools
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid sm:grid-cols-2 gap-8"
        >
          {GROUPS.map((group) => (
            <motion.div key={group.label} variants={item}>
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-3 py-1.5 border border-line/60 rounded text-ink hover:border-signal hover:text-signal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
