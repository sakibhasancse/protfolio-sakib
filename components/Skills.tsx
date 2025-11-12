"use client";

const skillBlocks = [
  {
    title: "Languages & Frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "React.js",
      "GraphQL",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Sequelize"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (Lambda, SQS, SNS)", "Docker", "Kubernetes", "Serverless"],
  },
  {
    title: "Testing & Tools",
    items: ["Mocha", "Chai", "Jest", "Git", "SonarQube"],
  },
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <p className="text-sm text-gray-600 mb-4">
        Concise — prioritised for hiring managers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillBlocks.map((block, idx) => (
          <div key={idx} className="p-4 border rounded-lg bg-gray-50">
            <h5 className="font-medium text-sm">{block.title}</h5>
            <div className="mt-2 text-sm text-gray-700 flex flex-wrap gap-2">
              {block.items.map((item, idy) => (
                <span
                  key={idy}
                  className="px-2 py-1 bg-white border rounded text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
