"use client";

import { useSearchParams } from "next/navigation";

export default function SendConfirmation() {
  const sent = useSearchParams().get("sent") === "1";
  if (!sent) return null;

  return (
    <p className="mb-8 rounded-md bg-green-100 px-4 py-2 text-green-700 dark:bg-green-900/20 dark:text-green-400">
      Dziękuję za wiadomość! Odpowiem najszybciej, jak to możliwe.
    </p>
  );
}