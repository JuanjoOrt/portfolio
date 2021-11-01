import Head from 'next/head'
import IconsBar from '../components/IconsBar/IconsBar'
import Home from '../components/pages/Home'

export default function Page () {
  return (
    <div>
      <Head>
        <title>Juanjo Ortiz</title>
      </Head>
      <IconsBar />
      <Home />
    </div>
  )
}
