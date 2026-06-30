function ErrorState({ error }) {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-medium">Error loading users</p>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorState
