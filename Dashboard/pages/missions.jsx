import React from 'react';
import Notif from '../components/Notif';



const missions = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
          <div className='flex justify-between px-4 pt-4'>
              <h1 class="font-bold text-3xl">List of missions</h1>
          </div>
          <br></br>
          <Notif />
          <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Add Mission</button>

          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                              place of departure
                          </th>
                          <th scope="col" className="px-6 py-3">
                              departure time
                          </th>
                          <th scope="col" className="px-6 py-3">
                              arrival place
                          </th>
                          <th scope="col" className="px-6 py-3">
                              arriving time
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              1
                          </th>
                          <td className="px-6 py-4">
                              nabeul
                          </td>
                          <td className="px-6 py-4">
                              10:00 AM
                          </td>
                          <td className="px-6 py-4">
                              tunis
                          </td>
                          <td className="px-6 py-4">
                              11:00 AM
                          </td>
                          <td className="px-6 py-4">
                          <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Edit
                              </button>
                              <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Delete
                              </button>
                          </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              2
                          </th>
                          <td className="px-6 py-4">
                              ariana
                          </td>
                          <td className="px-6 py-4">
                              09:00 AM
                          </td>
                          <td className="px-6 py-4">
                              nabeul
                          </td>
                          <td className="px-6 py-4">
                              10:30 AM
                          </td>
                          <td className="px-6 py-4">
                          <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Edit
                              </button>
                              <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Delete
                              </button>
                          </td>
                      </tr>

                  </tbody>
              </table>
          </div>
      </div>
    
  );
};

export default missions;
