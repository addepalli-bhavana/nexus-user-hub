import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { setUsers } from '../redux/usersSlice'
import { useFetch } from '../hooks/useFetch'
import { getUniqueCompanies, filterUsers } from '../utils/helpers'
import LoadingState from '../components/common/LoadingState'
import ErrorState from '../components/common/ErrorState'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashboardControls from '../components/dashboard/DashboardControls'
import UserGrid from '../components/dashboard/UserGrid'
import CreateUserModal from '../components/user/CreateUserModal'

function Dashboard() {
  const users = useSelector(state => state.users.users)
  const { loading, error } = useFetch('/users', setUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const companies = useMemo(() => getUniqueCompanies(users), [users])
  const filteredUsers = useMemo(
    () => filterUsers(users, searchTerm, selectedCompany),
    [users, searchTerm, selectedCompany]
  )

  if (loading) return <LoadingState />
  if (error) return <ErrorState error={error} />

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <DashboardHeader />

        <DashboardControls 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCompany={selectedCompany}
          onCompanyChange={setSelectedCompany}
          companies={companies}
          onAddUserClick={() => setIsModalOpen(true)}
        />

        <UserGrid users={filteredUsers} />
      </div>

      <CreateUserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Dashboard
