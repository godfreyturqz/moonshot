import { useState } from 'react'

const useSort = () => {
	const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC')

	const handleSort = <T>(dataList: T[], sortKey: keyof T) => {
		// Initially sort the data
		const sortedData = dataList.sort((a, b) => {
			return a[sortKey] > b[sortKey] ? 1 : -1
		})

		if (sortOrder === 'ASC') {
			setSortOrder('DESC')
			return [...sortedData]
		} else {
			setSortOrder('ASC')
			const reversedData = sortedData.reverse()
			return [...reversedData]
		}
	}

	return {
		handleSort,
	}
}

export default useSort
