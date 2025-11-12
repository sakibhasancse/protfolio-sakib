"use client";

import Image from "next/image";
import { Github, Linkedin, Code2, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="flex flex-col items-center text-center mt-12 px-4">
      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/sakib.jpeg"
          alt="Sakib Hasan"
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
        Sakib Hasan
      </h1>
      <p className="mt-2 text-lg text-gray-600 font-medium">
        Senior Software Engineer | 5+ Years of Experience
      </p>
      <p className="mt-2 text-sm text-gray-500 max-w-2xl">
        Passionate about building scalable backend systems, clean architecture,
        and efficient solutions. Open to international relocation and remote
        roles.
      </p>

      {/* Social Icons */}
      <div className="mt-5 flex gap-5">
        <a
          href="https://github.com/sakibhasancse"
          target="_blank"
          className="hover:text-indigo-600"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/sakibhasancse"
          target="_blank"
          className="hover:text-indigo-600"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://leetcode.com/sakibhasancse"
          target="_blank"
          className="hover:text-indigo-600"
        >
          <Code2 size={22} />
        </a>
        <a
          href="mailto:cse.sakibhasan@gmail.com"
          className="hover:text-indigo-600"
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Dark mode toggle */}
      {/* {mounted && (
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="mt-5 p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      )} */}
    </section>
  );
}
