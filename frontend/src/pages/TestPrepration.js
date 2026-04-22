import {
  FaAward,
  FaBookReader,
  FaClipboardCheck,
  FaHeadphones,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ieltsImage from "../assets/Ielts.avif";
import toeflImage from "../assets/Toefl.avif";
import pteImage from "../assets/Pte.avif";
import pardeepImage from "../assets/pardeep.jpg";
import trainingCertificateImage from "../assets/trainingcart.jpeg";

const tests = [
  {
    name: "IELTS",
    Icon: FaBookReader,
    accent: "border-l-[#c48a3a]",
    image: ieltsImage,
    description:
      "Focused preparation for Listening, Reading, Writing, and Speaking with practical mock tests, feedback, and score-improvement strategies.",
  },
  {
    name: "TOEFL",
    Icon: FaHeadphones,
    accent: "border-l-[#3f7d73]",
    image: toeflImage,
    description:
      "Step-by-step coaching for the iBT format with guided speaking practice, academic writing support, and timed performance drills.",
  },
  {
    name: "PTE",
    Icon: FaClipboardCheck,
    accent: "border-l-[#4567a8]",
    image: pteImage,
    description:
      "Exam-oriented training with AI-style practice patterns, time management guidance, and repeated simulations for confidence on test day.",
  },
];

const achievements = [
  "15+ years of classroom and exam-training experience",
  "Specialized coaching for IELTS, PTE, and spoken English",
  "Personal attention for weak areas and score improvement",
  "Consistent guidance with mock tests and evaluation support",
];

const useTypewriter = (text, speed = 50) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i += 1;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
};

const TestPreparation = () => {
  const typewriterText = useTypewriter("Test Preparation");

  return (
    <>
      <Helmet>
        <title>Test Preparation - Vertex Study Visa</title>
        <meta
          name="description"
          content="Prepare for IELTS, PTE, and Spoken English with expert guidance at Vertex Study Visa, Kurukshetra. High success rate and personalized coaching."
        />
        <meta
          name="keywords"
          content="IELTS preparation Kurukshetra, PTE coaching, spoken English Kurukshetra, test preparation Kurukshetra, Vertex Study Visa classes"
        />
        <link
          rel="canonical"
          href="https://www.vertexstudyvisa.com/test-preparation"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#eef3f7] to-[#e4edf2] px-6 py-20 font-[Poppins] text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(196,138,58,0.14),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(33,63,95,0.12),_transparent_30%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <div className="grid items-center gap-8 rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_rgba(25,43,63,0.12)] backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
              <img
                src={pardeepImage}
                alt="Mr. Pardeep Kumar"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="inline-flex rounded-full border border-[#c48a3a]/30 bg-[#c48a3a]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b5e21]">
                Academic Leadership
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#19314a] md:text-4xl">
                Meet <span className="text-[#b47a2b]">Mr. Pardeep Kumar</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                <strong>Academic Head, Vertex Study Visa</strong>
                <br />
                With over <strong>15 years of teaching experience</strong>, Mr.
                Pardeep Kumar has guided students through IELTS, PTE, and spoken
                English preparation with a calm, result-focused approach.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                His teaching style combines exam strategy, clear explanations,
                and personal attention so students can build confidence and
                improve performance in a disciplined, practical way.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <blockquote className="mt-6 border-l-4 border-[#b47a2b] pl-4 text-base italic leading-7 text-slate-600">
                "Every student has potential. The right structure, practice,
                and guidance can turn effort into strong results."
                <br />
                <span className="not-italic font-semibold text-[#19314a]">
                  Mr. Pardeep Kumar
                </span>
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#19314a] md:text-5xl">
              {typewriterText}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-8 text-slate-600">
              Structured coaching, credible mentorship, and practical practice
              sessions designed to help students prepare with clarity and
              confidence.
            </p>
          </div>

          <div className="grid gap-8 rounded-[32px] border border-[#d9e1e8] bg-[#0f2236] p-6 text-white shadow-[0_24px_70px_rgba(15,34,54,0.25)] md:grid-cols-[1.05fr_0.95fr] md:p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-[#f1d19a]">
                <FaAward className="text-[#f1d19a]" />
                Training Certificate of Achievement
              </div>
              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Genuine recognition that strengthens student trust
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-200">
                This achievement certificate adds credibility to the training
                profile and helps present Vertex Study Visa in a more authentic
                and professional way. It highlights formal recognition rather
                than making the section feel promotional.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#f1d19a]">
                    Recognition
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Presented as an achievement-focused training credential with
                    a clean institutional feel.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#f1d19a]">
                    Presentation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Balanced colors, spacing, and framing help the certificate
                    look trustworthy and visually polished.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/95 p-4 shadow-2xl">
              <img
                src={trainingCertificateImage}
                alt="Training certificate of achievement"
                className="w-full rounded-[22px] border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>

          <Marquee
            direction="right"
            speed={38}
            pauseOnHover
            gradient
            gradientColor={[236, 242, 247]}
            className="py-2"
          >
            <div className="flex gap-6 px-3">
              {tests.map(({ name, Icon, accent, image, description }) => (
                <div
                  key={name}
                  className={`group w-[320px] overflow-hidden rounded-[28px] border border-slate-200 border-l-4 ${accent} bg-white p-4 shadow-[0_16px_40px_rgba(25,49,74,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(25,49,74,0.16)]`}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-2xl bg-[#eef3f7] p-4 text-[#19314a]">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-[0.16em] text-[#19314a]">
                      {name}
                    </h3>
                  </div>

                  <img
                    src={image}
                    alt={name}
                    className="h-52 w-full rounded-2xl object-cover shadow-md transition duration-300 group-hover:scale-[1.02]"
                  />

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default TestPreparation;
