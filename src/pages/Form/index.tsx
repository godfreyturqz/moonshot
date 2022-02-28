import { SubmitHandler, useForm } from 'react-hook-form'
import Label from '@/components/DataDisplay/Label'
import Input from '@/components/Inputs/Input'
import Button from '@/components/Inputs/Button'


enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other'
}

interface UseFormType {
  firstName: string
  lastName: string
  phone: string
  email: string
  gender: GenderEnum
  houseNumber: string
  street: string
  barangay: string
  city: string
}

const Form = () => {

  const { register, handleSubmit } = useForm<UseFormType>()

  const onSubmit: SubmitHandler<UseFormType> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col">
      <div className="px-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="pt-1 pb-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 bg-white flex flex-col">
          <div className='p-1'>
            <Label>First name</Label>
            <Input {...register('firstName', { required: true })}/>
          </div>
          <div className='p-1'>
            <Label>Last name</Label>
            <Input {...register('lastName', { required: true })}/>
          </div>
          <div className='p-1'>
            <Label>Phone</Label>
            <Input {...register('phone', { required: true })}/>
          </div>
          <div className='p-1'>
            <Label>Email address</Label>
            <Input {...register('email', { required: true })}/>
          </div>
          <div className='p-1'>
            <Label>Gender</Label>
            <select
              {...register('gender')}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div className='p-1'>
            <Label>House number</Label>
            <Input {...register('houseNumber')}/>
          </div>
          <div className='p-1'>
            <Label>Street</Label>
            <Input {...register('street')}/>
          </div>
          <div className='p-1'>
            <Label>Barangay</Label>
            <Input {...register('barangay')}/>
          </div>
          <div className='p-1'>
            <Label>City/ Municipal</Label>
            <Input {...register('city')}/>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
