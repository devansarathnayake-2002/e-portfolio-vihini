"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Link as LinkIcon,
  Menu,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const student = {
  name: "Rathnayake Mudiayanselage Vihini Devansa",
  shortName: "Vihini Devansa",
  studentId: "AS/2021/027",
  degree: "Bachelor of Business Management Honours in Accounting Information Systems",
  university:
    "Department of Accountancy, Faculty of Commerce and Management Studies, University of Kelaniya",
  company: "Centrics Business Solutions (Pvt) Ltd.",
  internshipRole: "Support and Implementation Intern",
  department: "Implementation Team",
  period: "6 months",
  supervisor: "Radha Perera",
  email: "devansarathnayake@gmail.com",
  statement:
    "During my 6-month internship at Centrics Business Solutions (Pvt) Ltd. as a Support and Implementation Intern, I gained practical experience in customer support, ERP implementation support, system testing, documentation, and professional communication. This e-portfolio presents my workplace learning journey and shows how I developed key professional skills such as communication, teamwork, punctuality, leadership, emotional intelligence, and responsibility.",
};

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Tasks", href: "#tasks" },
  { label: "Skills", href: "#skills" },
  { label: "Evidence", href: "#evidence" },
];

const profilePoints = [
  {
    icon: Briefcase,
    title: "About My Internship",
    detail:
      "I completed my internship at Centrics Business Solutions (Pvt) Ltd. as a Support and Implementation Intern. This internship allowed me to work in a professional technology and business systems environment where I could understand how customer support, ERP implementation, testing, and documentation are handled in real workplace situations.",
  },
  {
    icon: Users,
    title: "My Role at Centrics",
    detail:
      "My role involved analyzing customer-reported issues, testing ERP system configurations, preparing issue summaries, supporting implementation-related activities, communicating with customers, and coordinating with internal technical teams when required.",
  },
  {
    icon: Sparkles,
    title: "What I Learned",
    detail:
      "This internship helped me understand the connection between business processes and information systems. I learned that a professional support and implementation role requires not only technical understanding, but also communication skills, patience, responsibility, teamwork, and time management.",
  },
];

const keyTasks = [
  {
    title: "Customer Support Ticket Handling",
    description:
      "I supported customer-reported issues by understanding the problem, checking system behaviour, testing possible causes, and communicating updates clearly.",
    skills: "Communication, problem-solving, emotional intelligence, responsibility",
  },
  {
    title: "ERP Configuration Testing",
    description:
      "I tested ERP system configurations to check whether the system worked according to customer requirements and business process needs.",
    skills: "Attention to detail, technical understanding, punctuality, teamwork",
  },
  {
    title: "Documentation Preparation",
    description:
      "I prepared documents explaining issues, solutions, configuration steps, pending items, and customer support updates.",
    skills: "Written communication, impression management, responsibility",
  },
  {
    title: "Customer Communication",
    description:
      "I communicated with customers using professional messages and emails to provide updates, request confirmations, and explain solutions.",
    skills: "Professional communication, patience, emotional intelligence",
  },
  {
    title: "Implementation Support",
    description:
      "I supported implementation-related activities by assisting with system setup, testing business flows, and coordinating with relevant teams.",
    skills: "Teamwork, leadership, time management, problem-solving",
  },
];

