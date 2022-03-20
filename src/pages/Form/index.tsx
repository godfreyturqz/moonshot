// COMPONENTS
import Label from '@/components/DataDisplay/Label'
import Input from '@/components/Inputs/Input/InputV1'
import Button from '@/components/Inputs/Button'
// LIBRARIES
import { nanoid } from 'nanoid'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
// SERVICES
import { createRecordAPI } from '@/services/fetchRecord'


interface IFormValues {
  firstName: string
  lastName: string
  email: string
  contact: string
  gender: string
  houseNumber: string
  street: string
  barangay: string
  city: string
  province: string
}

const Form = () => {

  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<IFormValues>({})

  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    try {
      const data = await createRecordAPI({uid: nanoid(), ...formData})
      await data && reset({})
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }


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
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=''
                      rules={{ required: true }}
                      render={({ field }) => <Input {...field} />}
                    />
                    <p>{errors.firstName && "First name is required"}</p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Label>Last name</Label>
                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue=''
                      rules={{ required: true }}
                      render={({ field }) => <Input {...field} />}
                    />
                    <p>{errors.lastName && "Last name is required"}</p>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Label>Email address</Label>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <Label>Contact no.</Label>
                    <Controller
                      name="contact"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-1">
                    <Label>Gender</Label>
                    <select
                      {...register("gender")}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <Label>House/ Unit no.</Label>
                    <Controller
                      name="houseNumber"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-3">
                    <Label>Street address</Label>
                    <Controller
                      name="street"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <Label>Barangay</Label>
                    <Controller
                      name="barangay"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <Label>City/ Municipality</Label>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <Label>Province</Label>
                    <Controller
                      name="province"
                      control={control}
                      defaultValue=''
                      render={({ field }) => <Input {...field} />}
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


// TODO
// 1. UIs, install nanoid and react-hook-form, API functions - DONE
// 2. register each Input using react hook form - DONE
// 3. react-hook-form reset