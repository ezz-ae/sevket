"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Upload } from "lucide-react";

export function TalentForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[#b8865a]/40 bg-[#b8865a]/10 p-8">
        <CheckCircle2 className="h-6 w-6 text-[#b8865a]" />
        <h2 className="mt-5 font-display text-3xl tracking-[-0.03em] text-white">Your talent note is ready for review.</h2>
        <p className="mt-4 max-w-[58ch] text-sm leading-[1.8] text-white/68">
          The People Office has the information needed to review your note and contact you through the details provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Full name" required />
        <Field label="Email" name="email" type="email" placeholder="name@example.com" required />
        <Field label="Country" name="country" placeholder="Country" />
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
            Review type
          </span>
          <select
            name="reviewType"
            className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors focus:border-[#b8865a]"
          >
            <option>Job</option>
            <option>Partnership</option>
            <option>Investment</option>
            <option>Idea review</option>
          </select>
        </label>
      </div>

      <Field label="What are you good at?" name="strength" placeholder="Operate, design, cook, sell, build, teach..." required />

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
          What do you want to build with Ölmez?
        </span>
        <textarea
          name="build"
          rows={6}
          required
          placeholder="Tell us the specific thing you want to build, improve, open, or contribute."
          className="mt-3 w-full border border-white/10 bg-black/35 px-4 py-3 text-sm leading-[1.7] text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#b8865a]"
        />
      </label>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
          Upload file / portfolio
        </span>
        <div className="mt-3 flex min-h-14 items-center gap-3 border border-white/10 bg-black/35 px-4 text-sm text-white/62">
          <Upload className="h-4 w-4 text-[#b8865a]" />
          <input name="portfolio" type="file" className="w-full text-sm" />
        </div>
      </label>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
      >
        Join the Talent Room
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  defaultValue,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#b8865a]"
      />
    </label>
  );
}
