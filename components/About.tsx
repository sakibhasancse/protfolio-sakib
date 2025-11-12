
"use client";

export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m a Software Engineer with 5+ years of professional experience
        delivering secure, scalable, and high-quality applications. Skilled in
        backend architecture, API design, and distributed systems, I thrive in
        cross-functional teams that value clean code and reliability.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          NestJS
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          Node.js
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          PostgreSQL
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          Redis
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          Docker
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          Kubernetes
        </span>
      </div>
    </section>
  );
}
