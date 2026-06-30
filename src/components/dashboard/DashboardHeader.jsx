function DashboardHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome back</h1>
      </div>
      <p className="text-gray-600 ml-7">Manage and explore your user directory</p>
    </div>
  )
}

export default DashboardHeader
