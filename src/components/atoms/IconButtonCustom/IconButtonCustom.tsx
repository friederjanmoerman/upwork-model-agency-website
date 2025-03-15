import IconButton from "@mui/material/IconButton"
import { IconButtonCustomProps } from "./IconButtonCustom.props"

import Image from "next/image"

export function IconButtonCustom({ iconSrc, ...props }: IconButtonCustomProps) {
  return (
    <IconButton disableRipple color="primary" {...props}>
      {iconSrc ? <Image src={iconSrc} alt={props["aria-label"] || "icon"} width={50} height={50} /> : null}
    </IconButton>
  )
}

export default IconButtonCustom
