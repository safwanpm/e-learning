'use client';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { studentPerformanceData } from '../../../public/assets/data/UserData';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ITEMS_PER_PAGE = 4;

const PlatformInsights = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [currentPage, setCurrentPage] = useState(1);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const currentYearData = studentPerformanceData.find(
    (data) => data.year === selectedYear
  )?.subjects || [];
  const totalPages = Math.ceil(currentYearData.length / ITEMS_PER_PAGE);
  const paginatedData = currentYearData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const barData = {
    labels: paginatedData.map((item) => item.month),
    datasets: [
      {
        label: 'React Performance',
        data: paginatedData.map((item) => item.react),
        backgroundColor: 'rgba(37, 99, 235, 0.7)',
      },
      {
        label: 'JavaScript Performance',
        data: paginatedData.map((item) => item.javascript),
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
      },
      {
        label: 'HTML Performance',
        data: paginatedData.map((item) => item.html),
        backgroundColor: 'rgba(250, 204, 21, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teritory dark:bg-gray-800 py-6">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 p-6">
        <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          Student Performance Trend
        </h3>

        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex space-x-2 mt-2">
              {studentPerformanceData.map((data) => (
                <button
                  key={data.year}
                  onClick={() => handleYearChange(data.year)}
                  className={`px-4 py-2 rounded-md ${selectedYear === data.year
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary'
                    }`}
                >
                  {data.year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <h4 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
              Performance Over Time (Subjects)
            </h4>
            <div className="min-h-[40vh]">
              <Bar data={barData} options={options} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <h4 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
              Monthly Breakdown (Subjects)
            </h4>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedData.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between py-4 text-gray-900 dark:text-gray-300"
                >
                  <div>
                    <h5 className="font-semibold">{item.month}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      React: {item.react}%, JavaScript: {item.javascript}%, HTML: {item.html}%
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
              }`}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
              }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformInsights;
