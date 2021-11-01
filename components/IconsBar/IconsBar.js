import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import Image from 'next/image'

export default function IconsBar () {
  return (
      <div className='IconsBar'>
        <ul className='IconsBar-list'>
          <li className='IconsBar-item'>
            <a href="https://github.com/JuanjoOrt" target='_blank' rel='noreferrer'><Image src={Github} height={30} width={30} className='IconsBar-icon'/></a>
          </li>
          <li className='IconsBar-item'>
            <a href="https://www.linkedin.com/in/juanjoseortizgamez/" target='_blank' rel='noreferrer'><Image src={Linkedin} height={30} width={30} /></a>
          </li>
          <li className='IconsBar-item'>
            <a href="https://twitter.com/JuanjoOrt_" target='_blank' rel='noreferrer'><Image src={Twitter} height={30} width={30} /></a>
          </li>
        </ul>
      </div>
  )
}
