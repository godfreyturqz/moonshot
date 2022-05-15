// COMPONENTS
import MainLayout from '@/components/Layouts/MainLayout'
// CONTEXT
import { AuthContextProvider } from '@/contexts/AuthContextProvider'
// LIBRARIES
import { Routes, Route } from 'react-router-dom'
import { AuthRoute } from '@/libraries/AuthRoute'
import PersistLogin from '@/libraries/PersistLogin'
// PAGES
import Components from '@/pages/Components'
import CreateRecordForm from '@/pages/RecordForm/CreateRecordForm'
import Details from '@/pages/RecordDetails/RecordDetails'
import PageNotFound from '@/pages/PageNotFound/PageNotFound'
import RecordList from '@/pages/RecordList/RecordList'
import Signin from '@/pages/SignIn/SignIn'
import { SIGN_IN } from './constants/routes'

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					{/* PUBLIC ROUTE */}
					<Route path="components" element={<Components />} />
					<Route path={SIGN_IN} element={<Signin />} />

					{/* PROTECTED ROUTE */}
					<Route element={<PersistLogin />}>
						<Route element={<AuthRoute />}>
							<Route path="dashboard" element={<div>dashboard page</div>} />
							<Route path="record-list" element={<RecordList />} />
							<Route path="record-form" element={<CreateRecordForm />} />
							<Route path="record-details" element={<Details />} />
						</Route>
					</Route>

					{/* UNKNOWN ROUTE FALLBACK */}
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</AuthContextProvider>
	)
}

export default App
