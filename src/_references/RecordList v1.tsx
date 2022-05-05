import { useState, useEffect, Suspense, lazy } from 'react'
// COMPONENTS
import DataNotFound from '../pages/RecordList/DataNotFound'
import EditRecordForm from '@/pages/RecordForm/EditRecordForm'
import Modal from '@/components/Modal/Modal'
import SkeletonLoader from '../pages/RecordList/SkeletonLoader'
import Spinner from '../pages/RecordList/Spinner'
// SERVICES
import { getRecords, getOneRecord } from '@/services/record'

interface FormValues {
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

interface DataType extends FormValues {
	uid: string
	select: boolean
}

const RecordList: React.FC = () => {
	const [data, setData] = useState<DataType[]>([])
	const [loading, setLoading] = useState(false)

	const [open, setOpen] = useState(false)
	const [oneRecord, setOneRecord] = useState<DataType>()

	const handleEditRecordForm = async (uid: string) => {
		const oneRecord = await getOneRecord(uid)
		setOneRecord((prev) => ({
			...prev,
			...oneRecord,
		}))
		oneRecord && setOpen(true)
	}

	const handleAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked

		setData((prev) => {
			return prev.map((item) => ({
				...item,
				select: checked,
			}))
		})
	}

	const handleCheckbox = (uid: string) => {
		setData((prev) => {
			return prev.map((item) => {
				if (item.uid === uid) {
					return {
						...item,
						select: !item.select,
					}
				}

				return { ...item }
			})
		})
	}

	useEffect(() => {
		try {
			setLoading(true)
			;(async () => {
				const records: DataType[] = await getRecords()
				const newRecords = records.map((prev) => {
					return {
						...prev,
						select: false,
					}
				})
				setData((prev) => [...prev, ...newRecords])
				setLoading(false)
			})()
		} catch (error) {
			console.log(error)
			setLoading(false)
		} finally {
			setLoading(false)
		}
	}, [])

	return (
		<Suspense fallback={<Spinner />}>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				{/* Search Field */}
				<div className="p-4">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
							placeholder="Search for items"
						/>
					</div>
				</div>
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-200 uppercase bg-gray-700 cursor-default">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<input
										id="checkbox-all-search"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
										onChange={handleAllCheckbox}
									/>
									<label htmlFor="checkbox-all-search" className="sr-only">
										checkbox
									</label>
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Contact
							</th>
							<th scope="col" className="px-6 py-3">
								Gender
							</th>
							<th scope="col" className="px-6 py-3">
								Address
							</th>
						</tr>
					</thead>
					<tbody>
						{loading && <SkeletonLoader />}
						{data?.map((item) => (
							<tr
								key={item.uid}
								className="bg-white border-b hover:bg-gray-200 cursor-pointer"
								onClick={() => handleEditRecordForm(item.uid)}
							>
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-1"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
											checked={item.select}
											onChange={() => handleCheckbox(item.uid)}
										/>
										<label
											htmlFor="checkbox-table-search-1"
											className="sr-only"
										>
											checkbox
										</label>
									</div>
								</td>
								<td className="px-6 py-4 text-gray-900">
									{item.firstName} {item.lastName}
								</td>
								<td className="px-6 py-4">{item.email}</td>
								<td className="px-6 py-4">{item.contact}</td>
								<td className="px-6 py-4">{item.gender}</td>
								<td className="px-6 py-4">
									{item.houseNumber} {item.street}, {item.barangay}, {item.city}
									, {item.province}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{data?.length === 0 && <DataNotFound />}
				<Modal open={open} setOpen={setOpen}>
					<EditRecordForm recordData={oneRecord} setOpen={setOpen} />
				</Modal>
			</div>
		</Suspense>
	)
}

export default RecordList
