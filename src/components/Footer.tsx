export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-950 text-neutral-500 text-center text-sm border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Shoyeb Morshed. All rights reserved.</p>
        <p className="mt-2 text-neutral-600">Built with React, Tailwind CSS, and Motion.</p>
      </div>
    </footer>
  );
}
