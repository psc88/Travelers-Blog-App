import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeBlog, AdminPublication, DetailPublication, CreateUser, LoginUser, EditPublication } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeBlog />} />
      <Route path="/admin" element={<ProtectedRoute><AdminPublication /></ProtectedRoute>} />
      <Route path="/loginUser" element={<LoginUser />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/editPublication/:id" element={<ProtectedRoute><EditPublication /></ProtectedRoute>} />
      <Route path="/detailpublication/:id" element={<ProtectedRoute><DetailPublication /></ProtectedRoute>} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
