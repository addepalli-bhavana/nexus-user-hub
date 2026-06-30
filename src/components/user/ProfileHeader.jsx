import { HiMail, HiPhone, HiGlobe } from 'react-icons/hi'
import { getInitials } from '../../utils/helpers'

function ProfileHeader({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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
            <h1 className="sm:text-2xl font-bold text-gray-900 mb-1">{user.name}</h1>
            <p className="text-lg text-gray-500">@{user.username}</p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <HiMail className="w-5 h-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
              <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
              <HiPhone className="w-5 h-5 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Phone</p>
              <p className="text-sm font-medium text-gray-900 truncate">{user.phone}</p>
            </div>
          </div>

          {user.website && (
            <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
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
  )
}

export default ProfileHeader
