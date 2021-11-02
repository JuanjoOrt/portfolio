import Link from '../Link/Link'

export const SideMenu = () => {
  return (
    <ul className='sideMenu-list'>
       <li className='sideMenu-item'><Link className='color-white'>Home</Link></li>
       <li className='sideMenu-item'><Link className='color-white'>About</Link></li>
       <li className='sideMenu-item'><Link className='color-white'>Experiencia</Link></li>
       <li className='sideMenu-item'><Link className='color-white'>Contactame!</Link></li>
    </ul>
  )
}
