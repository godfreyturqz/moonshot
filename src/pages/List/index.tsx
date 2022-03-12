import { people } from './dummyData'


  
const List = () => {


    return (
        <div className="flex flex-col">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <Th>
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
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
                            { people.map((person) => (
                                <tr key={person.name}>
                                    <Td>
                                        <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                    </Td>
                                    <TdName>{person.name}</TdName>
                                    <Td>{person.email}</Td>
                                    <Td>{person.contact}</Td>
                                    <Td>{person.gender}</Td>
                                    <Td>{person.address}</Td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default List


const Th: React.FC = ({children}) => {
    return(
        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
            {children}
        </th>
    )
}

const Td: React.FC = ({children}) => {
    return(
        <td className="px-6 py-4 text-gray-500 text-sm">
            {children}
        </td>
    )
}

const TdName: React.FC = ({children}) => {
    return(
        <td className="px-6 py-4 text-sm">
            {children}
        </td>
    )
}