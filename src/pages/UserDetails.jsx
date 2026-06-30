import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiChevronLeft, HiExclamation, HiMail, HiPhone, HiGlobe, HiOfficeBuilding, HiLocationMarker } from 'react-icons/hi'

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
              <HiExclamation className="w-8 h-8 text-red-600" />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 inline-flex items-center text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
        >
          <HiChevronLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
          {/* Header Background */}
          <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600" />
          
          <div className="px-6 sm:px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-12 sm:-mt-16">
              {/* Avatar */}
              <div className="relative mb-4 sm:mb-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl border-4 border-white">
                  <span className="text-white font-bold text-3xl sm:text-4xl">
                    {getInitials(user.name)}
                  </span>
                </div>
              </div>

              {/* Name and Username */}
              <div className="sm:ml-6 flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">{user.name}</h1>
                <p className="text-lg text-gray-500">@{user.username}</p>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-100 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-100 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <HiPhone className="w-5 h-5 text-green-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{user.phone}</p>
                </div>
              </div>

              {user.website && (
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-100 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <HiGlobe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Website</p>
                    <p className="text-sm font-medium text-blue-600 truncate">{user.website}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company and Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Company Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                <HiOfficeBuilding className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Company</h2>
            </div>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company Name</p>
                <p className="text-lg font-bold text-gray-900">{user.company.name}</p>
              </div>
              
              {user.company.catchPhrase && (
                <div className="pb-4 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Catchphrase</p>
                  <p className="text-gray-700 italic leading-relaxed">"{user.company.catchPhrase}"</p>
                </div>
              )}
              
              {user.company.bs && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Business</p>
                  <p className="text-gray-700 leading-relaxed">{user.company.bs}</p>
                </div>
              )}
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-4">
                <HiLocationMarker className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Address</h2>
            </div>
            
            <div className="space-y-4">
              {user.address && (
                <>
                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Street</p>
                    <p className="text-gray-900 font-medium">
                      {user.address.street}
                      {user.address.suite && `, ${user.address.suite}`}
                    </p>
                  </div>
                  
                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">City</p>
                    <p className="text-gray-900 font-medium">{user.address.city}</p>
                  </div>
                  
                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Zipcode</p>
                    <p className="text-gray-900 font-medium">{user.address.zipcode}</p>
                  </div>

                  {user.address.geo && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-3">Coordinates</p>
                      <div className="flex items-center justify-around">
                        <div className="text-center">
                          <p className="text-xs text-blue-600 font-medium mb-1">Latitude</p>
                          <p className="text-lg font-bold text-blue-900 font-mono">{user.address.geo.lat}</p>
                        </div>
                        <div className="w-px h-12 bg-blue-200" />
                        <div className="text-center">
                          <p className="text-xs text-blue-600 font-medium mb-1">Longitude</p>
                          <p className="text-lg font-bold text-blue-900 font-mono">{user.address.geo.lng}</p>
                        </div>
                      </div>
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
