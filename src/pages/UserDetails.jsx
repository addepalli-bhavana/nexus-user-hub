import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserDetails() {
  const { id } = useParams()
  const users = useSelector(state => state.users.users)
  const user = users.find(u => u.id === parseInt(id))

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>User not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            ← Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">
                {getInitials(user.name)}
              </span>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 text-lg mt-1">@{user.username}</p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✉️</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <span className="mr-2">📞</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Phone</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                </div>

                {user.website && (
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">🌐</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Website</p>
                      <p className="font-medium text-blue-600">{user.website}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-500">Additional details will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
