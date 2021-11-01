import Head from 'next/head'
import IconsBar from '../components/IconsBar/IconsBar'
import About from '../components/pages/About/About'
import Home from '../components/pages/Home/Home'

export default function Page () {
  return (
    <div>
      <Head>
        <title>Juanjo Ortiz</title>
      </Head>
      <IconsBar />
      <Home />
      <About />
    </div>
  )
}
