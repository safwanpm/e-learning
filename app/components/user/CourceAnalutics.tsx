import React from 'react';

import { courseOverview } from '../../../public/assets/data/UserData'

function CourseAnalytics() {
  return (
    <div className="bg-teritory dark:bg-gray-800  shadow-md p-6 rounded-lg">
      <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enrolled Courses</h3>
      {courseOverview.map((course) => (
        <div key={course.courseId} className="mb-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-900 dark:text-white">{course.title}</h4>
            <span className={`text-sm px-2 py-1 rounded-md ${course.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100'}`}>
              {course.status}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
            <div
              className="bg-primary dark:bg-secondary h-2 rounded-full"
              style={{ width: `${course.completion}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseAnalytics;
