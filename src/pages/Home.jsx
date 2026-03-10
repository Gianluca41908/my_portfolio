import myphoto from '../assets/myphoto.png'
import BlurText from '../components/BlurText';
import GlitchText from '../components/GlitchText';


export default function Home() {

    return (
        <main className="bg-p min-vh-100 d-flex align-items-start align-items-md-center justify-content-center font-p">
            <div className="container-fluid h-100 mt-5 mt-md-0 pt-5 pt-md-0">
                <div className="row w-100 justify-content-center">
                    <div className="col-1 d-none d-md-flex flex-column justify-content-center">
                        <a
                            href="https://www.linkedin.com/in/gianluca-padolecchia-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vai a profilo Linkedin"
                            className='mb-3 social-link bi bi-linkedin text-white fs-3'
                        />

                        <a
                            href="https://github.com/Gianluca41908?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vai a profilo GitHub"
                            className='social-link bi bi-github text-white fs-3'
                        />
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-center">
                        <h3 className='text-white text-end'>Hello, i'm</h3>
                        <GlitchText
                            speed={1.5}
                            enableShadows={true}
                            enableOnHover={false} className="text-a-glow fs-1 text-end" >Gianluca</GlitchText>
                    </div>
                    <div className="col-1 d-flex d-md-none flex-column justify-content-center ps-3">
                        <a
                            href="https://www.linkedin.com/in/gianluca-padolecchia-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vai a profilo Linkedin"
                            className='mb-3 social-link bi bi-linkedin text-white fs-3'
                        />

                        <a
                            href="https://github.com/Gianluca41908?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vai a profilo GitHub"
                            className='social-link bi bi-github text-white fs-3'
                        />
                    </div>
                    <div className="col-11 col-md-4">
                        <div className="photo-wrapper">
                            <img src={myphoto} alt="" className='photo' />
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center">
                        <h3 className='text-white'>Junior</h3>
                        {/* <h1 className='text-a-glow'>Web Developer</h1> */}
                        <BlurText
                            text="Web Developer"
                            animateBy="letters"
                            direction="top"
                            className="text-a-glow fs-1 font-bold"
                        />
                    </div>

                </div>
            </div>
        </main>
    );
}