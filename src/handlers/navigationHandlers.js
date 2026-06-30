// Navigation event handlers

export const handleBackToDashboard = (navigate) => () => {
  navigate('/')
}

export const handleNavigateToUser = (navigate) => (userId) => {
  navigate(`/users/${userId}`)
}
