import { Login } from "./pages/auth";
import { Dashboard } from "./pages/dashboard";

import {
  LevelManage,
  MemberManage,
  GoodsManage,
  JobManage,
  ProxyManage,
  BrowserManage,
  LoginManage,
  // MachineManage,
  SurfingSiteManage,
  CouponManage,
  BrandManage,
  CouponCategoryManage,
  AdvertisementManage,
  HistoryView,
  LogView,
} from "./pages/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Link } from "react-router-dom";

const AppRoutes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    label: <Link to="/">Dashboard</Link>,
  },
  {
    path: "/level",
    element: (
      <PrivateRoute>
        <LevelManage />
      </PrivateRoute>
    ),
    label: <Link to="/level">Level</Link>,
  },
  {
    path: "/member",
    element: (
      <PrivateRoute>
        <MemberManage />
      </PrivateRoute>
    ),
    label: <Link to="/member">Member</Link>,
  },
  {
    path: "/goods",
    element: (
      <PrivateRoute>
        <GoodsManage />
      </PrivateRoute>
    ),
    label: <Link to="/goods">Goods</Link>,
  },
  {
    path: "/job",
    element: (
      <PrivateRoute>
        <JobManage />
      </PrivateRoute>
    ),
    label: <Link to="/job">Job</Link>,
  },
  {
    path: "/proxy",
    element: (
      <PrivateRoute>
        <ProxyManage />
      </PrivateRoute>
    ),
    label: <Link to="/proxy">Proxy</Link>,
  },
  {
    path: "/browser",
    element: (
      <PrivateRoute>
        <BrowserManage />
      </PrivateRoute>
    ),
    label: <Link to="/browser">Browser</Link>,
  },
  {
    path: "/login",
    element: (
      <PrivateRoute>
        <LoginManage />
      </PrivateRoute>
    ),
    label: <Link to="/login">Login</Link>,
  },

  {
    path: "/surfing",
    element: (
      <PrivateRoute>
        <SurfingSiteManage />
      </PrivateRoute>
    ),
    label: <Link to="/surfing">Surfing</Link>,
  },
  {
    path: "/coupon_category",
    element: (
      <PrivateRoute>
        <CouponCategoryManage />
      </PrivateRoute>
    ),
    label: <Link to="/coupon_category">Coupon Category</Link>,
  },
  {
    path: "/brand",
    element: (
      <PrivateRoute>
        <BrandManage />
      </PrivateRoute>
    ),
    label: <Link to="/brand">Coupon Brand</Link>,
  },
  {
    path: "/coupon",
    element: (
      <PrivateRoute>
        <CouponManage />
      </PrivateRoute>
    ),
    label: <Link to="/coupon">Coupon</Link>,
  },
  {
    path: "/advertisement",
    element: (
      <PrivateRoute>
        <AdvertisementManage />
      </PrivateRoute>
    ),
    label: <Link to="/advertisement">Advertisement</Link>,
  },
  {
    path: "/history",
    element: (
      <PrivateRoute>
        <HistoryView />
      </PrivateRoute>
    ),
    label: <Link to="/history">History</Link>,
  },
  {
    path: "/log",
    element: (
      <PrivateRoute>
        <LogView />
      </PrivateRoute>
    ),
    label: <Link to="/log">Log</Link>,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
];

export default AppRoutes;
