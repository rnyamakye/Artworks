// src/components/Dashboard.tsx
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            User Information
          </h2>
          <p>
            <strong>Display Name:</strong> {currentUser?.displayName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {currentUser?.email}
          </p>
          <p>
            <strong>User ID:</strong> {currentUser?.uid}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Welcome to your dashboard!
          </h2>
          <p className="text-gray-600">
            You have successfully authenticated with Firebase. This is a
            protected route that can only be accessed by authenticated users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
