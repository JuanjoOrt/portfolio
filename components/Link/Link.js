
export default function Link ({ url, children, className }) {
  return (
  <div className='link'>
        <a href={url} className={'link ' + className} target='_blank' rel='noreferrer'>{children}</a>
        <div className='link-border' />
  </div>
  )
}
