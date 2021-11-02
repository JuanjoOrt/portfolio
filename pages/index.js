import Head from 'next/head'
import IconsBar from '../components/IconsBar/IconsBar'
import About from '../components/pages/About/About'
import Home from '../components/pages/Home/Home'
import { SideMenu } from '../components/SideMenu/SideMenu'

export default function Page () {
  return (
    <div>
      <Head>
        <title>Juanjo Ortiz</title>
      </Head>
      <IconsBar />
      <SideMenu />
      <Home />
      <About />
    </div>
  )
}
