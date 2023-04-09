import React, { useState } from 'react';
import Notif from '../components/Notif';
import AddModal from '../components/AddModal';
import Input from '../components/Input';
import { Form, Formik } from 'formik';


const Controlers = () => {
const [show,setShow]= useState(false);
const [isOpen,setisOpen]= useState(false);
const [Name,setName]= useState('');
console.log(Name);

  return (
    
    <div className='bg-gray-100 min-h-screen'>
          <div className='justify-between p-4'>
              <h1 className="font-bold text-3xl">Controlers</h1>
          </div>
          <br></br>
          <button type="button" onClick={()=>setShow(true)} className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Add controler</button>
              <AddModal show={show} onclose={()=>setShow(false)}>
                <div>
                    <Formik initialValues={{firstName:'', name:'', cin:''}} onSubmit={(values)=> console.log(values) }>
                        {({handleChange,handleBlur,values})=> (
               <Form className='flex flex-col gap-2 items-center m-3'>
               <Input name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} label={'First Name:'} placeholder='First Name' />
               <Input name ='name' onChange={handleChange} onBlur={handleBlur} value={values.name} label={'Name:'} placeholder='Name' />
               <Input name ='cin' onChange={handleChange} onBlur={handleBlur} value={values.cin} label={'cin:'} placeholder='CIN' />
<button type="submit" class=" text-blue-700 hover:text-dark border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mt-2  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add</button>

</Form>
                        )}

</Formik>

                </div>
              </AddModal>
          <div className="">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                              First name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              CIN
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
                              bs
                          </td>
                          <td className="px-6 py-4">
                              syrine
                          </td>
                          <td className="px-6 py-4">
                              123456
                          </td>
                          <td className="px-6 py-4">
                              <button type="button" onClick={()=>setisOpen(true)} className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Edit
                              </button>
                              <AddModal show={isOpen} onclose={()=>setisOpen(false)}>
                              <div>
                              <Formik initialValues={{firstName:'', name:'', cin:''}} onSubmit={(values)=> console.log(values) }>
                        {({handleChange,handleBlur,values})=> (
               <Form className='flex flex-col gap-2 items-center m-3'>
               <Input name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} label={'First Name:'} placeholder='First Name' />
               <Input name ='name' onChange={handleChange} onBlur={handleBlur} value={values.name} label={'Name:'} placeholder='Name' />
               <Input name ='cin' onChange={handleChange} onBlur={handleBlur} value={values.cin} label={'cin:'} placeholder='CIN' />
<button type="submit" class=" text-blue-700 hover:text-dark border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mt-2  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Edit</button>

</Form>
                        )}

</Formik>

                </div>
                </AddModal>
                              <button type="button" className="text-primary bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                  Delete
                              </button>      
                              <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>

                          </td>
                      </tr>

                  </tbody>
              </table>
              
          </div>
      <Notif className='bottom-right'/>

      </div>
  );
};

export default Controlers;
