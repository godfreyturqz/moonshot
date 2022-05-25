export type RecordFormValues = {
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

export type RecordData = RecordFormValues & {
	uid: string
	createdAt: string
}
