"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Grameenphone via Brain Station 23",
    role: "Senior Software Engineer",
    date: "Nov 2024 - Present",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led backend development for high-traffic Skitto products supporting millions of users.",
      "Designed scalable APIs, caching layers and resilient background workers.",
      "Mentored junior engineers and improved CI/CD practices.",
    ],
    tech: [
      "NestJs",
      "larvel",
      "MySQL",
      "Redis",
      "ELK",
      "Docker",
      "k8s",
      "RabbitMQ",
    ],
  },
  {
    company: "ORANGE TOOLZ",
    role: "Software Engineer",
    date: "Dec 2023 - Nov 2024",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led the architecture, design, and development of microservices and APIs for Super Local Fans, ensuring scalable and high-performance solutions.",
      "Architected microservices & distributed file processing pipelines for high-volume media.",
      "Integrated multiple payment gateways and automated business workflows.",
      "Owned sprint planning, code reviews and developer mentoring.",
    ],
    tech: [
      "NestJs",
      "Postgres",
      "Prisma",
      "Redis",
      "BigQuery",
      "Stripe",
      "expressjs",
    ],
  },
  {
    company: "GAIN SOLUTION LTD",
    role: "Software Developer",
    date: "Apr 2021 - Nov 2023",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Built GraphQL & REST APIs and serverless Lambdas to streamline operations.",
      "Implemented Lambda services for various job functions, streamlining processes and enhancing efficiency.",
      "Improved CI/CD and optimized database queries for reliability and performance.",
      "Wrote testable, reusable, and efficient code, resulting in high-performing applications that consistently exceeded client expectations.",
    ],
    tech: [
      "NodeJs",
      "GraphQL",
      "MongoDB",
      "Postgres",
      "AWS",
      "Socket.io",
      "Stripe",
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">
                  {exp.role}{" "}
                  <span className="text-gray-500">@ {exp.company}</span>
                </h4>
                <p className="text-sm text-gray-500">
                  {exp.date} • {exp.location}
                </p>
              </div>
              <div className="text-sm text-gray-600">
                {exp.tech.join(" • ")}
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
