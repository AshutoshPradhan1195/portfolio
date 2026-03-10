"use client"
import { HTMLMotionProps, motion } from "motion/react"
import { useState } from "react"


interface ResumeCardsProps extends HTMLMotionProps<"div"> {
    back?: React.ReactNode
}


function ResumeCards({ back, ...props }: ResumeCardsProps) {

    return (
        <motion.div
            className="perspective-none w-full h-full rounded-2xl   text-white  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.24)]  border-white flex items-start justify-center"
            {...props}
        >
            <div className={`md:p-10 p-7 h-full w-full justify-center items-center flex rounded-2xl  text-black`}>
                {back}
            </div>
        </motion.div>
    )
}


interface SectionProps {
    title: string
    children: React.ReactNode
}

function ResumeSection({ title, children }: SectionProps) {
    return (
        <div className=" h-fit">
            <h2 className="text-xl md:text-3xl font-bold tracking-widest uppercase border-b border-gray-300 pb-2 mb-4 ">
                {title}
            </h2>
            {children}
            <hr className="bg-gray-300 text-gray-300" />
        </div>
    )
}

interface ResumeItemProps {
    title: string
    subtitle?: string
    date?: string
    bullets?: string[]
}

function ResumeItem({ title, subtitle, date, bullets }: ResumeItemProps) {
    return (
        <div className="mb-4 h-fit">
            <div className="flex justify-between items-start md:flex-row flex-col">
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    {subtitle && (
                        <p className="text-sm text-gray-600">{subtitle}</p>
                    )}
                </div>
                {date && (
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                        {date}
                    </p>
                )}
            </div>

            {bullets && (
                <ul className="list-disc md:pl-5 mt-2 space-y-1 text-sm">
                    {bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}



function ExperienceBack() {
    return (
        <div className="w-full h-fit  p-2">
            <ResumeSection title="Experience">
                {/* <ResumeItem
                    title="FiveOne"
                    subtitle="Software Developer"
                    date="August 10, 2025 – Present"
                    bullets={[
                        "Developed and maintained a cross-platform mobile application using React Native, delivering a seamless user experience on both Android and iOS while ensuring consistent UI and performance.",
                        "Built and integrated a React-based content and advertisement management platform, enabling administrators to manage app content, promotional banners, and dynamic updates without requiring mobile app redeployments.",
                        "Designed and consumed RESTful APIs to synchronize mobile app data with backend services, enabling real-time content delivery, user interactions, and advertisement updates.",
                        "Optimized mobile performance through efficient API handling, lazy loading of assets, and structured component rendering, resulting in smoother navigation and reduced load times.",
                        "Collaborated across frontend and backend layers to design scalable data flows between the mobile client, web admin dashboard, and backend services, ensuring a consistent and reliable user experience."
                    ]}
                /> */}
                <ResumeItem
                    title="Gunasys"
                    subtitle="Software Developer"
                    date="April 30, 2024 – August 10, 2025"
                    bullets={[
                        "Developed ERP solutions for multiple businesses improving operational efficiency.",
                        "Integrated REST and GraphQL APIs for unified real-time business data.",
                        "Implemented code-splitting and lazy loading for performance optimization.",
                        "Built LLM + RAG pipelines for context-aware ERP assistance."
                    ]}
                />

                <ResumeItem
                    title="Islington College"
                    subtitle="Academic Liaison Officer"
                    date="February 12, 2025 – August 12, 2025"
                    bullets={[
                        "Reduced non-submissions by 35% through structured student follow-ups.",
                        "Managed staff scheduling with zero class cancellations.",
                        "Implemented automated tracking and reminder systems for coursework."
                    ]}
                />

                <ResumeItem
                    title="Fresh KTM"
                    subtitle="Frontend Intern"
                    date="October 30, 2023 – April 30, 2024"
                    bullets={[
                        "Collaborated on system enhancements and improved cross-device UX."
                    ]}
                />
            </ResumeSection>
        </div>
    )
}

function ProjectBack() {
    return (
        <div className="w-full h-fit p-2">

            <ResumeSection title="Projects">
                <ResumeItem
                    title="Microservices Movie Ticket Booking System"
                    subtitle="Distributed Booking Platform"
                    bullets={[
                        "Built modular microservices with secure authentication.",
                        "Implemented service discovery and load-balanced communication.",
                        "Automated seat release and reservation consistency via scheduled jobs.",
                        "Integrated secure payment processing workflows."
                    ]}
                />

                <ResumeItem
                    title="Restaurant Reviews with NLP"
                    subtitle="Intelligent Review Platform"
                    bullets={[
                        "Developed full-stack restaurant review system.",
                        "Implemented sentiment analysis for dynamic rating computation.",
                        "Integrated caching for high-performance read operations.",
                        "Enabled secure role-based access control."
                    ]}
                />

                <ResumeItem
                    title="Animated Image Generator"
                    subtitle="AI-based Image Generation System"
                    bullets={[
                        "Built animated image generation pipeline using deep learning.",
                        "Implemented GAN architecture for face animation.",
                        "Optimized model performance and deployed web-based demo."
                    ]}
                />
            </ResumeSection>
        </div>
    )
}

function EducationBack() {
    return (
        <div className="w-full h-full  p-2">
            <ResumeSection title="Education">
                <ResumeItem
                    title="Islington College"
                    subtitle="BSc (Hons) Computer Science and Information Technology – 1st Class Hons"
                    date="October 2021 – December 2024"
                />

                <ResumeItem
                    title="Rato Bangla School"
                    subtitle="A Levels – 3.4 GPA"
                    date="June 2018 – October 2020"
                />
            </ResumeSection>
        </div>
    )
}

function CertificationsBack() {
    return (
        <div className="w-full h-full  p-2">
            <ResumeSection title="Certifications">
                <ResumeItem
                    title="AWS Academy Cloud Foundations"
                    date="2022"
                />

                <ResumeItem
                    title="AWS Academy Machine Learning Foundations"
                    date="2022"
                />
            </ResumeSection>
        </div>
    )
}



function MeSection() {
    return (
        <div className="w-full h-full p-2">
            <ResumeSection title="Ashutosh Pradhan">
                <div className="mb-4 h-fit flex flex-row ">
                    <div className="flex justify-between items-start ">
                        <div>
                            <h3 className="font-semibold text-xl mb-2">Software Engineer</h3>

                            <p className="text-sm text-gray-600">
                                Results-driven Software Developer with hands-on experience building scalable applications, with goals to deepen my expertise in
                                distributed systems, and AI-driven solutions.
                                Committed to designing high-performance systems with the long-term goal of
                                becoming a skilled software architect that solves complex real-world problems and creates meaningful impact
                            </p>

                        </div>
                    </div>


                </div>
            </ResumeSection>
        </div>
    )
}


function SkillsSection() {
    const [skillToggle, setSkillToggle] = useState<"skills" | "tools">("skills")

    return (
        <div className="w-full h-full p-2">
            <ResumeSection title="Skills & Expertise">

                {/* Toggle */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setSkillToggle("skills")}
                        className={`px-4 py-1 text-sm rounded-full border transition 
                            ${skillToggle === "skills"
                                ? "bg-black text-white"
                                : "bg-white text-black"}`}
                    >
                        Skills
                    </button>

                    <button
                        onClick={() => setSkillToggle("tools")}
                        className={`px-4 py-1 text-sm rounded-full border transition 
                            ${skillToggle === "tools"
                                ? "bg-black text-white"
                                : "bg-white text-black"}`}
                    >
                        Tools
                    </button>
                </div>

                {skillToggle === "skills" ? <SkillsGrid /> : <ToolsGrid />}

            </ResumeSection>
        </div>
    )
}

function SkillsGrid() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-10">

            <SkillGroup
                title="Languages"
                items={["Java", "Python", "C#", "JavaScript"]}
            />

            <SkillGroup
                title="Frontend"
                items={["React.js", "React Native", "Next.js", "Context API", "Vue"]}
            />

            <SkillGroup
                title="Backend"
                items={["Node.js", "FastAPI", "Spring Boot", "Django"]}
            />

            <SkillGroup
                title="Databases"
                items={["PostgreSQL", "MongoDB", "SQLite"]}
            />

            <SkillGroup
                title="Machine Learning"
                items={["TensorFlow", "PyTorch"]}
            />

            <SkillGroup
                title="Methodologies & Architecture"
                items={["Agile", "REST APIs", "Microservices", "GraphQL"]}
            />

        </div>
    )
}


function ToolsGrid() {
    return (
        <div>
            <SkillGroup
                title="Development Tools"
                items={[
                    "Git",
                    "Postman",
                    "Jupyter",
                    "IntelliJ",
                    "Eclipse",
                    "VS Code",
                    "Android Studio",
                    "Anaconda"
                ]}
            />
            <SkillGroup
                title="Cloud & DevOps"
                items={["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)"]}
            />

            <SkillGroup
                title="Auth & Security"
                items={["JWT", "OAuth"]}
            />

            <SkillGroup
                title="Testing"
                items={["JUnit", "PyTest"]}
            />
            <SkillGroup
                title="Operating Systems"
                items={["Windows", "Linux"]}
            />
        </div>
    )
}

interface SkillGroupProps {
    title: string
    items: string[]
}

function SkillGroup({ title, items }: SkillGroupProps) {
    return (
        <div className="mb-6">
            <h3 className="font-semibold mb-3">{title}</h3>
            <div className={`flex flex-col gap-2
            }`}>
                {items.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function TimelineComponent() {
    return (
        <motion.section
            className="grid md:grid-cols-2 grid-cols-1 md:w-[70vw] h-full w-full pt-10 xl:px-10 px-5 gap-10 "
        >
            <ResumeCards
                style={{ gridColumn: "span 2" }}
                back={<MeSection />}
            />
            <ResumeCards
                style={{ gridColumn: "span 2" }}
                back={<ExperienceBack />}
            />

            <ResumeCards
                style={{ gridColumn: "span 2" }}
                back={<ProjectBack />}
            />
            <ResumeCards
                className="lg:col-span-1 col-span-2 perspective-none w-full h-full rounded-2xl   text-white  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.24)]  border-white flex items-start justify-center"
                back={<EducationBack />}
            />
            <ResumeCards
                className="lg:col-span-1 col-span-2 perspective-none w-full h-full rounded-2xl   text-white  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.24)]  border-white flex items-start justify-center"
                back={<CertificationsBack />}
            />

            <ResumeCards
                style={{ gridColumn: "span 2" }}
                back={<SkillsSection />}
            />
        </motion.section>
    )
}