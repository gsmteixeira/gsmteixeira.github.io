import { Link } from "@chakra-ui/react";
import PublicationsSection from "../components/section/PublicationSection";
import { useState } from "react";
import { RiDownloadFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const MainPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqajvbay";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setIsSending(false);
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setIsSending(false);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setIsSending(false);
      setStatus("error");
    }
  };

  return (
    <>
      <main className="relative min-h-screen bg-[#f3f3f3] text-slate-900">
        {/* CONTEÚDO */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          {/* ========== HERO / INÍCIO ========== */}
          <section
            id="inicio"
            className="min-h-screen flex items-center pt-24 pb-16"
          >
            <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
              {/* Texto */}
              <div className="md:w-1/2 space-y-5">
                <span className="inline-flex items-center rounded-full bg-[#d7dde5]/70 px-4 py-1 text-xs font-medium tracking-wide text-[#1F3A5F]">
                  Astrophysics • Deep Learning • Transients
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-red leading-tight">
                  Gabriel Teixeira
                </h1>

                <h2 className="text-lg md:text-xl font-medium text-[#355C85]">
                  PhD Candidate in Astrophysics &amp; Deep Learning
                </h2>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  I am a PhD candidate in astrophysics working at the
                  intersection of observational cosmology and machine learning.
                  My research focuses on extracting physical insight from large
                  astronomical surveys using deep learning methods, from
                  photometric redshift estimation to the study of transient
                  phenomena and dark siren measurements of the Hubble constant.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#pesquisa"
                    className="inline-flex items-center rounded-full bg-[#1F3A5F] px-5 py-2 text-sm font-medium text-white shadow-md shadow-slate-400/40 hover:bg-[#355C85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355C85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f3f3] transition"
                  >
                    Explore my research
                  </a>

                  <a
                    href="/cv_gabriel_teixeira_.pdf"
                    download
                    className=" inline-flex items-center rounded-full bg-[#1F3A5F] px-5 py-2 text-sm font-medium text-white shadow-md shadow-slate-400/40 hover:bg-[#355C85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355C85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f3f3] transition"
                  >
                    <RiDownloadFill />
                    <span className="ml-2">Download CV</span>
                  </a>

                  <a
                    href="#contato"
                    className="inline-flex items-center rounded-full border border-[#1F3A5F] px-5 py-2 text-sm font-medium text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A5F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f3f3] transition"
                  >
                    Get in touch
                  </a>

                  <a
                    href="https://github.com/gsmteixeira"
                    target="blank"
                    className="inline-flex items-center rounded-full border border-[#1F3A5F] px-5 py-2 text-sm font-medium text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A5F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f3f3] transition "
                  >
                    <FaGithub /> <span className="ml-2">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Foto */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-[#355C85]/20 blur-md" />
                  <img
                    src="/Gabriel.jpg"
                    alt="Portrait of Gabriel Teixeira"
                    className="relative z-10 h-48 w-48 md:h-60 md:w-60 rounded-full object-cover border-4 border-white shadow-lg shadow-slate-500/40"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========== SOBRE ========== */}
          <section id="sobre" className="py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-4">
                  About me
                </h2>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                  I am currently pursuing my PhD in astrophysics at the
                  Brazilian Center for Research in Physics (CBPF), where I work
                  with large photometric surveys and the application of
                  artificial intelligence to astronomical data. My main
                  interests lie in transient astrophysics, cosmology, and the
                  use of deep and probabilistic neural networks to extract
                  robust information from noisy, high–dimensional observations.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Beyond my research, I enjoy collaborating with
                  multidisciplinary teams, contributing to international survey
                  projects, and sharing knowledge through seminars, schools, and
                  courses on machine learning applied to physics.
                </p>
              </div>

              <div className="rounded-2xl bg-white/80 shadow-md shadow-slate-300/40 p-5 md:p-6 space-y-3 border border-[#d7dde5]">
                <h3 className="text-sm font-semibold text-[#355C85] uppercase tracking-wide">
                  Quick profile
                </h3>
                <dl className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-600">Institution:</dt>
                    <dd className="text-right">
                      Brazilian Center for Research in Physics (CBPF)
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-600">Areas:</dt>
                    <dd className="text-right">
                      Astrophysics, Cosmology, Machine Learning
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-600">Keywords:</dt>
                    <dd className="text-right">
                      Transients, Photometric Redshifts, Dark Sirens
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-600">Location:</dt>
                    <dd className="text-right">Rio de Janeiro, Brazil</dd>
                  </div>
                </dl>

                <div className="pt-3">
                  <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Tools &amp; topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Time–domain surveys",
                      "Deep Learning",
                      "Photometric redshifts",
                      "Galaxy surveys",
                      "Gravitational waves",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#d7dde5]/70 px-3 py-1 text-[0.7rem] font-medium text-[#1F3A5F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== PESQUISA ========== */}
          <section id="pesquisa" className="py-16 md:py-20">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-3">
                Research highlights
              </h2>
              <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                My research explores how deep learning can help us understand
                the dynamic and evolving Universe, with a focus on transients,
                cosmological measurements, and large–scale surveys.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <Link
                target="_blank"
                href="https://docs.google.com/presentation/d/1NOfVDREBdzdmehOsKdAatZzRF9_ggk-N9zgAwtuxKEc/edit?slide=id.g2f4637481a6_3_19#slide=id.g2f4637481a6_3_19"
              >
                <article className="group rounded-2xl bg-white/90 border border-[#d7dde5] p-5 shadow-sm shadow-slate-200/70 hover:shadow-md hover:-translate-y-1 transition">
                  <h3 className="text-lg font-semibold text-[#355C85] mb-2">
                    Photometric redshifts with deep and probabilistic models
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    I develop deep learning models to estimate photometric
                    redshifts and their full probability density functions for
                    galaxies observed in wide–field surveys. These models aim to
                    provide accurate and well–calibrated redshift distributions,
                    crucial for cosmological analyses and studies of large–scale
                    structure.
                  </p>
                </article>
              </Link>

              <Link
                target="_blank"
                href="https://docs.google.com/presentation/d/1oH6-Prc0FpF0w5CzGhTPY4DjbPtBjrWPdyC9B-3HS64/edit?slide=id.g38d302a8924_0_4575#slide=id.g38d302a8924_0_4575"
              >
                {/* Card 2 */}
                <article className="group rounded-2xl bg-white/90 border border-[#d7dde5] p-5 shadow-sm shadow-slate-200/70 hover:shadow-md hover:-translate-y-1 transition">
                  <h3 className="text-lg font-semibold text-[#355C85] mb-2">
                    Hunting and characterizing astronomical transients
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    I work on the detection and analysis of astronomical
                    transients, such as supernovae, using time–domain surveys
                    and follow–up observations. I build tools to identify
                    transient candidates, study their light curves and spectra,
                    and connect them to the physical processes behind stellar
                    explosions.
                  </p>
                </article>
              </Link>

              <Link
                target="_blank"
                href="https://docs.google.com/presentation/d/1zP0GZ1FioDBY_M8XplwxDrSd9koj77ur8YUQUATnqOI/edit?slide=id.g2d53fa5499f_0_232#slide=id.g2d53fa5499f_0_232"
              >
                {/* Card 3 */}
                <article className="group rounded-2xl bg-white/90 border border-[#d7dde5] p-5 shadow-sm shadow-slate-200/70 hover:shadow-md hover:-translate-y-1 transition">
                  <h3 className="text-lg font-semibold text-[#355C85] mb-2">
                    Cosmology with dark sirens and large surveys
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    I contribute to measurements of the Hubble constant using
                    gravitational–wave events as dark standard sirens combined
                    with galaxy surveys. By linking machine–learning–based
                    redshift estimates to these events, my work helps constrain
                    the expansion rate of the Universe using independent probes.
                  </p>
                </article>
              </Link>
            </div>
          </section>

          {/* ========== PUBLICAÇÕES ========== */}
          <section id="publicacoes" className="py-16 md:py-20">
            <PublicationsSection />
          </section>

          {/* ========== PALESTRAS ========== */}
          <section id="palestras" className="py-16 md:py-20">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-3">
                Talks, seminars and teaching
              </h2>
              <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                I regularly present my work in seminars and schools, focusing on
                both the astrophysics and the data–science aspects of my
                research.
              </p>
            </div>

            <div className="space-y-4">
              {/* Card talk */}
              <div className="rounded-2xl bg-white/90 border border-[#d7dde5] p-4 md:p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-[#355C85] uppercase mb-1">
                    Seminar
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-900">
                    Deep learning applications in astrophysics
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Overview of how convolutional and recurrent neural networks
                    are used to analyze astronomical images, time–series, and
                    survey data.
                  </p>
                </div>
                <a
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1ccDVIpK0WihZkFVa7ISltKSH15erR7rdmzyB6wH8TyA/edit?slide=id.g38d302a8924_0_4575#slide=id.g38d302a8924_0_4575"
                  className="inline-flex justify-center rounded-full border border-[#355C85] px-4 py-2 text-xs md:text-sm font-medium text-[#355C85] hover:bg-[#355C85] hover:text-white transition"
                >
                  Slides
                </a>
              </div>

              <div className="rounded-2xl bg-white/90 border border-[#d7dde5] p-4 md:p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-[#355C85] uppercase mb-1">
                    Course
                  </p>
                  <p className="text-sm md:text-base font-semibold text-slate-900">
                    Introduction to convolutional neural networks for physics
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Introductory classes on CNNs for students and researchers,
                    connecting core deep learning concepts to real physics
                    problems.
                  </p>
                </div>
                <a
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1gO7wooGmIaoLOQH3qd1LS-nbIHVZfPwGd19QdVHEpLA/edit?slide=id.g371d25442f4_0_779#slide=id.g371d25442f4_0_779"
                  className="inline-flex justify-center rounded-full border border-[#355C85] px-4 py-2 text-xs md:text-sm font-medium text-[#355C85] hover:bg-[#355C85] hover:text-white transition"
                >
                  View material
                </a>
              </div>
            </div>
          </section>

          {/* ========== PROJETOS ========== */}
          <section id="projetos" className="py-16 md:py-20">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-3">
                Projects and collaborations
              </h2>
              <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                I collaborate with survey and analysis teams working on
                wide–field optical imaging, transient searches, and cosmological
                probes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/90 border border-[#d7dde5] p-4 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  Time–domain and transient surveys
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Development of pipelines for transient detection, photometry,
                  and classification, linking survey data to follow–up
                  observations and physical interpretation.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 border border-[#d7dde5] p-4 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  Machine learning for large–scale structure
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Application of deep and probabilistic models to galaxy
                  surveys, enabling improved constraints on cosmology and
                  structure formation.
                </p>
              </div>
            </div>
          </section>

          {/* ========== CONTATO ========== */}
          <section id="contato" className="py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-3">
                  Get in touch
                </h2>
                <p className="text-sm md:text-base text-slate-700 mb-4">
                  If you are interested in collaborations, seminar invitations,
                  or would like to know more about my work, feel free to reach
                  out. I am always open to discussing new ideas at the interface
                  of astrophysics, cosmology, and machine learning.
                </p>

                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-800">
                      Email:{" "}
                    </span>
                    <a
                      href="mailto:teixeira.gsm@gmail.com"
                      className="text-[#355C85] hover:underline"
                    >
                      teixeira.gsm@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Location:{" "}
                    </span>
                    Rio de Janeiro, Brazil
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/90 border border-[#d7dde5] p-5 md:p-6 shadow-sm space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-[#fafafa] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355C85] focus:border-[#355C85]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-[#fafafa] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#355C85] focus:border-[#355C85]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-[#fafafa] px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#355C85] focus:border-[#355C85]"
                    placeholder="How can I help?"
                  />
                </div>

                {/* Mensagens de status */}
                {status === "success" && (
                  <p className="text-xs text-emerald-600">
                    Your message has been sent successfully. Thank you!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-600">
                    Something went wrong while sending your message. Please try
                    again in a moment.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full justify-center rounded-full bg-[#1F3A5F] px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-slate-400/40 hover:bg-[#355C85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355C85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f3f3] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Davi Teixeira – FullStack Developer.
          </footer>
        </div>
      </main>
    </>
  );
};

export default MainPage;
