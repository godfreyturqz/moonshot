import React from 'react'
import Button from '@/components/Inputs/Button'
import Input from '@/components/Inputs/Input'

const Components: React.FC = () => {
  return (
    <div className='p-5'>
        <div>
            <h1>Buttons</h1>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
        </div>
        <br />
        <div>
          <h1>Input field</h1>
          <Input/>
        </div>
    </div>
  )
}

export default Components