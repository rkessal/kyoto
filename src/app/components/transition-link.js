import Link from "next/link"

const TransitionLink = ({ children, onClick, ...props }) => {
  return <Link onClick={onClick} {...props}>{children}</Link>
}

export default TransitionLink