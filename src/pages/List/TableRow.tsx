import styled from 'styled-components'

export const TableRow = styled.tr`
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	td:last-child {
		visibility: hidden;
		/* width: 1rem; */
		/* position: relative; */
		/* right: 1rem; */
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);

		td:last-child {
			visibility: visible;
		}
	}
`
