import { useState } from 'react'
import Logo from '../components/LandingLogo'
import Historias from '../components/LandingHistorias'
import Video from '../components/LandingVideo'
import Ticket from '../components/LandingTicket'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <Logo />
      <div style={{ height: '100vh', width: '100%', backgroundColor: 'transparent', position: 'relative', zIndex: "0" }}></div>
      <Video />
      <Historias />
      <Ticket />
    </div>
  )
}

export default Landing
