// COMPONENTS
import Button from '@/components/Inputs/Button'
import Input from '@/components/Inputs/Input'
import Label from '@/components/DataDisplay/Label'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

type FormInputGroup = {
	onSubmit: SubmitHandler<IFormValues>
}

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

const FormInputGroup: React.FC<FormInputGroup> = ({ onSubmit }) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="shadow overflow-hidden sm:rounded-md">
				<div className="px-4 py-5 bg-white sm:p-6">
					<div className="grid grid-cols-6 gap-4">
						<div className="col-span-6 sm:col-span-3">
							<Label>First name</Label>
							<Controller
								name="firstName"
								control={control}
								defaultValue=""
								rules={{ required: true }}
								render={({ field }) => <Input {...field} />}
							/>
							<p>{errors.firstName && 'First name is required'}</p>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<Label>Last name</Label>
							<Controller
								name="lastName"
								control={control}
								defaultValue=""
								rules={{ required: true }}
								render={({ field }) => <Input {...field} />}
							/>
							<p>{errors.lastName && 'Last name is required'}</p>
						</div>
						<div className="col-span-6 sm:col-span-3">
							<Label>Email address</Label>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-6 sm:col-span-2">
							<Label>Contact no.</Label>
							<Controller
								name="contact"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-6 sm:col-span-1">
							<Label>Gender</Label>
							<select
								{...register('gender')}
								className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-3">
							<Label>Street address</Label>
							<Controller
								name="street"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-6 sm:col-span-6 lg:col-span-2">
							<Label>Barangay</Label>
							<Controller
								name="barangay"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-6 sm:col-span-6 lg:col-span-2">
							<Label>City/ Municipality</Label>
							<Controller
								name="city"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<Label>Province</Label>
							<Controller
								name="province"
								control={control}
								defaultValue=""
								render={({ field }) => <Input {...field} />}
							/>
						</div>
					</div>
				</div>
				{/* <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
					<Button>Save</Button>
					<span className="px-3">
						<Button variant="secondary">Cancel</Button>
					</span>
				</div> */}
			</div>
		</form>
	)
}

export default FormInputGroup
