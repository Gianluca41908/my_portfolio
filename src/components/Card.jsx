import prova from '../assets/prova.jpg'

export default function Card() {
    return (
        <div className="my-card">
            <div className='text-white'>
                <h1 className='mb-3 fw-bold'>01</h1>
                <h2 className='mb-3 fw-bold'>ReactPlay</h2>
                <h4>Technologies used</h4>
                <p className='fw-lighter'>HTML, CSS, JavaScript</p>
            </div>
            <img src={prova} alt="anteprima-sito" className='img-card' />

        </div>
    )
}