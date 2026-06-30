import { HiUsers } from 'react-icons/hi'

function EmptyState() {
  return (
    <div className="col-span-full text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <HiUsers className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
      <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
    </div>
  )
}

export default EmptyState
