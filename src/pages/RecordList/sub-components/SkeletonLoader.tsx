const SkeletonLoader = () => {
	const rowNumber = 10
	const rows = []
	for (let index = 0; index < rowNumber; index++) {
		rows.push(
			<tr key={index} className="bg-white border-b animate-pulse h-5">
				<td className="p-4 w-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
				<td className="p-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
				<td className="p-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
				<td className="p-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
				<td className="p-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
				<td className="p-4">
					<div className="bg-slate-300 rounded p-2"></div>
				</td>
			</tr>
		)
	}

	return <>{rows}</>
}

export default SkeletonLoader
