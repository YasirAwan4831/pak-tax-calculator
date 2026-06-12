export default function Disclaimer() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
        <p>
          The information provided by Pak Tax Calculator is for general informational purposes only.
          While we strive to keep the tax slabs and calculations accurate and up to date based on
          publicly available FBR data, we make no representations or warranties of any kind.
        </p>
        <p>
          Tax laws in Pakistan are subject to change. The 2026-27 tax slabs are based on proposed
          Finance Bill 2026 and may differ from the final enacted legislation.
        </p>
        <p>
          This tool does not constitute professional tax, legal, or financial advice. Always consult
          a qualified tax advisor or the Federal Board of Revenue (FBR) for official guidance on
          your tax obligations.
        </p>
        <p>
          Pak Tax Calculator and its developers shall not be held liable for any errors, omissions,
          or decisions made based on the information provided by this platform.
        </p>
      </div>
    </div>
  );
}
