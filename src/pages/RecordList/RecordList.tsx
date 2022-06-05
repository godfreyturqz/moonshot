import { useState, useEffect } from 'react'
// COMPONENTS
import EditRecordForm from '@/pages/RecordForm/EditRecordForm'
import Modal from '@/components/Modal/Modal'
// SUB-COMPONENTS
import DataNotFound from './sub-components/DataNotFound'
import SearchField from './sub-components/SearchField'
import SkeletonLoader from './sub-components/SkeletonLoader'
// TYPES
import { RecordData } from '@/types/record.types'
// UTILS
import useSort from '@/utils/useSort'
import Pagination from './sub-components/Pagination'
import Trash from '@/components/Icons/Trash'
import { useRecordQuery } from '@/utils/query/useRecordQuery'
import Pencil from '@/components/Icons/Pencil'

type RecordTableRow = RecordData & {
	isSelected: boolean
}

const RecordList: React.FC = () => {
	const { data: recordList, isLoading, handleDelete } = useRecordQuery()
	const [tableList, setTableList] = useState<RecordTableRow[]>(
		[] as RecordTableRow[]
	)
	// for sorting
	const { handleSort } = useSort()
	// for edit modal form
	const [open, setOpen] = useState(false)
	const [recordData, setRecordData] = useState<RecordData>({} as RecordData)

	const handleEditRecordModalForm = (uid: string) => {
		setOpen(true)
		const data = tableList?.find((item) => item.uid === uid)
		data && setRecordData(data)
	}

	const handleAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked

		setTableList((prev) =>
			prev.map((item) => ({
				...item,
				isSelected: checked,
			}))
		)
	}

	const handleCheckbox = (uid: string) => {
		setTableList((prev) =>
			prev.map((item) => {
				if (item.uid === uid) {
					return {
						...item,
						isSelected: !item.isSelected,
					}
				}

				return { ...item }
			})
		)
	}

	useEffect(() => {
		// add 'isSelected' property for checkbox logic function
		const newRecords = recordList?.map((prev) => ({
			...prev,
			isSelected: false,
		}))
		newRecords && setTableList(() => [...newRecords])
		console.log('log@RecordList.tsx', newRecords)
	}, [recordList])

	return (
		<div className="relative overflow-auto shadow-md sm:rounded-lg max-w-7xl mx-auto h-full bg-white select-none">
			<div>
				<SearchField />
			</div>
			<table className="w-full text-sm text-left text-gray-500">
				<thead className="text-xs text-gray-200 uppercase bg-gray-700">
					<tr>
						<th scope="col" className="p-4 w-4">
							<div className="flex items-center">
								<input
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
									type="checkbox"
									onChange={handleAllCheckbox}
								/>
							</div>
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'firstName'))}
						>
							Name
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'email'))}
						>
							Email
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'contact'))}
						>
							Contact
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'gender'))}
						>
							Gender
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'houseNumber'))}
						>
							Address
						</th>
						<th
							className="px-6 py-3 cursor-pointer"
							onClick={() => setTableList(handleSort(tableList, 'createdAt'))}
						>
							Created At
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<SkeletonLoader />
					) : (
						tableList?.map((item) => (
							<tr
								key={item.uid}
								className={`bg-white border-b hover:bg-gray-200 transition ease-in-out cursor-pointer relative group ${
									item.isSelected && 'bg-gray-200'
								}`}
							>
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
											checked={item.isSelected}
											onChange={() => handleCheckbox(item.uid)}
										/>
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
								<td className="px-6 py-4">
									{new Date(item.createdAt).toLocaleDateString()} -{' '}
									{new Date(item.createdAt).toLocaleTimeString()}
								</td>
								<td
									className={`px-6 py-4 absolute right-0 flex invisible group-hover:visible`}
								>
									<div
										onClick={() => handleEditRecordModalForm(item.uid)}
										className="p-1 rounded-full hover:bg-gray-700 transition ease-in-out active:bg-sky-400 hover:text-white active:text-gray-900"
									>
										<Pencil />
									</div>
									<div
										onClick={() => handleDelete.mutate(item.uid)}
										className="p-1 rounded-full hover:bg-gray-700 transition ease-in-out active:bg-sky-400 hover:text-white active:text-gray-900"
									>
										<Trash />
									</div>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
			<div className="absolute bottom-0 w-full">
				<Pagination tableList={tableList} />
			</div>
			{!isLoading && tableList?.length === 0 && <DataNotFound />}
			<Modal open={open} setOpen={setOpen}>
				<EditRecordForm setOpen={setOpen} recordData={recordData} />
			</Modal>
		</div>
	)
}

export default RecordList
