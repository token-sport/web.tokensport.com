import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import theme from 'theme'

const container = storyFn => (
	<ThemeProvider theme={theme}>
		<Router>
			{storyFn()}
		</Router>
	</ThemeProvider>
)

export default container
