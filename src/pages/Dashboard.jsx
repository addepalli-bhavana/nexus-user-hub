import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../redux/usersSlice'
import api from '../services/api'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import FilterDropdown from '../components/FilterDropdown'

function Dashboard() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-600 mt-1">Manage and explore your user directory</p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm whitespace-nowrap">
              + Add User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
