import React from 'react';
import Notif from '../components/Notif';


const drivers = () => {
 
  return (
    <div className='bg-gray-100 min-h-screen'>
          <div className='flex justify-between px-4 pt-4'>
              <h1 class="font-bold text-3xl">List of drivers</h1>
          </div>
          <br></br>
          <Notif />
          <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Add Driver</button>

          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Number
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Driving license number
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
                              mohamed
                          </td>
                          <td className="px-6 py-4">
                              20114225
                          </td>
                          <td className="px-6 py-4">
                              123465
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
                              ahmed
                          </td>
                          <td className="px-6 py-4">
                              55222333
                          </td>
                          <td className="px-6 py-4">
                              253614
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

export default drivers;
