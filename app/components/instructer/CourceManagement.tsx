import React, { useState } from "react";
import { InstructorCourses } from "@/public/assets/data/UserData";
import { InstructorStudent } from "@/public/assets/data/UserData";
const CourceManagement = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3;
  const totalPages = Math.ceil(InstructorStudent.length / studentsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = InstructorStudent.slice(startIndex, startIndex + studentsPerPage);

  const primaryColor = "#ff9500";

  return (
    <div className="p-8 space-y-6 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Instructor Dashboard
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {InstructorCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700"
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: primaryColor }}
            >
              {course.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Students Enrolled: <span className="font-medium">{course.students}</span>
            </p>
            <div className="relative w-full h-2 rounded bg-gray-200 dark:bg-gray-700 mb-4">
              <div
                className="absolute h-2 rounded"
                style={{ width: `${course.progress}%, backgroundColor: primaryColor` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Progress: <span className="font-medium">{course.progress}%</span>
            </p>
            <button
              className="w-full py-2 text-white font-medium rounded hover:bg-opacity-90 transition"
              style={{ backgroundColor: primaryColor }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Track Student Progress
        </h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
          {currentStudents.map((student) => (
            <div key={student.id} className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src='/assets/image/profile.png'
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {student.course}
                  </p>
                </div>
              </div>
              <div className="relative w-full h-2 rounded bg-gray-200 dark:bg-gray-700 mb-4">
                <div
                  className="absolute h-2 rounded"
                  style={{
                    width: `${student.progress}%`,
                    backgroundColor: primaryColor,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Progress: <span className="font-medium">{student.progress}%</span>
              </p>
            </div>
          ))}


          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="py-2 px-4 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Previous
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="py-2 px-4 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div >
    </div >
  );
};

export default CourceManagement;