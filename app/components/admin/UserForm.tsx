import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

import { dummyData } from '../../../public/assets/data/UserData';

const UserForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const usersPerPage = 10;

  const filteredData = dummyData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredData.length / usersPerPage);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery, currentPage]);

  return (
    <div className="w-full max-w-7xl mx-auto p-2 bg-background dark:bg-gray-800">
      <div className="p-2 z-10">
        <div className="flex flex-wrap justify-between items-center gap-4 pb-10">
          <h2 className="text-lg md:text-2xl font-bold text-textPrimary dark:text-white">
            Registered Users List
          </h2>
          <div className="flex items-center w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by Name or Email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-8 pr-4 border border-secondary dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <>
          <table className="hidden lg:block table-auto w-full text-sm md:text-base divide-gray-300 dark:divide-gray-600 rounded-lg overflow-hidden">
            <thead className="bg-teritory dark:bg-gray-700 text-textSecondary dark:text-white">
              <tr>
                <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                <th className="p-2 text-left w-[20%]">Name</th>
                <th className="p-2 text-left w-[25%]">Email</th>
                <th className="p-2 text-left w-[15%]">Course</th>
                <th className="p-2 text-left w-[10%]">Score</th>
                <th className="p-2 text-left w-[15%]">Registration Date</th>
              </tr>
            </thead>
          </table>
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin w-8 h-8 border-4 bg-background dark:bg-gray-800 lg:m-40 border-primary border-t-transparent rounded-full"></div>
          </div>
        </>
      ) : filteredData.length === 0 ? (
        <>
          <table className="hidden lg:block table-auto w-full text-sm md:text-base divide-y divide-gray-300 dark:divide-gray-600 rounded-lg overflow-hidden">
            <thead className="bg-teritory dark:bg-gray-700 text-textSecondary dark:text-white">
              <tr>
                <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                <th className="p-2 text-left w-[20%]">Name</th>
                <th className="p-2 text-left w-[25%]">Email</th>
                <th className="p-2 text-left w-[15%]">Course</th>
                <th className="p-2 text-left w-[10%]">Score</th>
                <th className="p-2 text-left w-[15%]">Registration Date</th>
              </tr>
            </thead>
          </table>
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-300 text-center">
              No data available to display
            </p>
          </div>
        </>
      ) : (
        <div className="bg-teritory dark:bg-gray-700 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm md:text-base divide-y divide-gray-300 dark:divide-gray-600">
              <thead className="bg-white dark:bg-gray-700 text-textSecondary dark:text-white">
                <tr>
                  <th className="p-4 pl-4 text-left w-[5%]">No.</th>
                  <th className="p-2 text-left w-[20%]">Name</th>
                  <th className="p-2 text-left w-[25%]">Email</th>
                  <th className="p-2 text-left w-[15%]">Course</th>
                  <th className="p-2 text-left w-[10%]">Score</th>
                  <th className="p-2 text-left w-[15%]">Registration Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                {currentUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-600 text-start whitespace-nowrap text-textSecondary dark:text-white"
                  >
                    {user.id && <td className="p-2 pl-4">{user.id}.</td>}
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">
                      <span
                        data-tooltip-id={`tooltip-${user.id}`}
                        data-tooltip-content={user.email}
                        className="truncate w-48 block overflow-hidden text-ellipsis cursor-pointer"
                      >
                        {user.email}
                      </span>
                      <Tooltip
                        id={`tooltip-${user.id}`}
                        place="bottom"
                        className="text-sm text-gray-700 dark:text-gray-300"
                      />
                    </td>
                    <td className="p-2">{user.course}</td>
                    <td className="p-2">{user.score}</td>
                    <td className="p-2">{user.registrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredData.length > 0 && (
        <div className="flex flex-wrap justify-between items-center mt-12 text-sm gap-4">
          <div className="flex-shrink-0">
            <p className="text-textPrimary dark:text-white">
              Showing {usersPerPage} users of {filteredData.length}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 md:px-3 py-1 rounded-md ${currentPage === 1
                ? "bg-teritory text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
                : "bg-teritory text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                }`}
            >
              &lt;
            </button>
            <button
              onClick={() => handlePageChange(1)}
              className={`px-2 md:px-3 py-1 rounded-md ${currentPage === 1
                ? "bg-primary text-white"
                : "bg-white text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                }`}
            >
              1
            </button>
            {currentPage > 6 && (
              <span className="px-2 text-textPrimary dark:text-white">...</span>
            )}
            {[...Array(6)]
              .map((_, index) => currentPage - 1 + index)
              .filter((page) => page > 1 && page < totalPages)
              .map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-2 md:px-3 py-1 rounded-md ${currentPage === page
                    ? "bg-primary text-white"
                    : "bg-white text-textPrimary hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                    }`}
                >
                  {page}
                </button>
              ))}
            {currentPage < totalPages - 5 && (
              <span className="px-2 text-gray-600 dark:text-gray-300">...</span>
            )}
            {totalPages > 1 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`px-2 md:px-3 py-1 rounded-md ${currentPage === totalPages
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                  }`}
              >
                {totalPages}
              </button>
            )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-2 md:px-3 py-1 rounded-md ${currentPage === totalPages
                ? "bg-teritory text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
                : "bg-teritory text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary"
                }`}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
