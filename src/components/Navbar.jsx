import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">N</span>
            </div>
            <span className="font-semibold text-lg sm:text-xl">Nexus User Hub</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
