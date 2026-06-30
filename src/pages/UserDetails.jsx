import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserDetails() {
  const { id } = useParams()
  const users = useSelector(state => state.users.users)
  const user = users.find(u => u.id === parseInt(id))

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

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500 mt-1">User details will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
