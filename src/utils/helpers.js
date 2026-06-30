// Get user initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Get unique companies from users array
export const getUniqueCompanies = (users) => {
  const uniqueCompanies = [...new Set(users.map(user => user.company.name))]
  return uniqueCompanies.sort()
}

// Filter users by search term and company
export const filterUsers = (users, searchTerm, selectedCompany) => {
  return users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCompany = selectedCompany === '' || user.company.name === selectedCompany
    return matchesSearch && matchesCompany
  })
}

// Generate unique ID for new users
export const generateUserId = () => {
  return Date.now()
}
