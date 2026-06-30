import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard Page</div>} />
        <Route path="/users/:id" element={<div>User Details Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
