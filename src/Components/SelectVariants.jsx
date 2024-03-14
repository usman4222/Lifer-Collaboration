import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SelectVariants = ({
    toggleVariants,
    openVariants,
    selectedVariant,
    handleVariantChange,
    toggleVariantInput,
    variants,
}) => {
    return (
        <>
            <div className='relative'>
                <div
                    className='w-full bg-gray-200 flex flex-row justify-between items-center p-2 mt-2 rounded-md cursor-pointer'
                    onClick={toggleVariants}
                >
                    <span>
                        {selectedVariant
                            ? selectedVariant.name
                            : 'Choose a Variant'}
                    </span>
                    <FaChevronDown />
                </div>
                {openVariants && (
                    <div className='flex flex-col bg-white border rounded-xl text-sm'>
                        <span className='bg-textActive py-1 px-2 text-white rounded-t-lg'>
                            Choose a Variant
                        </span>
                        <span className='font-semibold px-2 py-1'>
                            Variant Types
                        </span>
                        {variants.map((variant) => {
                            return (
                                <span
                                    className='pl-8 py-1 text-gray-600 cursor-pointer'
                                    key={variant.id}
                                    onClick={() => handleVariantChange(variant)}
                                >
                                    {variant.name}
                                </span>
                            )
                        })}
                        <span
                            className='pl-8 py-1 text-gray-600 cursor-pointer'
                            onClick={() => toggleVariantInput()}
                        >
                            Create new Variant
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}

export default SelectVariants
