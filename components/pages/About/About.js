import Image from 'next/image'
import ProfilePicture from '../../../assets/juanjo_profile_picture.png'

export default function About () {
  return <section>
    <div className='container'>
        <div className='container-about'>
            <div className='container-text'>
                <div className='container-text__title'>
                    About me!
                </div>
                <div className='container-text__description'>
                    Hola ⚡! Me llamo Juanjo. Me gusta definirme como una persona detallista, observadora y metódica. Hace unos años tuve la oportunidad de mudarme a Madrid y comenzar mi carrera profesional en el mundo del desarrollo.  <br /><br />
                    Todo comenzó en Sevilla, una de las ciudades con más personalidad y cultura en las que he estado ( pero claro, todo esto te lo dice un sevillano orgulloso de su origen 😊 ). En mi adolescencia comencé a entender cómo funcionaba internet y pronto descubrí la posibilidad de realizar webs y aportar a la comunidad. <br /><br />
                    Mi etapa como estudiante fue el momento perfecto para hacerme preguntas y aprender. Tuve la oportunidad de hacer Erasmus en Polonia e Irlanda, lugares donde pude aún más descubrir nuevas formas de vida y gente diferente.<br /><br />
                    Actualmente tengo la oportunidad de dedicarme laboralmente a una profesión que me encanta y me permite seguir mejorando como persona.🤗
                </div>
            </div>
            <div className='container-picture'>
                <Image src={ProfilePicture} height={280} width={280} className='profile-picture'/>
            </div>
        </div>
    </div>
</section>
}
