import React, { memo } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SelectCategory = ({
    toggleCategory,
    openCategory,
    selectedCategory,
    handleCategoryChange,
    toggleCategoryInput,
    categories,
}) => {
    return (
        <>
            <div className='relative'>
                <div
                    className='w-full bg-gray-200 flex flex-row justify-between items-center p-2 mt-2 rounded-md cursor-pointer'
                    onClick={toggleCategory}
                >
                    <span>
                        {selectedCategory
                            ? selectedCategory.name
                            : 'Select Category'}
                    </span>
                    <FaChevronDown />
                </div>
                {openCategory && (
                    <div className='flex flex-col bg-white border rounded-xl text-sm'>
                        <span className='bg-textActive py-1 px-2 text-white rounded-t-lg'>
                            Select Category
                        </span>
                        <span className='font-semibold px-2 py-1'>
                            Category Types
                        </span>
                        {categories.map((category) => {
                            return (
                                <span
                                    className='pl-8 py-1 text-gray-600 cursor-pointer'
                                    key={category.id}
                                    onClick={() =>
                                        handleCategoryChange(category)
                                    }
                                >
                                    {category.name}
                                </span>
                            )
                        })}
                        <span
                            className='pl-8 py-1 text-gray-600 cursor-pointer'
                            onClick={() => toggleCategoryInput()}
                        >
                            Create new Category
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}

export default memo(SelectCategory)
