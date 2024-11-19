import React, { useState } from 'react';
import { FaTachometerAlt, FaClipboardList, FaUsers, FaBoxOpen, FaRegCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import MainDashboard from './main_dashboard';
import Plans from './plans';
import Users from './users';
import Jobs from './jobs';
import Subscriptions from './subscriptions';
import Payments from './payments';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('users');

  const renderSection = () => {
    switch (activeSection) {
      case 'main_dashboard':
        return <MainDashboard />;
      case 'plans':
        return <Plans />;
      case 'users':
        return <Users />;
      case 'jobs':
        return <Jobs />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'payments':
        return <Payments />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white">
        <h2 className="p-4 text-xl font-bold text-center border-b border-blue-500">Admin Dashboard</h2>
        <nav className="mt-4">
          <button
            onClick={() => setActiveSection('main_dashboard')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'main_dashboard' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setActiveSection('plans')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'plans' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaClipboardList className="mr-3" /> Plans
          </button>
          <button
            onClick={() => setActiveSection('users')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'users' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaUsers className="mr-3" /> Users
          </button>
          <button
            onClick={() => setActiveSection('jobs')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'jobs' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaBoxOpen className="mr-3" /> Jobs
          </button>
          <button
            onClick={() => setActiveSection('subscriptions')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'subscriptions' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaRegCreditCard className="mr-3" /> Subscriptions
          </button>
          <button
            onClick={() => setActiveSection('payments')}
            className={`flex items-center w-full px-4 py-3 text-left ${
              activeSection === 'payments' ? 'bg-blue-500' : 'hover:bg-blue-700'
            }`}
          >
            <FaMoneyBillWave className="mr-3" /> Payments
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
