import React, { useEffect, useState, memo } from 'react'
import Wrapper from '../Components/Wrapper'
import RIderMenu from '../Components/RIderMenu'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import AddMenu from './AddMenu'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import resturantApi from '../Services/restaurantapi'

const MenuPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [fetching, setFetching] = useState(true)
    const toggleRiderForm = () => {
        navigate('/menu/add-menu')
    }
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await resturantApi.get('/products')
                setProducts(response.data.data)
                setFetching(false)
            } catch (error) {
                console.error(error)

                setFetching(false)
            }
        }
        getAllProducts()
    }, [])

    return (
        <Wrapper>
            <div className='flex flex-col'>
                <RIderMenu
                    toggleRiderForm={toggleRiderForm}
                    heading={'Menu Control Panel'}
                    para={'Simplified Menu Management'}
                    image={'/src/assets/chef.png'}
                    modalButtonText={'+ Add Item'}
                    cardsMainHeading={'Menu (Total Items)'}
                />
                <div className='py-8 mx-5 lg:mx-0 lg:mr-5'>
                    <h3 className='text-2xl font-semibold text-gray-800'>
                        Menu (Total Items)
                    </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                        {fetching ? (
                            <div className='flex justify-center items-center w-[80%] pt-20 mx-auto'>
                                <span className='text-xl text-center'>
                                    Loading...
                                </span>
                            </div>
                        ) : (
                            products?.map((product) => {
                                return (
                                    <div
                                        className='bg-white rounded-2xl shadow-md '
                                        key={product?.id}
                                    >
                                        <img
                                            src='/src/assets/product.png'
                                            alt='Rider'
                                            className='rounded-lg w-full'
                                            loading='lazy'
                                        />
                                        <div className='px-3 py-4'>
                                            <div className='flex justify-start flex-col mb-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='flex flex-col gap-y-3'>
                                                        <span className='text-gray-800 font-bold'>
                                                            {product?.name}
                                                        </span>
                                                        <select
                                                            name='availability'
                                                            id='availability'
                                                            className='form-select rounded-2xl py-0'
                                                        >
                                                            <option value='available'>
                                                                Available
                                                            </option>
                                                            <option value='unavailable'>
                                                                Unavailable
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className='bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center'>
                                                        $10.00
                                                    </div>
                                                </div>
                                                <div className='py-2 text-gray-800'>
                                                    <span>
                                                        {product?.description}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <NavLink
                                                        className='bg-blue-500 text-white px-5 py-1 rounded-md flex items-center'
                                                        to='/menu/edit-menu'
                                                    >
                                                        <FiEdit className='mr-1' />
                                                        Edit
                                                    </NavLink>
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
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Menu = () => {
    const dummyData = {
        name: 'Spicy Beast Burger',
        category: 'Snacks',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloribus.',
        variants: [
            {
                name: 'Small',
                price: 10,
            },
            {
                name: 'Medium',
                price: 15,
            },
            {
                name: 'Large',
                price: 20,
            },
        ],
    }

    return (
        <Routes>
            <Route path='/' element={<MenuPage />} />
            <Route path='/add-menu' element={<AddMenu />} />
            <Route
                path='/edit-menu'
                element={<AddMenu data={dummyData} edit={true} />}
            />
        </Routes>
    )
}

export default AppLayout(memo)(Menu)
