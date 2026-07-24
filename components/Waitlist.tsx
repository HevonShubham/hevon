"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  LoaderCircle,
  LockKeyhole,
  Mail,
} from "lucide-react";

type FormStatus = "idle" | "submitting" | "error";

export default function Waitlist() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Waitlist submission failed.");
      }

      form.reset();
      router.push("/success");
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setStatus("error");
      setErrorMessage(
        "We could not submit your details. Please try again or email hello@hevon.in.",
      );
    }
  }

  return (
    <section
      id="waitlist"
      className="relative scroll-mt-20 overflow-hidden bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]/12 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">Be the First</p>

        <h2 className="section-title mt-5 text-white">
          Join the HEVON waitlist.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Get product-development updates, early-access information and
          invitations to help shape future flavours.
        </p>

        <form
          name="hevon-waitlist"
          onSubmit={handleSubmit}
          className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-[1fr_1fr_auto]"
        >
          <input type="hidden" name="form-name" value="hevon-waitlist" />

          <input
            type="hidden"
            name="source"
            value="HEVON Website Waitlist"
          />

          <label className="sr-only" htmlFor="waitlist-name">
            Name
          </label>

          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={status === "submitting"}
            placeholder="Your name"
            className="min-h-14 rounded-full border border-white/15 bg-white/6 px-5 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6a00]"
          />

          <label className="sr-only" htmlFor="waitlist-email">
            Email address
          </label>

          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "submitting"}
            placeholder="Email address"
            className="min-h-14 rounded-full border border-white/15 bg-white/6 px-5 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6a00]"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="group min-h-14 rounded-full bg-[#ff6a00] px-7 font-bold text-white shadow-[0_16px_35px_rgba(255,106,0,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(255,106,0,.3)]"
          >
            <span className="inline-flex items-center gap-2">
              {status === "submitting" ? (
                <>
                  <LoaderCircle size={17} className="animate-spin" />
                  Joining
                </>
              ) : (
                <>
                  Join Waitlist
                  <Mail
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </span>
          </button>
        </form>

        {status === "error" && (
          <p role="alert" className="mx-auto mt-4 max-w-xl text-sm text-red-300">
            {errorMessage}
          </p>
        )}

        <div className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={14} />
            Meaningful updates only
          </span>

          <span className="inline-flex items-center gap-1.5">
            <LockKeyhole size={14} />
            Your details stay private
          </span>
        </div>
      </div>
    </section>
  );
}
import {
  CheckCircle2,
  LockKeyhole,
  Mail,
} from "lucide-react";

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative scroll-mt-20 overflow-hidden bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]/12 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">Be the First</p>

        <h2 className="section-title mt-5 text-white">
          Join the HEVON waitlist.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Get product-development updates, early-access information and
          invitations to help shape future flavours.
        </p>

        <form
          name="hevon-waitlist"
          method="POST"
          action="/success"
          data-netlify="true"
          className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-[1fr_1fr_auto]"
        >
          <input type="hidden" name="form-name" value="hevon-waitlist" />

          <input
            type="hidden"
            name="source"
            value="HEVON Website Waitlist"
          />

          <label className="sr-only" htmlFor="waitlist-name">
            Name
          </label>

          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="min-h-14 rounded-full border border-white/15 bg-white/6 px-5 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6a00]"
          />

          <label className="sr-only" htmlFor="waitlist-email">
            Email address
          </label>

          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            className="min-h-14 rounded-full border border-white/15 bg-white/6 px-5 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6a00]"
          />

          <button
            type="submit"
            className="group min-h-14 rounded-full bg-[#ff6a00] px-7 font-bold text-white shadow-[0_16px_35px_rgba(255,106,0,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(255,106,0,.3)]"
          >
            <span className="inline-flex items-center gap-2">
              Join Waitlist
              <Mail
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </button>
        </form>

        <div className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 size={14} />
            Meaningful updates only
          </span>

          <span className="inline-flex items-center gap-1.5">
            <LockKeyhole size={14} />
            Your details stay private
          </span>
        </div>
      </div>
    </section>
  );
}
