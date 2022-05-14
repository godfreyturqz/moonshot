import styled from 'styled-components'

export const TableRow = styled.tr`
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	td:last-child {
		visibility: hidden;
		width: 0;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);

		td:last-child {
			visibility: visible;
		}
	}
`
