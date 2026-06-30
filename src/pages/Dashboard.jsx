import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, addUser } from '../redux/usersSlice'
import api from '../services/api'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import FilterDropdown from '../components/FilterDropdown'
import CreateUserModal from '../components/CreateUserModal'
import { HiUsers } from 'react-icons/hi'

function Dashboard() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await api.get('/users')
        dispatch(setUsers(response.data))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [dispatch])

  const companies = useMemo(() => {
    const uniqueCompanies = [...new Set(users.map(user => user.company.name))]
    return uniqueCompanies.sort()
  }, [users])

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCompany = selectedCompany === '' || user.company.name === selectedCompany
    return matchesSearch && matchesCompany
  })

  const handleAddUser = (newUser) => {
    dispatch(addUser(newUser))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Loader />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-medium">Error loading users</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Modern Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome back</h1>
          </div>
          <p className="text-gray-600 ml-7">Manage and explore your user directory</p>
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="w-full sm:w-96">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-64">
              <FilterDropdown 
                value={selectedCompany} 
                onChange={setSelectedCompany}
                options={companies}
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm whitespace-nowrap"
            >
              + Add User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <HiUsers className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      <CreateUserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  )
}

export default Dashboard
