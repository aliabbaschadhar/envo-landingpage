export default function FontTest() {
  return (
    <div className="min-h-screen bg-deep-navy text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold font-sans mb-4">
          Geist Sans Font Test (font-sans)
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            This text uses Geist Sans via CSS variable
          </h2>

          <p className="text-lg font-sans">
            This paragraph uses the default sans font, which should now be Geist Sans.
            The font should look modern, clean, and highly readable with excellent spacing.
          </p>

          <div className="font-mono bg-slate-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Code Example (Geist Mono via font-mono):</h3>
            <pre className="text-sm">
              {`function welcomeToEnvo() {
  return {
    message: "Welcome to Envo!",
    fonts: ["Geist Sans", "Geist Mono"],
    status: "loaded"
  };
}`}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="font-bold text-xl mb-2">Geist Sans Weights</h4>
              <div className="space-y-2">
                <p className="font-light">Light (300)</p>
                <p className="font-normal">Normal (400)</p>
                <p className="font-medium">Medium (500)</p>
                <p className="font-semibold">Semibold (600)</p>
                <p className="font-bold">Bold (700)</p>
                <p className="font-extrabold">Extra Bold (800)</p>
                <p className="font-black">Black (900)</p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <h4 className="font-bold text-xl mb-2 font-geist-mono">Geist Mono Weights</h4>
              <div className="space-y-2 font-mono">
                <p className="font-light">Light (300)</p>
                <p className="font-normal">Normal (400)</p>
                <p className="font-medium">Medium (500)</p>
                <p className="font-semibold">Semibold (600)</p>
                <p className="font-bold">Bold (700)</p>
                <p className="font-extrabold">Extra Bold (800)</p>
                <p className="font-black">Black (900)</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-slate-400">
              If you can see this text clearly with modern typography, the Geist fonts are working properly!
            </p>
            <a
              href="/"
              className="inline-block bg-electric-blue hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
