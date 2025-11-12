"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Unite Living — Property & Tenants",
    date: "Apr 2021 - Nov 2023",
    description:
      "Senior service for tenants and property managers. Contributed REST APIs and frontend features as part of a full‑stack team.",
    link: "https://uniteliving.com/",
  },
  {
    title: "Chat with Me",
    date: "Jan 2021 - Feb 2024",
    description:
      "Real-time chat app with messaging, video and audio calls showcasing expertise in real-time multimedia systems.",
    link: "https://github.com/sakibhasancse/ChatWithMe",
  },
  {
    title: "Blog Application (Your Blog)",
    date: "Feb 2021 - Apr 2023",
    description:
      "Dynamic blog platform with publishing and feed features, demonstrating content workflows and CMS patterns.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-white border rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-500">{p.date}</p>
              </div>
              <a href={p.link} className="text-sm font-medium">
                View →
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-700">{p.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
