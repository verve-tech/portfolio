import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Container({ children }: Props) {
  return <div className="mx-auto max-w-320 px-5">{children}</div>
}

export default Container
