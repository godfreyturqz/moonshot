export type FormValues = {
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

export interface DataType extends FormValues {
	uid: string
	select: boolean
}
