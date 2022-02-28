import styled from 'styled-components'

interface ButtonType {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    primary?: boolean
    secondary?: boolean
    padding? : string
}

const StyledButton = styled.button<ButtonType>`
    /* Initial */
    cursor: pointer;
    border: none;

    /* Appearance */
    padding: 6px 16px;
    border-radius: 16px;
    min-width: 128px;

    background-color: ${({ primary, secondary }) =>
        primary ? `var(--primary)` : null ||
        secondary ? `var(--secondary)` : null
    };

    /* Typography */
    color: ${props =>
        props.primary ? `var(--light)` : null ||
        props.secondary ? `var(--dark)` : null
    };
    font-weight: 500;

    /* Pseudo */
    &:hover{
        background-color: ${props =>
            props.primary ? `var(--primaryHover)` : null ||
            props.secondary ? `var(--secondaryHover)` : null
        };
        transition: 250ms;
    }
    
    &:active {
        background-color: ${props =>
            props.primary ? `var(--primaryActive)` : null ||
            props.secondary ? `var(--secondaryActive)` : null
        };
    }
`

const ButtonContainer = styled.div<ButtonType>`
    padding: ${({ padding }) => padding};
`

const Button: React.FC<ButtonType> = ({
    children,
    onClick,
    ...props
}) => {
    return (
        <ButtonContainer {...props}>
            <StyledButton
                onClick={onClick}
                {...props}
            >
                {children}
            </StyledButton>
        </ButtonContainer>
    )
}

export default Button
