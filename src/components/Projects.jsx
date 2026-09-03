import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'PrimeNest Realty — AI Lead System',
    spec: 'AI real estate lead qualification & follow-up',
    description:
      'An AI-powered lead qualification and follow-up system built for a demo real estate agency. Captures leads from a web form, scores them Hot/Warm/Cold with AI, auto-notifies the sales team on hot leads, sends personalized AI-generated follow-up emails, and gives the team a live analytics dashboard with authentication.',
    stack: ['React', 'Supabase', 'PostgreSQL', 'n8n', 'Groq AI', 'Recharts', 'Vercel'],
    code: 'https://github.com/Komal-Sharafat-518/primenest-lead-system',
  },
  {
    title: 'AI Dental Receptionist',
    spec: 'AI voice agent / automation',
    description:
      'An AI-powered voice receptionist for dental clinics — handles incoming calls, understands patient intent, checks appointment availability, and books or reschedules appointments. Integrates with Google Calendar, Gmail, and Sheets to automate the full workflow.',
    stack: ['n8n', 'AI Voice Agent', 'Google Calendar API', 'Gmail API', 'Sheets'],
    demo: 'https://youtu.be/pbgXmAlrj5o',
    demoLabel: 'Watch demo',
    code: 'https://github.com/Komal-Sharafat-518/AI-Dental-Receptionist-Agent',
  },
  {
    title: 'Nova — AI Manager & Planner',
    spec: 'AI productivity platform',
    description:
      'A personal productivity platform combining task management, habit tracking, and daily reflections with an AI chatbot assistant. Includes full user authentication and is deployed live.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Supabase', 'Clerk', 'Vercel'],
    code: 'https://github.com/Komal-Sharafat-518/NOVA',
  },
  {
    title: 'AlgoEscape',
    spec: 'Interactive DSA learning game',
    description:
      'An interactive Data Structures & Algorithms project that turns algorithmic concepts into an engaging, hands-on learning experience — covering sorting, searching, trees, graphs, and shortest-path algorithms.',
    stack: ['C++', 'Data Structures', 'Algorithms', 'Graphs'],
    code: 'https://github.com/Komal-Sharafat-518/AlgoEscape-DSA-Game',
  },
  {
    title: 'Hostel Management System',
    spec: 'C++ desktop application',
    description:
      'A C++-based application built from scratch to manage student records and hostel operations — applying object-oriented design, file handling, and structured data management.',
    stack: ['C++', 'OOP', 'File Handling', 'Data Management'],
    code: 'https://github.com/Komal-Sharafat-518/Hostel-Management-System',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 border-t border-line/30">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
          03 / Projects
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
          Selected work
        </h2>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative border border-line/50 rounded-lg p-6 md:p-8 hover:border-signal/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-mono text-xs text-signal tracking-widest mb-2">
                    {p.spec.toUpperCase()}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {p.title}
                  </h3>
                </div>
                <div className="flex gap-3 font-mono text-xs">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="border border-line px-3 py-1.5 rounded hover:border-signal hover:text-signal transition-colors">
                      {p.demoLabel}
                    </a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer" className="border border-line px-3 py-1.5 rounded hover:border-signal hover:text-signal transition-colors">
                    Code
                  </a>
                </div>
              </div>

              <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] text-muted border border-line/40 rounded px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
