import { HiLocationMarker } from 'react-icons/hi'

function AddressCard({ address }) {
  if (!address) return null

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-4">
          <HiLocationMarker className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Address</h2>
      </div>
      
      <div className="space-y-4">
        <div className="pb-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Street</p>
          <p className="text-gray-900 font-medium">
            {address.street}
            {address.suite && `, ${address.suite}`}
          </p>
        </div>
        
        <div className="pb-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">City</p>
          <p className="text-gray-900 font-medium">{address.city}</p>
        </div>
        
        <div className="pb-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Zipcode</p>
          <p className="text-gray-900 font-medium">{address.zipcode}</p>
        </div>

        {address.geo && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-3">Coordinates</p>
            <div className="flex items-center justify-around">
              <div className="text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">Latitude</p>
                <p className="text-lg font-bold text-blue-900 font-mono">{address.geo.lat}</p>
              </div>
              <div className="w-px h-12 bg-blue-200" />
              <div className="text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">Longitude</p>
                <p className="text-lg font-bold text-blue-900 font-mono">{address.geo.lng}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddressCard
