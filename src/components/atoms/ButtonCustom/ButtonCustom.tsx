import { ButtonProps } from "@mui/material"
import { StyledButton } from "./ButtonCustom.styles"

export function ButtonCustom(props: ButtonProps) {
  return <StyledButton {...props} />
}

export default ButtonCustom
