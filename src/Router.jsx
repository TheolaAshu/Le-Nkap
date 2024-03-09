import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Index from "./pages/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Index />} />
          <Route path="category" element={<Category />} />
          <Route path="income" element={<Income />} />
          <Route path="expenses" element={<Expense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
