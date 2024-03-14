import { memo } from 'react'
import HeaderSection from '../Components/HeaderSection'
import Wrapper from '../Components/Wrapper'
import SearchArea from '../Components/SearchArea'
import Table from '../Components/Table'
import AppLayout from '../Layout/AppLayout'
const Orders = () => {
    const tableRows = [
        'ID',
        'DETAILS',
        'CREATED',
        'PRICE',
        'ASSIGNED RIDER',
        'STATUS',
    ]

    const tableData = [
        {
            id: 1,
            details: 'Product 1',
            created: '2022-01-01',
            price: '100',
            assignedRider: 'Rider 1',
            status: 'Pending',
        },
        {
            id: 2,
            details: 'Product 2',
            created: '2022-01-02',
            price: '200',
            assignedRider: 'Rider 2',
            status: 'Pending',
        },
    ]

    return (
        <>
            <Wrapper>
                <HeaderSection
                    heading='Current Orders'
                    para={'Live Order Logs!'}
                />
                <SearchArea />
                <div className='w-full lg:pl-0 lg:pr-4 mt-2 md:pl-2 md:pr-2'>
                    <Table tableRows={tableRows} tableData={tableData} />
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout(memo)(Orders)
