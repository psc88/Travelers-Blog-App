import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeBlog, AdminPublication, Authentication, DetailPublication } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeBlog />} />
      <Route path="/admin" element={<AdminPublication />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/detailpublication" element={<DetailPublication />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
