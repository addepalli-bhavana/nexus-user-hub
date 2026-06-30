import SearchBar from '../ui/SearchBar'
import FilterDropdown from '../ui/FilterDropdown'

function DashboardControls({ 
  searchTerm, 
  onSearchChange, 
  selectedCompany, 
  onCompanyChange, 
  companies,
  onAddUserClick 
}) {
  return (
    <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="w-full sm:w-96">
        <SearchBar value={searchTerm} onChange={onSearchChange} />
      </div>
      <div className="flex gap-3 w-full sm:w-auto">
        <div className="w-full sm:w-64">
          <FilterDropdown 
            value={selectedCompany} 
            onChange={onCompanyChange}
            options={companies}
          />
        </div>
        <button 
          onClick={onAddUserClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm whitespace-nowrap"
        >
          + Add User
        </button>
      </div>
    </div>
  )
}

export default DashboardControls
