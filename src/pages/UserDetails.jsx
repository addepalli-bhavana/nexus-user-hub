import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
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
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">User Not Found</h2>
            <p className="text-gray-600 mb-6">The user you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company</h2>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Company Name</p>
                <p className="font-medium text-gray-900">{user.company.name}</p>
              </div>
              
              {user.company.catchPhrase && (
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Catchphrase</p>
                  <p className="text-gray-700 italic">"{user.company.catchPhrase}"</p>
                </div>
              )}
              
              {user.company.bs && (
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Business</p>
                  <p className="text-gray-700">{user.company.bs}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Address</h2>
            
            <div className="space-y-3">
              {user.address && (
                <>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Street</p>
                    <p className="font-medium text-gray-900">
                      {user.address.street}
                      {user.address.suite && `, ${user.address.suite}`}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">City</p>
                    <p className="text-gray-700">{user.address.city}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Zipcode</p>
                    <p className="text-gray-700">{user.address.zipcode}</p>
                  </div>

                  {user.address.geo && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Coordinates</p>
                      <p className="text-gray-700 font-mono text-sm">
                        <span className="inline-flex items-center">
                          <span className="text-gray-500 mr-1">Lat:</span>
                          {user.address.geo.lat}
                        </span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="inline-flex items-center">
                          <span className="text-gray-500 mr-1">Lng:</span>
                          {user.address.geo.lng}
                        </span>
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
