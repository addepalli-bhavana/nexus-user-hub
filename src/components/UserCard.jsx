import { useNavigate } from 'react-router-dom'

function UserCard({ user }) {
  const navigate = useNavigate()

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const handleClick = () => {
    navigate(`/users/${user.id}`)
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">
            {getInitials(user.name)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {user.name}
          </h3>
          
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600 truncate flex items-center">
              <span className="mr-1">✉️</span>
              {user.email}
            </p>
            <p className="text-sm text-gray-600 truncate flex items-center">
              <span className="mr-1">📞</span>
              {user.phone}
            </p>
          </div>

          <div className="mt-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {user.company.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
