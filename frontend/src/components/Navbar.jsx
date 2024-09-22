import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import { FaPencilAlt } from "react-icons/fa";
import '../styles/Navbar.css'

  const Navbar = () => {
    return (
      <div className='navbar'>
        <div>
          <Link className='title' href={'/home'}>Crowdfund</Link>
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <Button className='create_campaign' colorScheme='blue'><FaPencilAlt />Create Campaign</Button>
          <Button className='connect_wallet' colorScheme='blue'><FaPencilAlt />Connect Wallet</Button>
        </div>
      </div>
    )
  }
  
  export default Navbar