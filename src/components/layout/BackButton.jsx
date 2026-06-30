import { HiChevronLeft } from 'react-icons/hi'

function BackButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="mb-6 inline-flex items-center text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
    >
      <HiChevronLeft className="w-5 h-5" />
      Back to Dashboard
    </button>
  )
}

export default BackButton
