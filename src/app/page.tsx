import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";
import SendConfirmation from "@/components/SendConfirmation";
import { Suspense } from "react";


export const metadata = {
  title: "Michał Dańko — Portfolio",
  description:
    "Projekty, doświadczenie i kontakt z Michałem Dańko — programistą Unity (C#), front-endu (React/Next.js) oraz Javy.",
};


const FORM_ENDPOINT = "https://formspree.io/f/xpwdgnbj";

const projects = [
  {
    title: "System zamówień restauracyjnych (Laravel)",
    description:
      "Aplikacja dla sieci restauracji umożliwiająca wybór lokalu, dań oraz złożenie zamówienia. Zawiera panel administratora z pełnym wglądem w system i role pracowników ograniczone do własnej restauracji.",
    img: "/1.png",
    repo: "https://github.com/MD20436/laravel",
  },
  {
    title: "Scraper AGD",
    description:
      "Skrypt pobierający i prezentujący urządzenia AGD z wybranych sklepów internetowych.",
    img: "/2.png",
    repo: "https://github.com/MD20436/Projekt_Scraper",
  },
  {
    title: "Robot autonomiczny STM32",
    description:
      "Mały pojazd sterowany mikrokontrolerem STM32F411. Dzięki czujnikowi ultradźwiękowemu HC-SR04 potrafi wykrywać przeszkody i omijać je, a w trybie manualnym pozwala na sterowanie przez Bluetooth.",
    videos: ["/Film_1.mp4", "/Film_2.mp4", "/Film_3.mp4"],
    img: "/robot.png",
    repo: "https://github.com/MD20436/Robot",
  },
  {
    title: "Platforma kursów online (Next.js + Spring)",
    description:
      "Aplikacja tworzona w zespole czteroosobowym. Oferuje rejestrację, logowanie oraz realizację wybranych kursów. Moim zadaniem jest projekt i implementacja front-endu w Next.js.",
    img: "/3.png",
    repo: "https://github.com/Grodelek/course_project",
  },
  {
    title: "Pasjans (React)",
    description:
      "Gra karciana Pasjans zbudowana od podstaw w React. Praca zespołowa (3 osoby); odpowiadałem za logikę gry i jej integrację.",
    img: "/4.png",
    repo: "https://github.com/PosimAndrzej/JWPWAI_Projekt",
  },
  {
    title: "Gra Bullet Hell 3D (Unity)",
    description:
      "Eksperymentalna gra typu bullet-hell 3D stworzona w Unity w celu rozwijania własnych umiejętności. Zawiera jedną mapę oraz prosty system progresji.",
    img: "/5.png",
    repo: "https://github.com/MD20436/UnityGame",
  },
];

export default function Home()
{

  return (
    <main className="scroll-smooth">
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

        <div className="mx-auto max-w-3xl px-6 text-center">
          <Image
            src="/zdj.jpg"
            alt="Michał Dańko — zdjęcie profilowe"
            width={160}
            height={160}
            priority
            className="mx-auto mb-6 rounded-full border-4 border-white/50 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hej, jestem <span className="text-indigo-600">Michał</span> 👋
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            Student programista C#, Java i JavaScript, tworzący projekty w Unity
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#projects">
              <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Moje projekty
              </button>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 dark:text-gray-100"
            >
              Kontakt →
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-3xl px-6 py-16 text-center sm:text-left">
        <h2 className="mb-4 text-3xl font-bold">O mnie</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Jestem młodym, ambitnym studentem IT, który skupia się na programowaniu w językach C#, Java i JavaScript. Tworzę małe projekty w Unity i aktywnie rozwijam swoje umiejętności techniczne poprzez kursy online i certyfikaty.
        </p>
      </section>

      <section id="projects" className="bg-gray-50 py-16 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Wybrane projekty</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Napisz do mnie</h2>

  <Suspense fallback={null}>
    <SendConfirmation />
  </Suspense>

        <form action={FORM_ENDPOINT} method="POST" className="space-y-4 text-left">
          <input
            type="hidden"
            name="_redirect"
            value={
              process.env.NEXT_PUBLIC_BASE_URL
                ? `${process.env.NEXT_PUBLIC_BASE_URL}/?sent=1#contact`
                : "https://twoja-domena.pl/?sent=1#contact"
            }
          />

          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">
              Imię
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="Twoje imię (opcjonalnie)"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="twoj@email.pl"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="message">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:border-zinc-700 dark:bg-zinc-800"
              placeholder="Hej! Chciałbym porozmawiać o…"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Wyślij wiadomość
          </button>
        </form>

        <p className="mt-10 text-gray-600 dark:text-gray-400">…albo znajdź mnie tutaj:</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="https://github.com/MD20436" aria-label="GitHub" className="hover:text-indigo-600">
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
