import prova from '../assets/prova.jpg'

export default function Card({id, title, technologies, body, image, onClick}) {
    return (
        <div className="my-card" onClick={onClick}>
            <div className='text-white'>
                <h1 className='mb-3 fw-bold'>{id}</h1>
                <h2 className='mb-3 fw-bold'>{title}</h2>
                <h4>Technologies used</h4>
                <p className='fw-lighter'>{technologies}</p>
            </div>
            <img src={image} alt="anteprima-sito" className='img-card' />

        </div>
    )
}