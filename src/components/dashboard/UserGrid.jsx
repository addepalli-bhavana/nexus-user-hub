import UserCard from '../user/UserCard'
import EmptyState from '../common/EmptyState'

function UserGrid({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {users.length > 0 ? (
        users.map(user => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

export default UserGrid
