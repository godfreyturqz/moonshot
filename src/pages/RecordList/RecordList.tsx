import { useState, useEffect } from 'react'
// LIBRARIES
import { useQuery } from 'react-query'
// COMPONENTS
import EditRecordForm from '@/pages/RecordForm/EditRecordForm'
import Modal from '@/components/Modal/Modal'
// SUB-COMPONENTS
import DataNotFound from './sub-components/DataNotFound'
import SearchField from './sub-components/SearchField'
import SkeletonLoader from './sub-components/SkeletonLoader'
// SERVICES
import useRecordService from '@/services/useRecordService'
// TYPES
import { RecordData } from '@/types/record.types'
// UTILS
import useSort from '@/utils/useSort'

type RecordTableRow = RecordData & {
	isSelected: boolean
}

const RecordList: React.FC = () => {
	// for listing the records
	const { getRecords } = useRecordService()
	const { data: recordList, isLoading } = useQuery('RECORDS', getRecords)
	const [tableList, setTableList] = useState<RecordTableRow[]>([])
	// for sorting
	const { handleSort } = useSort()
	const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC')
	// for edit modal form
	const [open, setOpen] = useState(false)
	const [recordData, setRecordData] = useState<RecordTableRow>()

	const handleEditRecordModalForm = (uid: string) => {
		setOpen(true)
		const data = tableList.find((item) => item.uid === uid)
		setRecordData(data)
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

	// const handleSort = (
	// 	dataList: RecordTableRow[],
	// 	sortKey: keyof RecordTableRow
	// ) => {
	// 	// Initially sort the data
	// 	const sortedData = dataList.sort((a, b) => {
	// 		return a[sortKey] > b[sortKey] ? 1 : -1
	// 	})

	// 	if (sortOrder === 'ASC') {
	// 		setSortOrder('DESC')
	// 		setTableList(() => [...sortedData])
	// 	} else {
	// 		setSortOrder('ASC')
	// 		const reversedData = sortedData.reverse()
	// 		setTableList(() => [...reversedData])
	// 	}
	// }

	useEffect(() => {
		// add 'isSelected' property for checkbox logics
		const newRecords = recordList?.map((prev) => ({
			...prev,
			isSelected: false,
		}))
		newRecords && setTableList(() => [...newRecords])
		console.log('log@RecordList.tsx', newRecords)
	}, [recordList])

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<SearchField />
			<table className="w-full text-sm text-left text-gray-500">
				<thead className="text-xs text-gray-200 uppercase bg-gray-700 cursor-default">
					<tr>
						<th scope="col" className="p-4 w-4">
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
									type="checkbox"
									onChange={handleAllCheckbox}
								/>
								<label htmlFor="checkbox-all-search" className="sr-only">
									checkbox
								</label>
							</div>
						</th>
						<th
							className="px-6 py-3"
							onClick={() => setTableList(handleSort(tableList, 'firstName'))}
						>
							Name
						</th>
						<th
							className="px-6 py-3"
							onClick={() => handleSort(tableList, 'email')}
						>
							Email
						</th>
						<th
							className="px-6 py-3"
							onClick={() => handleSort(tableList, 'contact')}
						>
							Contact
						</th>
						<th
							className="px-6 py-3"
							onClick={() => handleSort(tableList, 'gender')}
						>
							Gender
						</th>
						<th
							className="px-6 py-3"
							onClick={() => handleSort(tableList, 'houseNumber')}
						>
							Address
						</th>
						<th
							className="px-6 py-3"
							onClick={() => handleSort(tableList, 'createdAt')}
						>
							Created At
						</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<SkeletonLoader />
					) : (
						tableList?.map((item) => (
							<tr
								key={item.uid}
								className="bg-white border-b hover:bg-gray-200 cursor-pointer"
								onClick={() => handleEditRecordModalForm(item.uid)}
							>
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-1"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
											checked={item.isSelected}
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
								<td className="px-6 py-4">
									{new Date(item.createdAt).toLocaleDateString()} -{' '}
									{new Date(item.createdAt).toLocaleTimeString()}
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
			{!isLoading && tableList?.length === 0 && <DataNotFound />}
			<Modal open={open} setOpen={setOpen}>
				<EditRecordForm setOpen={setOpen} recordData={recordData} />
			</Modal>
		</div>
	)
}

export default RecordList
