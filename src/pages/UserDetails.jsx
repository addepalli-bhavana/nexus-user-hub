import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { handleBackToDashboard } from '../handlers/navigationHandlers'
import UserNotFound from '../components/common/UserNotFound'
import BackButton from '../components/layout/BackButton'
import ProfileHeader from '../components/user/ProfileHeader'
import CompanyCard from '../components/user/CompanyCard'
import AddressCard from '../components/user/AddressCard'

function UserDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const users = useSelector(state => state.users.users)
  const user = users.find(u => u.id === parseInt(id))

  const onBackClick = handleBackToDashboard(navigate)

  if (!user) return <UserNotFound onBackClick={onBackClick} />

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <BackButton onClick={onBackClick} />

        <ProfileHeader user={user} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <CompanyCard company={user.company} />
          <AddressCard address={user.address} />
        </div>
      </div>
    </div>
  )
}

export default UserDetails
