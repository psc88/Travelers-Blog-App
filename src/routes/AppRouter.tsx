import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeBlog } from '../pages/HomeBlog'
import { AdminPublication } from '../pages/AdminPublication'
import { Authentication } from '../pages/Authentication'
import { DetailPublication } from '../pages/DetailPublication'

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
