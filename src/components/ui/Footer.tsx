export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">CA Monk</h4>
          <p>Empowering the next generation of financial leaders.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <p>Blog</p>
          <p>Webinars</p>
          <p>Case Studies</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Platform</h4>
          <p>Job Board</p>
          <p>Practice Tests</p>
          <p>Mentorship</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        © 2026 CA Monk. All rights reserved.
      </div>
    </footer>
  );
}
