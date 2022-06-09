import { useEffect } from 'react'
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
import { SIGN_IN, DASHBOARD, SIGN_UP } from './constants/routes'
import SignUp from './pages/SignUp/SignUp'

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<Routes>
				{/* PROTECTED ROUTE */}
				<Route path="/" element={<AuthRoute />}>
					<Route element={<PersistLogin />}>
						<Route element={<MainLayout />}>
							<Route path="dashboard" element={<div>dashboard page</div>} />
							<Route path="record-list" element={<RecordList />} />
							<Route path="record-form" element={<CreateRecordForm />} />
							<Route path="record-details" element={<Details />} />
							<Route path="components" element={<Components />} />
						</Route>
					</Route>
				</Route>

				{/* PUBLIC ROUTE */}
				<Route path={SIGN_IN} element={<Signin />} />
				<Route path={SIGN_UP} element={<SignUp />} />

				{/* UNKNOWN ROUTE FALLBACK */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</AuthContextProvider>
	)
}

export default App
