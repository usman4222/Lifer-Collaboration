import React, { memo } from 'react'
import Wrapper from '../Components/Wrapper'
import RIderMenu from '../Components/RIderMenu'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import AppLayout from '../Layout/AppLayout'

const Rider = ({ toggleRiderForm }) => {
    return (
        <Wrapper>
            <div className='flex flex-col'>
                <RIderMenu
                    toggleRiderForm={toggleRiderForm}
                    heading={'Riders Control Panel'}
                    para={'Manage your riders with ease!'}
                    image={'/src/assets/rider.png'}
                    modalButtonText={'+ Add Rider'}
                    cardsMainHeading={'All Riders'}
                />
                <div className='py-8 mx-5 lg:mx-0 lg:mr-5'>
                    <h3 className='text-2xl font-semibold text-gray-800'>
                        Menu (Total Items)
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                        {/* Repeat this card block for each rider */}
                        <div className='bg-white rounded-2xl shadow-md '>
                            <img
                                src='/src/assets/rider1.png'
                                alt='Rider'
                                className='rounded-lg'
                                loading='lazy'
                            />
                            <div className='p-4'>
                                <div className='flex justify-between mb-2'>
                                    <div>
                                        <h6 className='text-gray-800 font-medium'>
                                            Name:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Password:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Contact No:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            ID:
                                        </h6>
                                    </div>
                                    <div>
                                        <h6 className='text-gray-900'>
                                            Randy Curtis
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            **********
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            +92 3093432454
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            #90354
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <FiEdit className='mr-1' />
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <RiDeleteBin6Line className='mr-1' />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md '>
                            <img
                                src='/src/assets/rider1.png'
                                alt='Rider'
                                className='rounded-lg'
                                loading='lazy'
                            />
                            <div className='p-4'>
                                <div className='flex justify-between mb-2'>
                                    <div>
                                        <h6 className='text-gray-800 font-medium'>
                                            Name:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Password:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Contact No:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            ID:
                                        </h6>
                                    </div>
                                    <div>
                                        <h6 className='text-gray-900'>
                                            Randy Curtis
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            **********
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            +92 3093432454
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            #90354
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <FiEdit className='mr-1' />
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <RiDeleteBin6Line className='mr-1' />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md '>
                            <img
                                src='/src/assets/rider1.png'
                                alt='Rider'
                                className='rounded-lg'
                                loading='lazy'
                            />
                            <div className='p-4'>
                                <div className='flex justify-between mb-2'>
                                    <div>
                                        <h6 className='text-gray-800 font-medium'>
                                            Name:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Password:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Contact No:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            ID:
                                        </h6>
                                    </div>
                                    <div>
                                        <h6 className='text-gray-900'>
                                            Randy Curtis
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            **********
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            +92 3093432454
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            #90354
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <FiEdit className='mr-1' />
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <RiDeleteBin6Line className='mr-1' />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md '>
                            <img
                                src='/src/assets/rider1.png'
                                alt='Rider'
                                className='rounded-lg'
                                loading='lazy'
                            />
                            <div className='p-4'>
                                <div className='flex justify-between mb-2'>
                                    <div>
                                        <h6 className='text-gray-800 font-medium'>
                                            Name:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Password:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Contact No:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            ID:
                                        </h6>
                                    </div>
                                    <div>
                                        <h6 className='text-gray-900'>
                                            Randy Curtis
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            **********
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            +92 3093432454
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            #90354
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <FiEdit className='mr-1' />
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <RiDeleteBin6Line className='mr-1' />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-md '>
                            <img
                                src='/src/assets/rider1.png'
                                alt='Rider'
                                className='rounded-lg'
                                loading='lazy'
                            />
                            <div className='p-4'>
                                <div className='flex justify-between mb-2'>
                                    <div>
                                        <h6 className='text-gray-800 font-medium'>
                                            Name:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Password:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            Contact No:
                                        </h6>
                                        <h6 className='text-gray-800 font-medium'>
                                            ID:
                                        </h6>
                                    </div>
                                    <div>
                                        <h6 className='text-gray-900'>
                                            Randy Curtis
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            **********
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            +92 3093432454
                                        </h6>
                                        <h6 className='text-gray-900'>
                                            #90354
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <FiEdit className='mr-1' />
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'>
                                            <RiDeleteBin6Line className='mr-1' />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AppLayout(memo)(Rider)
