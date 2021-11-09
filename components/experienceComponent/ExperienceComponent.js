import { useState } from 'react'

export default function ExperienceComponent ({ data = [] }) {
  const [conpanySelected, setCompanySelected] = useState(data[0])

  const handleCkick = companyClicked => {
    setCompanySelected(companyClicked)
  }

  return <div className='experience-container'>
    <div className='experience-sidebar'>
      {data.map(company =>
        <button key={company.id} className='experience-sidebar__item' onClick={() => handleCkick(company)}>{company.title}</button>
      )}
    </div>
    <div className='experience-body'>
      <div className='experience-content'>
        <header className='experience-content__header'>{conpanySelected.date}</header>
        <div className='experience-content__body' dangerouslySetInnerHTML={{ __html: conpanySelected.description }}/>
        <footer className='experience-content__footer'>{conpanySelected.technologies.map((technology, index) =>
          <span key={index} className='experience-content__footer__item'>{technology}</span>
        )}</footer>
      </div>
    </div>
  </div>
}
