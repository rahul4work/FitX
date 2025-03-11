import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Profile from '../components/Profile';
import DailyActivity from '../components/DailyActivity';
import Activitychart from '../components/Activitychart';
import Footer from '../components/Footer';
import MyProfile from '../components/MyProfile';

const Dashboard = () => (
  <div class="flex flex-col-3">
    <Sidebar />
    <div class="">
      <Header />
      <Profile />
      <DailyActivity />
      <Activitychart />
      <Footer />
    </div>
    <MyProfile />
  </div>
);

export default Dashboard;
