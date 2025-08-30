import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkeydqy"; // <-- change this

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setStatus("error");
        setErrMsg(
          json?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrMsg("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
            Contact
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-1 text-sm text-black/60">
            Have a question or an opportunity? Feel free to drop me a message
            below.
          </p>

          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-black/80" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl space-y-4">
          {/* Honeypot (bots only) */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Optional Formspree helpers */}
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          {/* <input type="hidden" name="_template" value="table" /> */}
          {/* <input type="hidden" name="_next" value="https://your-site.com/thanks" /> */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-black/40"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-black/40"
            />
          </div>

          <input
            name="phone"
            placeholder="+61 ..."
            className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-black/40"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="How can I help?"
            className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-black/40"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-green-700">
              Thanks! Your message was sent. I’ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-700">
              {errMsg}
            </p>
          )}
        </form>

        {/* Direct contact info (optional) */}
        <div className="mx-auto mt-6 max-w-xl text-center text-sm text-black/60">
          Prefer email?{" "}
          <a
            href="mailto:fullstackBibek@gmail.com?subject=Portfolio%20Inquiry"
            className="font-medium underline"
          >
            bbekhamal26@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
