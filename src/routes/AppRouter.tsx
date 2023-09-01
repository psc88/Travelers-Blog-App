import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeBlog, AdminPublication, DetailPublication, CreateUser, LoginUser, EditPublication } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeBlog />} />
      <Route path="/admin" element={<AdminPublication />} />
      <Route path="/loginUser" element={<LoginUser />} />
      <Route path="/createUser" element={<CreateUser/>} />
      <Route path="/editPublication/:id" element={<EditPublication/>} />
      <Route path="/detailpublication" element={<DetailPublication />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
