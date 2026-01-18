export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">CA MONK</div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a>Tools</a>
          <a>Practice</a>
          <a>Events</a>
          <a>Job Board</a>
          <a>Points</a>
        </nav>

        <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm">
          Profile
        </button>
      </div>
    </header>
  );
}
