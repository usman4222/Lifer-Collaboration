import React, { useEffect, useState, memo } from 'react'
import Wrapper from '../Components/Wrapper'
import HeaderSection from '../Components/HeaderSection'
import {
    FaArrowLeft,
    FaTimes,
    FaCloudUploadAlt,
    FaChevronCircleDown,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getCategories, getVariants } from '../Services/Restaurant'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import resturantApi from '../Services/restaurantapi'

const AddMenu = ({ edit }) => {
    const [images, setImages] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [categories, setCategories] = useState()
    const [variants, setVariants] = useState()
    const [productVariants, setProductVariants] = useState([])
    const [isDiscount, setIsDiscount] = useState(false)
    const [variantPrice, setVariantPrice] = useState('')
    const [discountPrice, setDiscountPrice] = useState('')
    const [selectedVariants, setSelectedVariants] = useState(null)
    const [isVisible, setIsVisible] = useState({})
    const [finalVariant, setFinalVariant] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const toggleVisibility = (variantId) => {
        setIsVisible((prevState) => ({
            ...prevState,
            [variantId]: !prevState[variantId],
        }))
    }

    const dummyImage = [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
    ]

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setImages((prevImages) => [...prevImages, reader.result])
            }

            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index))
    }

    const createProduct = async (data) => {
        if (selectedCategory == null) {
            toast.error('Select category')
            return
        }
        if (finalVariant.length < 1) {
            toast.error('Add at least one variant')
            return
        }

        const response = await resturantApi.post('/products', {
            category_id: selectedCategory,
            name: data.productName,
            discription: data.productDescription,
            display_picture: dummyImage,
            product_variants: finalVariant,
            is_available: true,
        })
        console.log(response)
    }

    const addProductVariant = (variantID) => {
        const variantExists = productVariants.some(
            (variant) => variant.variant.id === variantID.id,
        )

        if (!variantExists) {
            if (variantPrice == 0) {
                toast.error('Variant price cannot be zero')
                return
            }
            if (isDiscount && discountPrice === 0) {
                toast.error(
                    'If Discount selected, discount price cannot be zero',
                )
                return
            }
            setProductVariants((prevVariants) => [
                ...prevVariants,
                {
                    variant: variantID,
                    price: variantPrice,
                    is_discount: isDiscount,
                    discount_price: discountPrice,
                },
            ])
        }
        setFinalVariant((prevVariant) => [
            ...prevVariant,
            {
                variant_id: variantID.id,
                price: variantPrice,
                is_discount: isDiscount,
                discount: discountPrice,
            },
        ])
        setIsDiscount(!isDiscount)
        setVariantPrice('')
        setDiscountPrice('')
        console.log('Handle Product Add called')
    }

    const handleRemoveVariant = (variantID) => {
        console.log('Handle Remove Variant called')
        setProductVariants((prevVariants) =>
            prevVariants.filter(
                (variant) => variant.variant.id !== variantID.id,
            ),
        )
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const responsecategories = await getCategories()
            setCategories(responsecategories.data)
        }
        const fetchVariants = async () => {
            const responsevariants = await getVariants()
            setVariants(responsevariants.data)
            setSelectedVariants(responsevariants.data)
        }
        fetchCategories()
        fetchVariants()
    }, [])

    return (
        <Wrapper>
            <HeaderSection
                heading='Menu Control Panel'
                para='Simplified Menu Management'
            />
            <form
                onSubmit={handleSubmit(createProduct)}
                className='grid grid-cols-12  gap-x-5 md:mx-20 mt-10 mx-4 gap-y-5'
            >
                <div className='md:col-span-6 col-span-12 flex flex-col justify-start items-start gap-y-5'>
                    <div className='flex flex-row text-gray-700 gap-x-5 justify-center items-center font-medium'>
                        <FaArrowLeft
                            size={22}
                            onClick={() => navigate(-1)}
                            className='cursor-pointer'
                        />
                        <h3 className='text-2xl '>Update Menu Item</h3>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-5 w-full'>
                        <div className='bg-white rounded-lg p-5 flex flex-col gap-y-5 w-full'>
                            <div className='flex flex-col justify-start items-start'>
                                <label htmlFor='productName' className='mb-1'>
                                    Product Name
                                </label>
                                <input
                                    type='text'
                                    name='productName'
                                    id='productName'
                                    className='form-input rounded-md w-full'
                                    {...register('productName', {
                                        required: 'Product name is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9\s]*$/,
                                            message:
                                                'Product name can only contain letters and numbers',
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Product name must be at least 3 characters',
                                        },
                                        maxLength: {
                                            value: 100,
                                            message:
                                                'Product name must be less than 100 characters',
                                        },
                                    })}
                                />
                                {errors.productName && (
                                    <p className='text-red-500 text-sm'>
                                        {errors.productName.message}
                                    </p>
                                )}
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <label
                                    htmlFor='productDescription'
                                    className='mb-1'
                                >
                                    Product Description
                                </label>
                                <textarea
                                    name='productDescription'
                                    id='productDescription'
                                    className='form-textarea rounded-md w-full'
                                    {...register('productDescription', {
                                        required:
                                            'Product description is required',
                                        minLength: {
                                            value: 10,
                                            message:
                                                'Product description must be at least 10 characters',
                                        },
                                        maxLength: {
                                            value: 500,
                                            message:
                                                'Product description must be less than 500 characters',
                                        },
                                    })}
                                />
                                {errors.productDescription && (
                                    <p className='text-red-500 text-sm'>
                                        {errors.productDescription.message}
                                    </p>
                                )}
                            </div>
                            <label htmlFor='images'>Images</label>
                            <div className='border-2 border-dashed p-2'>
                                <label
                                    htmlFor='productImages'
                                    className='cursor-pointer flex flex-col justify-center items-center gap-y-1 opacity-60 '
                                >
                                    <FaCloudUploadAlt size={25} />
                                    <h4>Upload Images</h4>
                                    <span className='text-sm text-gray-500'>
                                        Select one or more images
                                    </span>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        className='hidden'
                                        id='productImages'
                                        multiple
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                            {images && (
                                <div className='flex flex-row justify-start items-center gap-x-3'>
                                    {images?.map((img, index) => (
                                        <div
                                            className='w-24 h-24 border-2 border-dashed relative'
                                            key={index}
                                        >
                                            <img
                                                src={img}
                                                alt='Product Image'
                                                className='w-full h-full object-cover'
                                            />
                                            <FaTimes
                                                className='absolute top-0 right-0 cursor-pointer'
                                                size={20}
                                                onClick={() =>
                                                    handleRemoveImage(index)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <label
                                htmlFor='Product Category'
                                className='mb-1 font-semibold text-lg'
                            >
                                Select Category
                            </label>
                            <div className='flex flex-row flex-wrap gap-y-2 justify-start items-center gap-x-3'>
                                {categories?.map((category, index) => (
                                    <label
                                        htmlFor={`category-${category.id}`}
                                        className={`p-2 rounded-full border text-xs md:text-sm ${
                                            selectedCategory === category.id
                                                ? 'bg-textActive text-white'
                                                : 'text-gray-600 bg-white'
                                        } cursor-pointer`}
                                        key={index}
                                    >
                                        <input
                                            type='radio'
                                            id={`category-${category.id}`}
                                            name='category'
                                            value={category.name}
                                            className='mr-1 hidden'
                                            onChange={() =>
                                                setSelectedCategory(category.id)
                                            }
                                        />
                                        {category.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:col-span-6 col-span-12  md:mt-14 gap-y-5'>
                    <div className='bg-white p-5 flex flex-col rounded-lg'>
                        <label
                            htmlFor='Variants'
                            className='mb-1 font-semibold text-lg'
                        >
                            Variants
                        </label>
                        {productVariants?.length > 0 && (
                            <div className='flex flex-row justify-between items-center'>
                                {productVariants.map((variant, index) => (
                                    <span
                                        key={index}
                                        className='text-gray-600 bg-slate-100 rounded-full text-sm px-4 py-1 relative'
                                    >
                                        {variant.variant.name}
                                        <FaTimes
                                            className='absolute top-0 right-0 cursor-pointer'
                                            onClick={() =>
                                                handleRemoveVariant(
                                                    variant.variant,
                                                )
                                            }
                                        />
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className='flex flex-col  mb-2 gap-y-3 mt-5'>
                            {selectedVariants?.map((variant, index) => (
                                <div
                                    className='flex flex-col bg-slate-100 p-2 rounded-md'
                                    key={variant.id}
                                >
                                    <div className='flex flex-row justify-between items-center mb-2 cursor-pointer'>
                                        <span className='font-semibold text-[14px]'>
                                            {variant.name}
                                        </span>
                                        <FaChevronCircleDown
                                            size={20}
                                            onClick={() =>
                                                toggleVisibility(variant.id)
                                            }
                                        />
                                    </div>
                                    {isVisible[variant.id] && (
                                        <div className='flex flex-col  justify-center items-start flex-wrap  gap-y-2'>
                                            <input
                                                type='number'
                                                name='price'
                                                id='price'
                                                className='px-3 py-1 rounded-md w-3/6 md:w-full'
                                                placeholder='Price '
                                                value={variantPrice}
                                                onChange={(e) => {
                                                    setVariantPrice(
                                                        e.target.value,
                                                    )
                                                }}
                                            />

                                            <label htmlFor='isDiscount'>
                                                <input
                                                    type='checkbox'
                                                    name='isDiscount'
                                                    id='isDiscount'
                                                    className='mr-1 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none'
                                                    onChange={() => {
                                                        setIsDiscount(
                                                            !isDiscount,
                                                        )
                                                    }}
                                                />
                                                Is Discount
                                            </label>
                                            <input
                                                type='number'
                                                name='discount'
                                                id='discount'
                                                className='px-3 py-1 rounded-md w-3/6 md:w-full'
                                                placeholder='Discount'
                                                value={discountPrice}
                                                onChange={(e) => {
                                                    setDiscountPrice(
                                                        e.target.value,
                                                    )
                                                }}
                                            />

                                            <button
                                                className='text-white bg-textActive rounded-md w-fit px-5 py-1 ml-auto font-semibold'
                                                type='button'
                                                onClick={() =>
                                                    addProductVariant(variant)
                                                }
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-textActive text-white rounded-md px-4 py-2 col-span-12 md:col-span-3 font-semibold w-full md:w-auto'
                >
                    Create
                </button>
            </form>
        </Wrapper>
    )
}

export default memo(AddMenu)
