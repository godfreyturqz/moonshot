import React, { useState, useEffect, Suspense, lazy } from 'react'
// COMPONENTS
const EditRecordForm = lazy(() => import('@/pages/Form/EditRecordForm'))
// import EditRecordForm from '@/pages/Form/EditRecordForm'
// DUMMY
import { people } from './dummyData'
// ICONS
import EditIcon from '@/components/Icons/Pencil'
// LIBRARIES
import { nanoid } from 'nanoid'
// STYLED COMPONENTS
import { TableRow } from './TableRow'

type DataType = {
	id: string
	name: string
	email: string
	contact: string
	gender: string
	address: string
	select: boolean
}

const List = () => {
	const [open, setOpen] = useState(false)
	const [data, setData] = useState<DataType[]>([])
	const [editId, setEditId] = useState('')

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

	const handleCheckbox = (
		e: React.ChangeEvent<HTMLInputElement>,
		id: string
	) => {
		setData((prev) => {
			return prev.map((item) => {
				if (item.id === id) {
					return {
						...item,
						select: !item.select,
					}
				}

				return { ...item }
			})
		})
	}

	const handleEditModal = (id: string) => {
		setOpen((prev) => !prev)
		setEditId(id)
	}

	useEffect(() => {
		const newPeople = people.map((prev) => {
			return {
				...prev,
				id: nanoid(),
				select: false,
			}
		})

		setData((prev) => [...prev, ...newPeople])
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
									<TableRow key={item.id}>
										<Td>
											<input
												type="checkbox"
												checked={item.select}
												onChange={(e) => handleCheckbox(e, item.id)}
												className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
											/>
										</Td>
										<Td>{item.name}</Td>
										<Td>{item.email}</Td>
										<Td>{item.contact}</Td>
										<Td>{item.gender}</Td>
										<Td>{item.address.substring(0, 50)}...</Td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<button
												className="text-indigo-600 hover:text-indigo-900"
												onClick={() => handleEditModal(item.id)}
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
			<EditRecordForm open={open} setOpen={setOpen} id={editId} />
		</Suspense>
	)
}

export default List

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
