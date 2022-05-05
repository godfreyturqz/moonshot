// COMPONENTS
import MainLayout from '@/components/Layouts/MainLayout'
// CONSTANTS
import { SIGN_IN } from '@/constants/routes'
// CONTEXT
import { AuthContextProvider } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Routes, Route } from 'react-router-dom'
import { AuthRoute } from '@/libraries/AuthRoute'
// PAGES
import Components from '@/pages/Components'
import CreateRecordForm from '@/pages/RecordForm/CreateRecordForm'
import Details from '@/pages/RecordDetails/RecordDetails'
import RecordList from '@/pages/RecordList/RecordList'
import Signin from '@/pages/SignIn'

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="components" element={<Components />} />
					<Route path={SIGN_IN} element={<Signin />} />

					<Route element={<AuthRoute />}>
						<Route path="dashboard" element={<div>dashboard page</div>} />
						<Route path="record-list" element={<RecordList />} />
						<Route path="record-form" element={<CreateRecordForm />} />
						<Route path="record-details" element={<Details />} />
					</Route>

					<Route path="*" element={<div>404 page</div>} />
				</Route>
			</Routes>
		</AuthContextProvider>
	)
}

export default App
