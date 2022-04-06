import React, { useState, useEffect, Suspense, lazy } from 'react'
// COMPONENTS
const EditRecordForm = lazy(() => import('@/pages/RecordForm/EditRecordForm'))
// ICONS
import EditIcon from '@/components/Icons/Pencil'
// STYLED COMPONENTS
import { TableRow } from './TableRow'
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

const RecordList = () => {
	const [open, setOpen] = useState(false)
	const [data, setData] = useState<DataType[]>([])
	const [oneRecord, setOneRecord] = useState<DataType | null>()

	const handleAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked

		setData((prev) => {
			return prev.map((item) => ({
				...item,
				select: checked,
			}))
		})
		console.log(data)
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

	const handleEditModal = async (uid: string) => {
		setOpen((prev) => !prev)

		const oneRecord: DataType = await getOneRecord(uid)
		setOneRecord((prev) => ({
			...prev,
			...oneRecord,
		}))
	}

	useEffect(() => {
		const fetchRecord = async () => {
			const records = await getRecords()
			const newRecords = records.map((prev) => {
				return {
					...prev,
					select: false,
				}
			})
			setData((prev) => [...prev, ...newRecords])
		}
		fetchRecord()
	}, [])

	return (
		<Suspense fallback={'loading'}>
			<div className="flex flex-col">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<Th>
										<input
											type="checkbox"
											onChange={handleAllCheckbox}
											className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
										/>
									</Th>
									<Th>NAME</Th>
									<Th>EMAIL</Th>
									<Th>CONTACT</Th>
									<Th>GENDER</Th>
									<Th>ADDRESS</Th>
									<th scope="col" className="relative px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{data?.map((item) => (
									<TableRow
										key={item.uid}
										className="cursor-pointer"
										onClick={() => handleEditModal(item.uid)}
									>
										<Td>
											<input
												type="checkbox"
												checked={item.select}
												onChange={(e) => handleCheckbox(item.uid)}
												className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
											/>
										</Td>
										<Td>
											{item.firstName} {item.lastName}
										</Td>
										<Td>{item.email}</Td>
										<Td>{item.contact}</Td>
										<Td>{item.gender}</Td>
										<Td>{`${item.houseNumber} ${item.street} st., ${item.barangay}, ${item.city}, ${item.province}`}</Td>
										<td>
											<button
												className="text-indigo-600 hover:text-indigo-900"
												onClick={() => handleEditModal(item.uid)}
											>
												<EditIcon />
											</button>
										</td>
									</TableRow>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{oneRecord && <EditRecordForm recordData={oneRecord} />}
		</Suspense>
	)
}

export default RecordList

const Th: React.FC = ({ children }) => {
	return (
		<th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
			{children}
		</th>
	)
}

const Td: React.FC = ({ children }) => {
	return <td className="px-6 py-4 text-gray-700 text-sm">{children}</td>
}

// TODO
// 1. change icon of sidebar icons
