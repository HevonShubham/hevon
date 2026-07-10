"use client";

import { Check, LoaderCircle, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  {
    name: "Rich Chocolate",
    note: "Deep cocoa and creamy finish",
    tone: "from-[#4b281d] to-[#9b6b52]",
  },
  {
    name: "Vanilla Crème",
    note: "Smooth vanilla with a clean finish",
    tone: "from-[#e9c982] to-[#fff2cf]",
  },
  {
    name: "Strawberry Bliss",
    note: "Bright berry flavour for everyday use",
    tone: "from-[#d87684] to-[#f8d8dc]",
  },
  {
    name: "Mango Burst",
    note: "Tropical, refreshing and vibrant",
    tone: "from-[#e88924] to-[#ffd991]",
  },
  {
    name: "Matcha Power",
    note: "Earthy matcha with a modern profile",
    tone: "from-[#69833c] to-[#dce8a7]",
  },
];

type FormStatus = "idle" | "submitting" | "error";

export default function Vote() {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0].name);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("flavour", selected);

    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hello@hevon.in",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Vote submission failed.");
      }

      form.reset();
      router.push("/success");
    } catch (error) {
      console.error("Vote submission error:", error);

      setStatus("error");
      setErrorMessage(
        "We could not submit your vote. Please try again or email hello@hevon.in.",
      );
    }
  }

  return (
    <section
      id="vote"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Shape What Comes Next</p>

            <h2 className="section-title mt-4">
              Vote for the next HEVON flavour.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
              Coffee Latte is planned first. Your vote will help us understand
              which flavour the community wants us to develop next.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-black/8 bg-[#fff8f2] p-5 shadow-[0_22px_65px_rgba(0,0,0,.06)] sm:p-7"
          >
            <input
              type="hidden"
              name="_subject"
              value={`New HEVON Flavour Vote: ${selected}`}
            />

            <input type="hidden" name="_template" value="table" />

            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for voting for the next HEVON flavour. Your feedback helps us shape what comes next."
            />

            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="source"
              value="HEVON Website Flavour Vote"
            />

            <input type="hidden" name="flavour" value={selected} />

            <div className="grid gap-3 sm:grid-cols-2">
              {options.map((option) => {
                const active = selected === option.name;

                return (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setSelected(option.name)}
                    disabled={status === "submitting"}
                    className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition duration-300 ${
                      active
                        ? "border-[#ff6a00] bg-white shadow-[0_14px_34px_rgba(255,106,0,.12)]"
                        : "border-black/8 bg-white/70 hover:-translate-y-1 hover:bg-white"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    <div
                      className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${option.tone}`}
                    />

                    <div className="flex items-start justify-between gap-3 pl-2">
                      <div>
                        <p className="font-black">{option.name}</p>

                        <p className="mt-1 text-xs leading-5 text-black/45">
                          {option.note}
                        </p>
                      </div>

                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                          active
                            ? "border-[#ff6a00] bg-[#ff6a00] text-white"
                            : "border-black/10 bg-white"
                        }`}
                      >
                        {active ? (
                          <Check size={16} />
                        ) : (
                          <Sparkles size={15} />
                        )}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                disabled={status === "submitting"}
                placeholder="Your email address"
                className="min-h-14 rounded-full border border-black/10 bg-white px-5 outline-none transition focus:border-[#ff6a00] disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="button-primary min-h-14 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <span className="inline-flex items-center gap-2">
                    <LoaderCircle size={17} className="animate-spin" />
                    Submitting
                  </span>
                ) : (
                  "Submit Vote"
                )}
              </button>
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="mt-4 text-sm text-red-600"
              >
                {errorMessage}
              </p>
            )}

            <p className="mt-3 text-xs text-black/38">
              One vote per person. We will only use your email for HEVON
              updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
