import { ComponentProps } from 'react'

function Hamburger(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="34"
      height="28"
      viewBox="0 0 34 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="34" height="4" rx="2" fill="white" />
      <rect y="12" width="34" height="4" rx="2" fill="white" />
      <rect y="24" width="34" height="4" rx="2" fill="white" />
    </svg>
  )
}

export default Hamburger
