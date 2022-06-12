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
import SignIn from '@/pages/SignIn/SignIn'
import SignOut from '@/pages/SignOut/SignOut'
import {
	INDEX,
	SIGN_IN,
	DASHBOARD,
	SIGN_UP,
	SIGN_OUT,
	RECORD_LIST,
	RECORD_FORM,
	RECORD_DETAILS,
	COMPONENTS,
} from './constants/routes'
import SignUp from './pages/SignUp/SignUp'

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<Routes>
				{/* PROTECTED ROUTE */}
				<Route path={INDEX} element={<PersistLogin />}>
					<Route element={<AuthRoute />}>
						<Route element={<MainLayout />}>
							<Route path={DASHBOARD} element={<div>dashboard page</div>} />
							<Route path={RECORD_LIST} element={<RecordList />} />
							<Route path={RECORD_FORM} element={<CreateRecordForm />} />
							<Route path={RECORD_DETAILS} element={<Details />} />
							<Route path={COMPONENTS} element={<Components />} />
						</Route>
					</Route>
				</Route>

				{/* PUBLIC ROUTE */}
				<Route path={SIGN_IN} element={<SignIn />} />
				<Route path={SIGN_OUT} element={<SignOut />} />
				<Route path={SIGN_UP} element={<SignUp />} />

				{/* UNKNOWN ROUTE */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</AuthContextProvider>
	)
}

export default App
