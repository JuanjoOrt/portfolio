import ExperienceComponent from '../../experienceComponent/ExperienceComponent'
import data from './data'

export default function Experience () {
  return (
    <section>
      <div className='container'>
        <ExperienceComponent data={data}/>
      </div>
      </section>
  )
}
