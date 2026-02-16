import {motion} from "motion/react"
import AppearIn from "../components/motion/AppearIn"


export default function SkillsSection({ id }: { id: number }) {
    return (
        <section className="relative w-full bg-[#0a0a0a] border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="sticky top-0 h-screen flex items-center px-10">
                    <div className="max-w-md">
                        <h1 className="font-timesnewroman text-5xl mb-5">
                            Some Areas of Expertise
                        </h1>

                        <p className="text-gray-400 leading-relaxed">
                            Designing and engineering scalable digital systems —
                            from high-performance frontends to intelligent backend
                            architectures powered by data and AI.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {data.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="sticky top-0 h-screen flex items-center justify-center px-10"
                            style={{ zIndex: index }}

                            viewport={{ amount: 0.7 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-neutral-900 border min-h-[300px] h-[300px] justify-center flex items-start flex-col border-neutral-800 p-12 rounded-2xl max-w-xl shadow-2xl">
                                <h2 className="text-3xl font-timesnewroman mb-6">
                                    {skill.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

const data = [
    {
        title: "Full-Stack Engineering",
        description:
            "I build production-ready applications with clean architecture, scalable backend systems, and intuitive frontend experiences.\n From API design to responsive UI, every layer is engineered for performance, maintainability, and long-term growth.",
    },
    {
        title: "Backend Systems & Microservices",
        description:
            "Designing structured and scalable backend systems using Spring Boot and FastAPI. Experienced in RESTful API development, JWT authentication, role-based authorization, PostgreSQL schema design, Redis caching, CRON jobs, and distributed service communication.",
    },
    {
        title: "AI & Intelligent Systems",
        description:
            "Integrating intelligence into real-world applications through NLP pipelines, LLM + RAG implementations, GAN architectures, and deep learning models such as ResNet. \nFocused on building AI systems that enhance user workflows and business decision-making.",
    },
]
