// COMPONENTS
import Label from '@/components/DataDisplay/Label'
import Input from '@/components/Inputs/Input/InputV1'
import Button from '@/components/Inputs/Button'
// LIBRARIES
import { nanoid } from 'nanoid'
import { SubmitHandler, useForm } from 'react-hook-form'
// SERVICES
import { createRecordAPI } from '@/services/fetchRecord'


interface UseFormType {
  firstName: string
  lastName: string
}

const Form = () => {

  const { register, handleSubmit } = useForm<UseFormType>()

  const onSubmit: SubmitHandler<UseFormType> = (formData) => {
    try {
      const data = createRecordAPI({...formData, id: nanoid()})
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
    
  }

  // TODO
  // What's already done: UIs, install nanoid and react-hook-form, api functions
  // register each Input using react hook form


  return (
    <div className="container p-5">
      <div className="md:grid md:grid-cols-4 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Please fill out the form as completely and accurately as possible.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-6 sm:col-span-3">
                    <Label>First name</Label>
                    <Input 
                      // type="text"
                      // name="first-name"
                      // id="first-name"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Label>Last name</Label>
                    <Input
                      // type="text"
                      // name="last-name"
                      // id="last-name"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Label>Email address</Label>
                    <Input
                      // type="text"
                      // name="email-address"
                      // id="email-address"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <Label>Contact no.</Label>
                    <Input
                      // type="text"
                      // name="email-address"
                      // id="email-address"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-1">
                    <Label>Gender</Label>
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <Label>House/ Unit no.</Label>
                    <Input
                      // type="text"
                      // name="house-number"
                      // id="house-number"
                    />
                  </div>
                  <div className="col-span-3">
                    <Label>Street address</Label>
                    <Input
                      // type="text"
                      // name="street-address"
                      // id="street-address"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <Label>Barangay</Label>
                    <Input
                      // type="text"
                      // name="barangay"
                      // id="barangay"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <Label>City/ Municipality</Label>
                    <Input
                      // type="text"
                      // name="city-municipality"
                      // id="city-municipality"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <Label>Province</Label>
                    <Input
                      // type="text"
                      // name="province"
                      // id="province"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                <Button>Save</Button>
                <span className='px-3'><Button variant='secondary'>Cancel</Button></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
