// COMPONENTS
import Input from '@/components/Inputs/Input'
import Label from '@/components/DataDisplay/Label'
// LIBRARIES
import {
	UseFormRegister,
	Controller,
	Control,
	FormState,
} from 'react-hook-form'
// TYPES
import { FormValues, RecordData } from './types'

type FormInputGroup = {
	register: UseFormRegister<FormValues>
	control: Control<FormValues>
	formState: FormState<FormValues>
	recordData?: RecordData | undefined
}

const FormInputGroup: React.FC<FormInputGroup> = ({
	register,
	control,
	formState,
	recordData,
}) => {
	return (
		<div className="shadow overflow-hidden sm:rounded-md">
			<div className="px-4 py-5 bg-white sm:p-6">
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-6 sm:col-span-3">
						<Label>First name</Label>
						<Controller
							name="firstName"
							control={control}
							defaultValue={recordData ? recordData.firstName : ''}
							rules={{ required: true }}
							render={({ field }) => <Input {...field} />}
						/>
						<p>{formState.errors.firstName && 'First name is required'}</p>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<Label>Last name</Label>
						<Controller
							name="lastName"
							control={control}
							defaultValue={recordData ? recordData.lastName : ''}
							rules={{ required: true }}
							render={({ field }) => <Input {...field} />}
						/>
						<p>{formState.errors.lastName && 'Last name is required'}</p>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<Label>Email address</Label>
						<Controller
							name="email"
							control={control}
							defaultValue={recordData ? recordData.email : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-6 sm:col-span-2">
						<Label>Contact no.</Label>
						<Controller
							name="contact"
							control={control}
							defaultValue={recordData ? recordData.contact : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-6 sm:col-span-1">
						<Label>Gender</Label>
						<select
							{...register('gender')}
							className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							defaultValue={recordData ? recordData.gender : 'male'}
						>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className="col-span-3">
						<Label>House/ Unit no.</Label>
						<Controller
							name="houseNumber"
							control={control}
							defaultValue={recordData ? recordData.houseNumber : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-3">
						<Label>Street address</Label>
						<Controller
							name="street"
							control={control}
							defaultValue={recordData ? recordData.street : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-6 sm:col-span-6 lg:col-span-2">
						<Label>Barangay</Label>
						<Controller
							name="barangay"
							control={control}
							defaultValue={recordData ? recordData.barangay : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-6 sm:col-span-6 lg:col-span-2">
						<Label>City/ Municipality</Label>
						<Controller
							name="city"
							control={control}
							defaultValue={recordData ? recordData.city : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
					<div className="col-span-6 sm:col-span-3 lg:col-span-2">
						<Label>Province</Label>
						<Controller
							name="province"
							control={control}
							defaultValue={recordData ? recordData.province : ''}
							render={({ field }) => <Input {...field} />}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormInputGroup
