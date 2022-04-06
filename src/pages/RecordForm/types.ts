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

export interface RecordData extends FormValues {
	uid: string
}

export interface RecordList extends RecordData {
	select: boolean
}
