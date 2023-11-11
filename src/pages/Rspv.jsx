import React from 'react'

export const Rspv = () => {
  return (
    <div className='p-5 w-full h-screen flex-col text-white   '>
        <div className='w-full h-1/6  flex justify-end mb-5 tablet:justify-center'>
            <div className='bg-[#EB3838] w-2/5 tablet:w-full flex justify-center items-center text-2xl'>Merah</div>
        </div>
        <div className='w-full h-5/6 web:flex flex-row'>
            
        <div className='bg-[#5C38EB] text-2xl w-1/3  mr-5 justify-center items-center hidden web:flex mb-5'>Ungu</div>
        <div className='flex flex-col w-full h-full gap-5 tablet:flex-col-reverse  '> 
            <div className='bg-[#5C38EB] w-full h-2/6 flex justify-center items-center text-2xl tablet:mb-5  web:hidden'>Ungu</div>
                
                <div className='flex flex-row h-2/6 gap-5 tablet: web:h-1/2 web:mb-5 tablet:flex-row-reverse'> 
                <div className='bg-[#EB38AE] w-1/2 flex justify-center items-center text-2xl'>Pink</div>
                    <div className='bg-[#38C0EB] w-1/2 flex justify-center items-center text-2xl tablet:bg-[#EB38AE] web:bg-[#38C0EB]'>Biru</div>
                    
                </div>
                <div className='bg-[#38EB55] h-2/6 web:h-1/2 flex justify-center items-center text-2xl mb-5 tablet:mb-0'>Hijau</div>
        </div>
        </div>
    </div>
  )
}
