"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error Boundary Caught:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "red" }}>Something went wrong!</h2>
      <div style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
        <p><strong>Message:</strong> {error.message}</p>
        <p><strong>Digest:</strong> {error.digest}</p>
        <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
          {error.stack}
        </pre>
      </div>
      <button
        onClick={() => reset()}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Try again
      </button>
    </div>
  );
}
