
"use client";

import { useState } from "react";

const skills = [
  "Social Media Management",
  "Graphic Design",
  "Email Marketing",
  "Klaviyo",
  "Email Copywriting",
  "HTML Email Templates",
  "Canva",
  "Content Strategy",
  "SEO",
  "Shopify",
  "Campaign Management",
  "Brand Identity",
];

const projects = [
  {
    number: "01",
    category: "SOCIAL MEDIA · BRANDING",
    title: "StyleHeist",
    description:
      "Creating scroll-stopping social content and cohesive brand visuals for a UK fashion brand. From campaign graphics to seasonal promotions, every design is built to engage.",
    tags: ["Social Media", "Graphic Design", "Fashion"],
    icon: "✿",
    color: "from-pink-100 to-rose-100",
    accent: "text-rose-500",
    link: "https://styleheist.co.uk",
  },
  {
    number: "02",
    category: "EMAIL MARKETING · KLAVIYO",
    title: "BeautyHeist",
    description:
      "Designing visually engaging email campaigns, writing conversion-focused copy, and creating promotional experiences for beauty and skincare shoppers.",
    tags: ["Klaviyo", "Email Design", "Copywriting"],
    icon: "♡",
    color: "from-purple-100 to-fuchsia-100",
    accent: "text-purple-500",
    link: "https://beautyheist.co.uk",
  },
  {
    number: "03",
    category: "E-COMMERCE · CREATIVE",
    title: "PetHeist",
    description:
      "Supporting e-commerce marketing through product promotions, social media creatives, engaging campaign concepts, and consistent visual communication.",
    tags: ["E-commerce", "Campaigns", "Creative"],
    icon: "୨୧",
    color: "from-violet-100 to-pink-100",
    accent: "text-violet-500",
    link: "https://petheist.co.uk",
  },
];

const ArrowUpRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Social Media Management",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Saniyah,\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}`
    );

    setSubmitted(true);

    window.location.href = `mailto:hello@saniyahali.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffafd] text-[#30263e] selection:bg-[#f4c7e5] selection:text-[#54285f]">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-pink-200/30 blur-[110px]" />
        <div className="absolute -right-40 top-[30rem] h-96 w-96 rounded-full bg-purple-200/30 blur-[110px]" />
        <div className="absolute left-1/2 top-[75rem] h-80 w-80 -translate-x-1/2 rounded-full bg-rose-100/40 blur-[100px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-[#fffafd]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Saniyah Ali home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 text-lg font-bold text-white shadow-md shadow-pink-200/60 transition-transform group-hover:rotate-6">
              S
            </span>
            <span className="text-base font-extrabold tracking-tight sm:text-lg">
              saniyah<span className="text-[#bd78b8]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#766b80] transition-colors hover:text-[#bd78b8]"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-[#30263e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200/40 transition-all hover:-translate-y-0.5 hover:bg-[#6d4b82]"
            >
              Let&apos;s talk <span className="ml-1">↗</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100 bg-white text-xl md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-pink-100 bg-white/95 px-6 py-5 md:hidden">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#665572] transition-colors hover:bg-pink-50"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:py-24 lg:px-12 lg:py-28"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-2 shadow-sm shadow-pink-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#766580] sm:text-sm">
              Creative mind. Strategic thinking.
            </span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#b77bb4]">
            Hello, lovely internet! <span className="text-lg">✿</span>
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            I&apos;m Saniyah
            <span className="mt-2 block bg-gradient-to-r from-[#dc8fb9] via-[#bd88d4] to-[#8d82d7] bg-clip-text pb-2 text-transparent">
              Ali.
            </span>
            <span className="mt-4 block text-3xl font-bold leading-tight tracking-[-0.035em] text-[#42344f] sm:text-4xl lg:text-[2.8rem]">
              I turn ideas into
              <br />
              <span className="italic text-[#bc82b8]">
                beautiful experiences.
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#81758b] sm:text-lg">
            Social Media Manager, Graphic Designer &amp; Email Marketing
            Specialist. I help brands show up beautifully, connect with their
            audience, and turn creative ideas into meaningful results.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#d88db7] to-[#a78bdb] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-pink-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200/70"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#e9d9eb] bg-white/80 px-7 py-4 text-sm font-bold text-[#5d4b6c] shadow-sm transition-all hover:-translate-y-1 hover:border-[#d5a8d8] hover:bg-pink-50"
            >
              Let&apos;s collaborate <ArrowUpRight />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-[#94869d] sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="text-base text-[#d88db7]">✧</span>
              Creative storytelling
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-pink-300 sm:block" />
            <span className="flex items-center gap-2">
              <span className="text-base text-[#a78bdb]">✧</span>
              Thoughtful design
            </span>
          </div>
        </div>

        {/* Decorative profile card — no image required */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-3 -top-5 h-24 w-24 rounded-[2rem] bg-[#eadbfb] sm:-right-6 sm:-top-8 sm:h-28 sm:w-28" />
          <div className="absolute -bottom-5 -left-4 h-24 w-24 rounded-full bg-[#f8d8e8] sm:-bottom-7 sm:-left-7 sm:h-32 sm:w-32" />

          <div className="relative rounded-[2.5rem] border border-white bg-gradient-to-br from-[#fae8f1] via-[#f6eaff] to-[#e7e1ff] p-3 shadow-2xl shadow-purple-200/50 sm:p-4">
            <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-6 sm:min-h-[470px] sm:p-8">
              <div className="absolute -right-12 top-20 h-48 w-48 rounded-full border border-purple-200/70" />
              <div className="absolute -right-5 top-28 h-32 w-32 rounded-full border border-pink-200/80" />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-pink-200/60 to-purple-200/70 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#9474a6]">
                  The creative edit
                </span>
                <span className="text-2xl text-[#bf8bc3]">✳</span>
              </div>

              <div className="relative py-10 text-center">
                <div className="mx-auto mb-7 flex h-40 w-40 items-center justify-center rounded-full border-[6px] border-white/90 bg-gradient-to-br from-[#f7ccdf] via-[#ebd4fa] to-[#c8c9f9] shadow-xl shadow-purple-200/60 sm:h-48 sm:w-48">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/70 bg-white/25 sm:h-40 sm:w-40">
                    <span className="bg-gradient-to-br from-[#c875ac] to-[#8c77ce] bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-8xl">
                      SA
                    </span>
                  </div>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b27ab2]">
                  A little bit of magic
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#493653] sm:text-4xl">
                  Made with purpose.
                </h2>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#8a7b95]">
                  Thoughtful visuals, engaging stories, and emails that feel
                  personal.
                </p>
              </div>

              <div className="relative grid grid-cols-3 gap-2">
                {[
                  ["♡", "Create"],
                  ["✧", "Connect"],
                  ["✿", "Grow"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/90 bg-white/75 px-2 py-3 text-center shadow-sm"
                  >
                    <span className="block text-xl text-[#bd83bd]">{icon}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#766580]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-5 top-1/3 hidden -translate-x-1/2 rounded-2xl border border-white bg-white/95 p-4 shadow-xl shadow-pink-100/70 sm:block">
            <span className="text-2xl">🎨</span>
            <p className="mt-1 text-xs font-bold text-[#5d4b6c]">
              Made to inspire
            </p>
          </div>

          <div className="absolute -right-2 bottom-16 rounded-2xl border border-white bg-white/95 p-4 shadow-xl shadow-purple-100/70 sm:-right-7">
            <p className="text-xs text-[#94869d]">My creative mantra</p>
            <p className="mt-1 text-sm font-bold text-[#9e73b4]">
              Dream. Design. Deliver. ✨
            </p>
          </div>
        </div>
      </section>

      {/* Marquee-style service strip */}
      <div className="relative z-10 border-y border-pink-100/80 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 py-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#9b83a5] sm:gap-x-12 sm:text-sm">
          <span>Social Media</span>
          <span className="text-[#e2a4ca]">✳</span>
          <span>Graphic Design</span>
          <span className="text-[#c3a0e4]">✳</span>
          <span>Email Marketing</span>
          <span className="text-[#e2a4ca]">✳</span>
          <span>Creative Strategy</span>
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative z-10 scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c183b7]">
              A little about me
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#35283f] sm:text-5xl">
              Creative by
              <span className="block font-serif italic font-medium text-[#bc83b9]">
                nature.
              </span>
              Strategic by
              <span className="block">design.</span>
            </h2>
            <div className="mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-pink-300 to-purple-300" />
            <p className="mt-6 max-w-sm leading-7 text-[#8a7b95]">
              I believe great marketing should look beautiful, sound human,
              and make people feel something.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-8 text-[#776982]">
              I&apos;m Saniyah Ali, a digital creative working at the
              intersection of design, storytelling, and e-commerce marketing.
              I help brands translate their personality into content that
              catches attention and builds meaningful connections.
            </p>
            <p className="leading-8 text-[#8a7b95]">
              My experience spans social media management, campaign design,
              email marketing, copywriting, and e-commerce content. I enjoy
              bringing all these pieces together to create a consistent brand
              experience, from the first social media scroll to the final
              click in an inbox.
            </p>
            <p className="leading-8 text-[#8a7b95]">
              My approach is simple: understand the audience, create with
              intention, and keep improving. Whether it&apos;s a fresh visual
              identity or a thoughtful email campaign, I want every detail to
              have a purpose.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-white p-5 transition-transform hover:-translate-y-1">
                <span className="text-2xl">🌷</span>
                <h3 className="mt-3 font-bold text-[#574361]">
                  Design with feeling
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#8a7b95]">
                  Visuals that reflect your brand and speak to your audience.
                </p>
              </div>
              <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-5 transition-transform hover:-translate-y-1">
                <span className="text-2xl">💌</span>
                <h3 className="mt-3 font-bold text-[#574361]">
                  Marketing with purpose
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#8a7b95]">
                  Campaigns that combine thoughtful messaging with clear goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 scroll-mt-24 bg-gradient-to-br from-[#fcf2f8] via-[#fbf7ff] to-[#f4f0ff] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#bd82b8]">
              My creative toolkit
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#35283f] sm:text-5xl">
              Skills that bring
              <span className="font-serif italic font-medium text-[#b985ca]">
                {" "}ideas to life.
              </span>
            </h2>
            <p className="mt-5 leading-7 text-[#8a7b95]">
              A blend of creative thinking, digital expertise, and marketing
              know-how to help your brand stand out.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`group cursor-default rounded-full border px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index % 4 === 0
                    ? "border-pink-200 bg-white text-[#ad6f9e] hover:bg-pink-100"
                    : index % 4 === 1
                    ? "border-purple-200 bg-white text-[#8d70b3] hover:bg-purple-100"
                    : index % 4 === 2
                    ? "border-fuchsia-200 bg-white text-[#ad78b9] hover:bg-fuchsia-100"
                    : "border-violet-200 bg-white text-[#8475c1] hover:bg-violet-100"
                }`}
              >
                <span className="mr-2 inline-block transition-transform group-hover:rotate-12">
                  ✧
                </span>
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "♡",
                title: "Social Media",
                desc: "Content planning, creative assets, brand voice, and audience engagement.",
              },
              {
                icon: "✿",
                title: "Graphic Design",
                desc: "Campaign banners, promotional graphics, email visuals, and brand consistency.",
              },
              {
                icon: "✉",
                title: "Email Marketing",
                desc: "Klaviyo campaigns, segmentation, copywriting, and custom HTML templates.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white bg-white/80 p-7 shadow-sm shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 text-2xl text-[#b67bb8]">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#493653]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#8a7b95]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#bd82b8]">
                A peek at my work
              </p>
              <h2 className="text-4xl font-black tracking-tight text-[#35283f] sm:text-5xl">
                Selected
                <span className="font-serif italic font-medium text-[#bd82b8]">
                  {" "}projects.
                </span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#8a7b95]">
                A selection of e-commerce brands and creative marketing work
                that reflects my approach to design and digital storytelling.
              </p>
            </div>
            <span className="w-fit rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ae78a9]">
              Creative portfolio · 2026
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#f0e4f0] bg-white shadow-md shadow-purple-100/30 transition-all duration-300 hover:-translate-y-2 hover:border-[#e3c7e8] hover:shadow-2xl hover:shadow-purple-200/40"
              >
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute -left-10 -top-12 h-40 w-40 rounded-full border border-white/70 transition-transform duration-500 group-hover:scale-125" />
                  <div className="absolute -bottom-12 -right-5 h-48 w-48 rounded-full border border-white/70 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute left-8 top-7 text-xs font-bold tracking-widest text-[#8d76a1]/70">
                    PROJECT / {project.number}
                  </div>
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/80 bg-white/60 text-6xl shadow-lg shadow-purple-200/30 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <span className={project.accent}>{project.icon}</span>
                  </div>
                  <span className="absolute bottom-5 right-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8b7798]">
                    Creative work
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[10px] font-extrabold tracking-[0.17em] text-[#b783b5]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-[#44344e]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#897c94]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#faf3fb] px-3 py-1.5 text-[11px] font-semibold text-[#92739f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 flex items-center justify-between border-t border-[#f1e7f2] pt-5 text-sm font-bold text-[#8f6aa4] transition-colors hover:text-[#c47cae]"
                  >
                    Explore brand
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ecdced] transition-all group-hover:border-[#d6b0de] group-hover:bg-[#f9eafa]">
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-[#a192aa]">
            These are selected brand experiences. Detailed case studies and
            campaign screenshots can be added as your portfolio grows.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-24 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-br from-[#fbe8f2] via-[#f7edff] to-[#ecebff] shadow-xl shadow-purple-200/40 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
            <div className="absolute -right-24 -top-16 h-64 w-64 rounded-full border border-white/70" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/70" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/80 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#a477ad]">
                Have a project in mind?
              </span>
              <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-[#3c2d47] sm:text-5xl">
                Let&apos;s make
                <span className="block font-serif italic font-medium text-[#bd83b8]">
                  something lovely.
                </span>
              </h2>
              <p className="mt-6 max-w-md leading-8 text-[#82738e]">
                Have a brand that needs a creative refresh, an email campaign
                that deserves some love, or social content that stands out?
                I&apos;d love to hear about it.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/70 text-xl text-[#bb83b9]">
                    ✉
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#95869d]">
                      Email me
                    </p>
                    <a
                      href="mailto:aliisaniyah@gmail.com"
                      className="mt-1 block break-all text-sm font-bold text-[#66516f] transition-colors hover:text-[#bd83b8]"
                    >
                      aliisaniyah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/70 text-xl text-[#bb83b9]">
                    ✧
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#95869d]">
                      What I can help with
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#66516f]">
                      Design · Social · Email
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white bg-white/65 px-5 py-2.5 text-sm font-semibold text-[#7e668d] transition-colors hover:bg-white"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white bg-white/65 px-5 py-2.5 text-sm font-semibold text-[#7e668d] transition-colors hover:bg-white"
                >
                  Behance ↗
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 p-6 sm:p-10 lg:p-14">
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-[#44344e]">
                Tell me about your project
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#94869d]">
                Fill in a few details and let&apos;s start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#5d4b6c]"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-2xl border border-[#eee1f0] bg-[#fffbff] px-4 py-3.5 text-sm text-[#493653] outline-none transition-all placeholder:text-[#b7a9bf] focus:border-[#ce9bcf] focus:ring-4 focus:ring-pink-100/70"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#5d4b6c]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-2xl border border-[#eee1f0] bg-[#fffbff] px-4 py-3.5 text-sm text-[#493653] outline-none transition-all placeholder:text-[#b7a9bf] focus:border-[#ce9bcf] focus:ring-4 focus:ring-pink-100/70"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#5d4b6c]"
                >
                  What do you need help with?
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full appearance-none rounded-2xl border border-[#eee1f0] bg-[#fffbff] px-4 py-3.5 text-sm text-[#665572] outline-none transition-all focus:border-[#ce9bcf] focus:ring-4 focus:ring-pink-100/70"
                >
                  <option>Social Media Management</option>
                  <option>Graphic Design</option>
                  <option>Email Marketing & Klaviyo</option>
                  <option>Copywriting & Content</option>
                  <option>Complete Creative Package</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#5d4b6c]"
                >
                  Tell me a little more
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="I'd love help with..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-y rounded-2xl border border-[#eee1f0] bg-[#fffbff] px-4 py-3.5 text-sm leading-6 text-[#493653] outline-none transition-all placeholder:text-[#b7a9bf] focus:border-[#ce9bcf] focus:ring-4 focus:ring-pink-100/70"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d88db7] to-[#a78bdb] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200/50 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-200/60"
              >
                {submitted ? "Open email again" : "Send an inquiry"}
                <ArrowUpRight />
              </button>

              <p className="text-center text-xs leading-5 text-[#a192aa]">
                This form opens your email app with your message prepared.
                It does not send or store submissions on a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-pink-100/80 bg-white/70 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <a
            href="#home"
            className="text-lg font-black tracking-tight text-[#44344e]"
          >
            saniyah<span className="text-[#bd83b8]">.</span>
          </a>

          <p className="text-center text-xs text-[#9b8ba4] sm:text-sm">
            © {new Date().getFullYear()} Saniyah Ali. Made with love and a
            little creativity <span className="text-[#d88db7]">♡</span>
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9475a4] transition-colors hover:text-[#c47cae]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
