"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  img?: string;
  video?: string;
  videos?: string[];
  repo: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const mediaList = project.videos?.length
    ? project.videos
    : project.video
    ? [project.video]
    : project.img
    ? [project.img]
    : [];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % mediaList.length);
  const prev = () => setIndex((i) => (i - 1 + mediaList.length) % mediaList.length);

  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative">
        {mediaList[index]?.endsWith(".mp4") ? (
          <video
            key={mediaList[index]}
            controls
            className="aspect-video w-full rounded-md border border-gray-100 dark:border-zinc-700"
          >
            <source src={mediaList[index]} type="video/mp4" />
            Twoja przeglądarka nie obsługuje elementu <code>video</code>.
          </video>
        ) : (
          <Image
            key={mediaList[index]}
            src={mediaList[index]}
            alt={project.title}
            width={640}
            height={360}
            className="rounded-md border border-gray-100 dark:border-zinc-700"
          />
        )}

        {mediaList.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 backdrop-blur hover:bg-white dark:bg-zinc-800/70 dark:hover:bg-zinc-800"
              aria-label="Poprzedni"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 backdrop-blur hover:bg-white dark:bg-zinc-800/70 dark:hover:bg-zinc-800"
              aria-label="Następny"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold group-hover:text-indigo-600">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {project.description}
      </p>
      <div className="mt-4 flex gap-3">
        <Link href={project.repo} className="text-sm underline-offset-4 hover:underline">
          GitHub
        </Link>
      </div>
    </article>
  );
}
