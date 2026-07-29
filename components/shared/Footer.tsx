export default function Footer() {
  return (
    <footer className="border-t bg-slate-100 py-10">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <h3 className="text-xl font-bold text-blue-600">
          🔧 FixItNow
        </h3>

        <p className="mt-3">
          Your Trusted Home Service Marketplace.
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} FixItNow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}