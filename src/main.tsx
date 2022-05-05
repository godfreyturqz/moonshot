import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// STYLES
import '@/styles/app.css'
import '@/styles/tailwind.css'
// LIBRARIES
import { HashRouter } from 'react-router-dom'
import { QueryProvider } from '@/libraries/QueryProvider'
// DEV
import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.render(
	<React.StrictMode>
		<QueryProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			<HashRouter>
				<App />
			</HashRouter>
		</QueryProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
