
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" py-2 fixed w-full border-b border-b-secondary top-0 z-30 bg-primary">
      <Navbar />
    </header>
  )
}

export default Header