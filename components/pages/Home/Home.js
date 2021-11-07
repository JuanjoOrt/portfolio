import Link from '../../Link/Link'

export default function Home () {
  return <section className='home-section'>
      <div className='container'>
        <div className='home-container'>
          <div className='home-subtitle'>HI, I’m</div>
          <div className='home-title'>Juanjo Ortiz</div>
          <div className='home-description'>Soy desarrollador Front-End con más de 3 años de experiencia. <br />
          Actualmente desarrollo aplicaciones enfocadas a facilitar el aprendizaje
          de los alumnos en <Link url={'https://www.ilerna.es'}>Ilerna</Link></div>
        </div>
      </div>
  </section>
}
