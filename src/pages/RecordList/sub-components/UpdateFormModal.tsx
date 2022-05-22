import { useState } from 'react'

const UpdateFormModal = () => {
	const [uid, setUid] = useState('')
	const handleEditRecordForm = async (id: string) => {
		setUid(id)
		// const { data } = useQuery<DataType>(['RECORDS', uid], () =>
		// getOneRecord(uid)
		// )
		// console.log(data)
		// const oneRecord = await getOneRecord(uid)
		// setOneRecord((prev) => ({
		// 	...prev,
		// 	...data,
		// }))
		// one && setOpen(true)
	}
	return <div>UpdateFormModal</div>
}

export default UpdateFormModal
