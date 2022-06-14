import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// STYLES
import '@/styles/app.css'
import '@/styles/tailwind.css'
// LIBRARIES
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from '@/libraries/QueryProvider'
// DEV
import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.render(
	<React.StrictMode>
		<QueryProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
