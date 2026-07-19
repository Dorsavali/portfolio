import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/components/layout/MainLayout";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}