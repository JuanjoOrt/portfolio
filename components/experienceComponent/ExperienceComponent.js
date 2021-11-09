
export default function ExperienceComponent ({ data }) {
  return <div className='experience-container'>
    <div className='experience-sidebar'>
      {data.map(company => <button key={company.id} className='experience-sidebar__item'>{company.title}</button>)}
    </div>
    <div className='experience-body'>
      <div className='experience-content'>
      </div>
    </div>
  </div>
}
