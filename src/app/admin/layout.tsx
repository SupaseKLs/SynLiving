"use client"
import { useAppSelector } from '@/redux/hooks'
import { store } from '@/redux/store'
import { useSession } from 'next-auth/react'
import React from 'react'
import Sidebar from '@/components/admin-panel/Sidebar'
import Login from '@/components/admin-panel/login'
import Loader from '@/components/admin-panel/loader'
const layout = ({children} : {children: React.ReactNode}) => {
    const isloading = useAppSelector(store => store.LoadingReducer)
    const { data: session } = useSession()

    if (!session?.user) {
        return <Login />
    }

    return <div className='flex'>
        <Sidebar />
        <div className='w-full h-full'>
            {/* <Navbar/> */}
            <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
        </div>
        {isloading && <Loader />}
    </div>
}

export default layout