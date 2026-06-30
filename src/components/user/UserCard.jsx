import { useNavigate } from 'react-router-dom'
import { HiMail, HiPhone, HiArrowRight } from 'react-icons/hi'
import { getInitials } from '../../utils/helpers'

function UserCard({ user }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/users/${user.id}`)
  }

  return (
    <div 
      onClick={handleClick}
      className="group relative bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Header with Avatar and Company Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold text-lg">
              {getInitials(user.name)}
            </span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            {user.company.name}
          </span>
        </div>

        {/* User Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {user.name}
        </h3>
        
        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <HiMail className="w-4 h-4 mr-3 text-gray-400" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <HiPhone className="w-4 h-4 mr-3 text-gray-400" />
            <span className="truncate">{user.phone}</span>
          </div>
        </div>

        {/* View Details Link */}
        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
          <span>View Profile</span>
          <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}

export default UserCard
