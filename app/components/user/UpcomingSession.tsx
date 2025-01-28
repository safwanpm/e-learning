import React from 'react';
import { upcomingSessionData } from '../../../public/assets/data/UserData';

function UpcomingSession() {
    if (!upcomingSessionData) {
        return <div className="text-red-500">No session data available.</div>;
    }
    return (
        <div className="bg-teritory dark:bg-gray-800 shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Upcoming Sessions
            </h3>

            {upcomingSessionData.map((session) => (
                <div key={session.sessionId} className="mb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                                {session.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                {`${session.date}, ${session.time}`}
                            </p>
                        </div>

                        <div className="flex space-x-2">
                  
                            <p className="font-bold text-primary px-2 py-1 rounded-md hover:bg-primary-dark hover:text-black transition duration-300 ease-in-out dark:bg-primary-light dark:hover:bg-primary-dark dark:hover:text-white cursor-pointer">
                                Join
                            </p>

                       
                            <p className="font-bold text-primary px-2 py-1 rounded-md hover:bg-secondary-dark hover:text-black transition duration-300 ease-in-out dark:bg-secondary-light dark:hover:bg-secondary-dark dark:hover:text-white cursor-pointer">
                                Reschedule
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingSession;
