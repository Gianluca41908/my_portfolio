import { Link } from 'react-router-dom';
import fototessera from '../assets/FOTOTESSERA.png';
import cv from '../assets/cv.pdf';
import { motion } from 'framer-motion';

export default function About() {

    const icons = [
        'devicon-html5-plain-wordmark colored',
        'devicon-css3-plain-wordmark colored',
        'devicon-bootstrap-plain colored',
        'devicon-javascript-plain colored',
        'devicon-react-original colored',
        'devicon-php-plain colored',
        'devicon-laravel-original colored',
    ];

    const iconVariants = {
        hidden: { filter: 'blur(10px)', opacity: 0, y: -50 },
        visible: (i) => ({
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
            }
        })
    };

    return (
        <main className="bg-p font-p d-flex flex-column min-vh-100">

            {/* <h1 className="text-a-glow text-center pt-5 mt-5 mb-5 mb-md-0">About me</h1> */}

            <div className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center align-items-center w-100">
                    <div className="col-11 col-md-4 d-flex justify-content-center">
                        <div className="rounded-circle bg-p circle-img mt-5 mt-md-0">
                            <img src={fototessera} alt="Gianluca Padolecchia" className="w-100 rounded-circle" />
                        </div>
                    </div>

                    <div className="col-11 col-md-4 pt-5 pt-md-0 text-white">
                        <h3>Hi, i'm a Web Developer</h3>
                        <h1 className='text-a-glow'>Gianluca Padolecchia</h1>
                        <p className='fs-4'>Junior Web Developer based in Bari, Italy. I like to code and learn new things.</p>
                        <a href={cv} download="Gianluca_Padolecchia_CV.pdf">
                            <button className='btn-pers ms-0'>Download CV</button>
                        </a>
                        <Link to="/projects">
                            <button className='btn-pers ms-0 ms-md-2'>Projects</button>
                        </Link>
                        <h3 className='mt-2'>My Skills</h3>
                        <div className='d-flex flex-wrap gap-2'>
                            {icons.map((icon, i) => (
                                <motion.i
                                    key={i}
                                    className={`${icon} fs-1`}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={iconVariants}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}