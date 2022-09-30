import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

function filldetails() {
    const router=useRouter()
  return (
    <div className='flex flex-col space-y-6'>
        <Button onClick={()=>router.push('/auth/registercontractor')}>I M an Employer</Button>
        <Button onClick={()=>router.push('/auth/registerlabor')}>I M a Labourer</Button>
    </div>
  )
}

export default filldetails