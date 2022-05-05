import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/styles/app.css'
import '@/styles/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from '@/libraries/QueryProvider'
import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.render(
	<React.StrictMode>
		<QueryProvider>
			<ReactQueryDevtools initialIsOpen={true} />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
