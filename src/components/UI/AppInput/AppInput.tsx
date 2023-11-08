import { StyledInput } from "./AppInput.style"

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const AppInput = ({type, placeholder}: IAppInputProps) => {
  return (
    <StyledInput type={type} placeholder={placeholder} />
  )
}