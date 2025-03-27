import Link from "next/link"
import IconButton from "@mui/material/IconButton"
import Image from "next/image"
import { IconButtonCustomProps } from "./IconButtonCustom.props"

export function IconButtonCustom({ iconSrc, href, ...props }: IconButtonCustomProps & { href?: string }) {
  const buttonContent = (
    <IconButton disableRipple color="primary" {...props}>
      {iconSrc ? <Image src={iconSrc} alt={props["aria-label"] || "icon"} width={24} height={24} /> : null}
    </IconButton>
  )

  return href ? (
    <Link href={href} passHref legacyBehavior>
      <a>{buttonContent}</a>
    </Link>
  ) : (
    buttonContent
  )
}

export default IconButtonCustom
