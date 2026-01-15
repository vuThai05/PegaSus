import Image from "next/image"

interface PegasusLogoProps {
  className?: string
  size?: number
}

export function PegasusLogo({ className, size = 32 }: PegasusLogoProps) {
  return (
    <Image
      src="/file.svg"
      alt="Pegasus Logo"
      width={size}
      height={size}
      className={className}
    />
  )
}