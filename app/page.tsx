'use client';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import UserAnalytics from "./components/user/UserAnalytics";
import CourceAnalutics from "./components/user/CourceAnalutics";
import UpcomingSession from "./components/user/UpcomingSession";
import PerfomanceChart from "./components/user/PerfomanceChart";
import OriginalNav from "./components/OriginalNav";
import Sidebar from "./components/Sidebar";
import UserForm from "./components/admin/UserForm";
import PlatformInsights from "./components/admin/PlatformInsighr";
import CourseManagement from "./components/instructer/CourceManagement";


export default function Home() {
  const role = useSelector((state: RootState) => state.role.role);

  return (
    <div className="min-h-screen">
      <OriginalNav />
      <Sidebar />
      {role === 'admin' ? (
        <div className="mx-4 md:mx-8 md:ms-72 grid grid-cols-1 md:grid-cols-1 gap-4 mt-28 space-y-10">
          <PlatformInsights />
          <UserForm />


        </div>
      ) : role === 'instructor' ? (
        <div className="mx-4 md:mx-8 md:ms-72 grid grid-cols-1 md:grid-cols-1 gap-4 mt-28">
          <CourseManagement />

        </div>
      ) : (
        <div className="mt-28 space-y-2">
          <UserAnalytics />
          <div className="mx-4 md:mx-8  md:ms-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-1 md:mt-0">
            <CourceAnalutics />
            <UpcomingSession />
          </div>
          <div className="mx-4 md:mx-8 md:ms-72 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-1 md:mt-0">
            <PerfomanceChart />
          </div>
        </div>
      )}
    </div>
  );
}
