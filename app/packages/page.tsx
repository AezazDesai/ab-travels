import { Suspense } from "react";
import PackagesClient from "./PackagesClient";

export default function PackagesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--cream)]">
          <p className="text-[var(--text-muted)]">Loading packages...</p>
        </div>
      }
    >
      <PackagesClient />
    </Suspense>
  );
}
