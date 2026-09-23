"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Framework Error Captured</h1>
      <p style={{ color: 'red' }}><strong>Message:</strong> {error.message}</p>
      <p><strong>Name:</strong> {error.name}</p>
      <pre style={{ background: '#f4f4f4', padding: '10px' }}>{error.stack}</pre>
    </div>
  );
}