const skillAreas = [
  {
    title: "Personality Development",
    level: 88,
    summary:
      "I improved my confidence and responsibility by learning and practicing Odoo modules such as Purchase, Sales, CRM, Inventory, and POS. I also became more independent in completing assigned tasks.",
    evidence: [
      { label: "Timesheets", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
      { label: "Customer issue screenshots", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
      { label: "Email/message samples", url: "https://drive.google.com/drive/folders/1ZJoqDCx4evrfuB_sI5IQCQGXnXG6Yr7l?usp=sharing" },
    ],
  },
  {
    title: "Impression Management",
    level: 86,
    summary:
      "I improved my professional image by learning how to communicate politely with customers, supervisors, and technical support teams. I prepared clear updates, replies, and documents related to customer issues.",
    evidence: [
      { label: "Email/message screenshots", url: "https://drive.google.com/drive/folders/1ZJoqDCx4evrfuB_sI5IQCQGXnXG6Yr7l?usp=sharing" },
      { label: "Support ticket screenshots", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
      { label: "Timesheets", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
    ],
  },
  {
    title: "Punctuality",
    level: 90,
    summary:
      "I maintained timesheet records and completed assigned tasks such as testing, documentation, training, and customer issue follow-ups within the given time.",
    evidence: [
      { label: "Timesheets", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
      { label: "Task records", url: "https://drive.google.com/drive/folders/15YMzj_vMSZD2EwguqiM93EgH0rU9zYeg?usp=sharing" },
      { label: "Work logs", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
    ],
  },
  {
    title: "Leadership",
    level: 82,
    summary:
      "When my supervisor was busy, I took responsibility for customer-related issues by checking the issue, communicating with the relevant team, and following up until the next action was confirmed.",
    evidence: [
      { label: "Timesheets", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
      { label: "Customer issue screenshots", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
      { label: "Support ticket records", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
    ],
  },
  {
    title: "Teamwork",
    level: 87,
    summary:
      "I worked with supervisors, internal team members, and Odoo Technical Support to solve customer issues and complete support-related work.",
    evidence: [
      { label: "Support communication screenshots", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
      { label: "Timesheets", url: "https://drive.google.com/drive/folders/1TrHrof43tynuVggWGF2betaEmpwUWdeq?usp=sharing" },
    ],
  },
  {
    title: "Emotional Intelligence",
    level: 85,
    summary:
      "I learned to stay calm and professional when dealing with customer issues, pending technical problems, and feedback from the technical team. I understood the importance of replying politely even when issues were not fully solved.",
    evidence: [
      { label: "Customer reply screenshots", url: "https://drive.google.com/drive/folders/1owlPjkC10DHag5jRIbT0R4QFoP8eVQuA?usp=sharing" },
      { label: "Support communication", url: "https://drive.google.com/drive/folders/15YMzj_vMSZD2EwguqiM93EgH0rU9zYeg" },
      { label: "Issue follow-up records", url: "https://drive.google.com/drive/folders/15YMzj_vMSZD2EwguqiM93EgH0rU9zYeg" },
    ],
  },
  {
    title: "Attitudes & Values",
    level: 88,
    summary:
      "I developed positive attitudes and values by being responsible, respectful, and willing to learn during my internship. I also participated in company activities such as donations, which helped me understand the importance of kindness, teamwork, and social responsibility in the workplace.",
    evidence: [
      { label: "Company activity photos", url: "https://drive.google.com/drive/folders/1nyJt4ijxgixBj1G11KmmXq-J6wX1LGCT?usp=sharing" },
      { label: "Supervisor feedback", url: "https://drive.google.com/drive/folders/1W1RI7wqAB2WaRwedyKOxvtxoMxxVCm5b?usp=sharing" },
    ],
  },
  {
    title: "Cultural Diversity",
    level: 84,
    summary:
      "I experienced cultural diversity by participating in the company’s Awurudu festival. This helped me understand the importance of respecting Sri Lankan cultural traditions, celebrating together as a team, and building good relationships with employees from different backgrounds.",
    evidence: [
      { label: "Awurudu festival photos", url: "https://drive.google.com/drive/folders/1nyJt4ijxgixBj1G11KmmXq-J6wX1LGCT?usp=sharing" },
      { label: "Company event photos", url: "https://drive.google.com/drive/folders/1nyJt4ijxgixBj1G11KmmXq-J6wX1LGCT?usp=sharing" },
    ],
  },
];

const finalReflection = [
  "My internship at Centrics Business Solutions (Pvt) Ltd. helped me understand how ERP systems, customer support, implementation tasks, and business processes are connected in a real workplace. I learned how support and implementation teams communicate with customers, analyze issues, test system functions, and prepare professional documentation.",
  "At the beginning, I faced challenges in understanding some technical issues, using Odoo modules practically, and preparing professional customer replies. However, with guidance and continuous practice, I gradually improved my confidence, communication, responsibility, problem-solving ability, and professional behaviour.",
  "This internship helped me grow as a more confident, responsible, and professional person who is ready to face real workplace challenges. It also gave me practical experience that will support my future career in ERP, business systems, and implementation support.",
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#9a6a00]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-neutral-600">{description}</p>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-2xl font-semibold tracking-tight text-neutral-950">{value}</p>
      <p className="mt-1 text-sm text-neutral-500">{label}</p>
    </div>
  );
}

export default function InternshipEPortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(skillAreas[0]);
  const skillDetailsRef = useRef(null);

  const averageProgress = useMemo(() => {
    const total = skillAreas.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / skillAreas.length);
  }, []);

  const handleSkillSelect = (skill) => {
    setActiveSkill(skill);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        skillDetailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3c64d] text-neutral-950">
              <GraduationCap size={20} />
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${student.email}`}
            className="hidden rounded-full bg-[#f3c64d] px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-[#e7b833] md:inline-flex"
          >
            Contact Student
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-neutral-200 bg-white p-2 md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-neutral-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden px-5 py-20 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[540px] w-[720px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
              <Sparkles size={16} />
              University Internship Skill Development E-Portfolio
            </div>

            <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-neutral-950 sm:text-7xl">
              From Learning to Growth.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{student.statement}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#skills"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                View Skills <ArrowUpRight size={16} />
              </a>
              <a
                href="#evidence"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                View Evidence <LinkIcon size={16} />
              </a>
            </div>
          </div>

          <aside className="mx-auto mt-16 w-full rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-7 text-neutral-950">
              <div className="text-center">
                <p className="text-sm text-neutral-500">Student Information</p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight">{student.shortName}</h2>
                <div className="relative mx-auto mt-5 h-72 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <Image
                    src="/Vihini Devansa.jpeg"
                    alt="Vihini Devansa"
                    fill
                    className="object-cover"
                    sizes="288px"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-3 text-sm text-neutral-950">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Student ID
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{student.studentId}</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Internship Role
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{student.internshipRole}</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Company
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{student.company}</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Duration
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{student.period}</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Contact
                  </p>
                  <p className="mt-1 font-medium text-neutral-900">{student.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <StatCard label="Internship Period" value={student.period} />
              <StatCard label="Key Tasks" value={String(keyTasks.length).padStart(2, "0")} />
              <StatCard label="Skill Areas" value={String(skillAreas.length).padStart(2, "0")} />
              <StatCard label="Avg. Progress" value={`${averageProgress}%`} />
            </div>
          </aside>
        </div>
      </section>

      <section id="profile" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Internship profile"
            title="Internship Profile"
            description="This section explains my internship background, my role at Centrics Business Solutions (Pvt) Ltd., and the professional learning I gained during the 6-month internship period."
          />

          <div className="mt-12 rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">
                  Student Name
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {student.name}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">
                  Degree Program
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{student.degree}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">
                  University
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{student.university}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">
                  Department and Supervisor
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {student.department} | {student.supervisor}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {profilePoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#edd48a] bg-[#fff8df] text-neutral-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-950">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{point.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tasks" className="px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Key workplace tasks"
          title="Key Workplace Tasks"
          description="These tasks represent the main workplace activities I was involved in during my internship. Each task helped me develop both technical and professional skills."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {keyTasks.map((task) => (
            <article key={task.title} className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#edd48a] bg-[#fff8df] text-neutral-950">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">{task.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{task.description}</p>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Skills Developed
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{task.skills}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Skill development areas"
          title="Skill Development Areas"
          description="These eight areas reflect the professional skills developed during my internship at Centrics and are supported by suitable evidence from workplace experience."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {skillAreas.map((skill) => (
              <button
                key={skill.title}
                onClick={() => handleSkillSelect(skill)}
                className={`rounded-2xl border p-5 text-left transition ${
                  activeSkill.title === skill.title
                    ? "border-neutral-950 bg-white text-neutral-950 shadow-sm"
                    : "border-neutral-200 bg-neutral-50 text-neutral-900 hover:border-neutral-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium">{skill.title}</h3>
                  <span className="text-sm opacity-70">{skill.level}%</span>
                </div>
              </button>
            ))}
          </div>

          <div ref={skillDetailsRef} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">Selected skill</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
              {activeSkill.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-neutral-600">{activeSkill.summary}</p>

            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-neutral-700">Development progress</span>
                <span className="text-neutral-500">{activeSkill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full rounded-full bg-neutral-700" style={{ width: `${activeSkill.level}%` }} />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-neutral-950">Suggested evidence</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {activeSkill.evidence.map((item, index) => (
                  <div
                    key={`${activeSkill.title}-${item.label}-${index}`}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
                  >
                    <CheckCircle2 className="mb-3 text-neutral-950" size={18} />
                    <p>{item.label}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-neutral-950"
                    >
                      View Evidence <ArrowUpRight size={13} />
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-500">Supervisor Confirmation: To be added</p>
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Evidence and reflection"
          title="Evidence & Reflection"
          description="This section provides access to the complete evidence folder, supervisor feedback, final reflection, and important confidentiality notes."
        />

        <div className="mx-auto mt-12 max-w-7xl space-y-12">
          <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9a6a00]">
              Complete Evidence Folder
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
              Complete Evidence Folder
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              All supporting evidence files are organized in Google Drive, including timesheets, screenshots, documents, communication samples, videos, supervisor feedback, and final reflection.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1L-0U96CxlK8YeoVHcGBV0b_R9v2oBDNH?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-950"
            >
              View Full Evidence Folder <ArrowUpRight size={15} />
            </a>
          </article>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9a6a00]">
                  Supervisor Feedback
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
                  Supervisor Feedback / Attestation
                </h3>
              </div>

              <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <p className="text-sm leading-7 text-neutral-600">
                  Supervisor feedback will be added to confirm my internship participation, task involvement, professional behaviour, and skill development during my internship at Centrics Business Solutions (Pvt) Ltd.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">Supervisor Name</p>
                    <p className="mt-2 text-sm text-neutral-700">Radha Perera</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">Designation</p>
                    <p className="mt-2 text-sm text-neutral-700">To be added</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">Company</p>
                    <p className="mt-2 text-sm text-neutral-700">Centrics Business Solutions (Pvt) Ltd.</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">Feedback</p>
                    <p className="mt-2 text-sm text-neutral-700">To be added after supervisor confirmation</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9a6a00]">Signature / Confirmation</p>
                    <p className="mt-2 text-sm text-neutral-700">To be added</p>
                  </div>
                </div>
              </article>
            </div>

            <div>
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9a6a00]">
                  Final Reflection
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
                  Final Reflection
                </h3>
              </div>

              <article className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="space-y-5 text-sm leading-7 text-neutral-600">
                  {finalReflection.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-neutral-950">Skill Development E-Portfolio</p>
            <p className="mt-1 text-sm text-neutral-500">Prepared for university internship assessment.</p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-sm text-neutral-600">
              {student.shortName} · {student.internshipRole} · {student.company}
            </p>
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-full bg-[#f3c64d] px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-[#e7b833]"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
