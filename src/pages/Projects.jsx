import Card from "../components/Card";
import reactplay from '../assets/ReactPlay.png'
import rehacktor from '../assets/Rehacktor.png'
import rebuy from '../assets/rebuy.png'
import creditflow from '../assets/Creditflow.png'
import prova from '../assets/prova.jpg'
import { useState } from "react";
import Modal from "../components/Modal";
import { title } from "framer-motion/client";

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <main className="bg-p min-vh-100 font-p">
            <div className="container-fluid">
                <div className="row w-100 mx-0 justify-content-center">
                    <div className="col-11 justify-content-center">
                        <h1 className="text-center mt-5 pt-5 mb-5 text-a-glow">Projects</h1>
                    </div>
                    {/* <h1 className="text-center">WORK IN PROGRESS...</h1> */}
                    <div className="col-12 col-md-3 d-flex justify-content-center">
                        <Card
                            onClick={() =>
                                setSelectedProject({
                                    id: '01',
                                    title: 'ReHacktor',
                                    body: 'Web app developed with React that allows users to explore video games, view their details, and save favorites in their profile. First version with supabase.',
                                    technologies: 'HTML, CSS, Bootstrap, JS, React, Supabase',
                                    image: rehacktor
                                })
                            }
                            id={'01'}
                            title={'ReHacktor'}
                            technologies={'HTML, CSS, Bootstrap, Js, React, Supabase '}
                            image={rehacktor}
                        />
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center">
                        <Card
                            onClick={() =>
                                setSelectedProject({
                                    id: '02',
                                    title: 'ReactPlay',
                                    body: 'Web app developed with React that allows users to explore video games, view their details, and save favorites in their profile. Second version with better graphic and local storage',
                                    technologies: 'HML, CSS, Bootstrap, Js, React, Local Storage',
                                    image: reactplay
                                })
                            }
                            id={'02'}
                            title={'ReactPlay'}
                            technologies={'HML, CSS, Bootstrap, Js, React, Local Storage'}
                            image={reactplay}
                        />
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center">
                        <Card
                            onClick={() =>
                                setSelectedProject({
                                    id: '03',
                                    title: 'ReBuy',
                                    body: 'A Laravel-based platform for classifieds, where users can create, view, and manage advertisements in a simple and user-friendly interface.',
                                    technologies: 'HML, CSS, Bootstrap, PHP, Laravel, MySQL',
                                    image: rebuy
                                })
                            }
                            id={'03'}
                            title={'ReBuy'}
                            technologies={'HML, CSS, Bootstrap, PHP, Laravel, MySQL'}
                            image={rebuy}
                        />
                    </div>
                    <div className="col-12 col-md-3 d-flex justify-content-center">
                        <Card
                            onClick={() =>
                                setSelectedProject({
                                    id: '04',
                                    title: 'CreditFlow',
                                    body: 'A Node.js and React-based platform for managing client practices, where users can create, view, and organize practices with filtering, sorting, and detailed information in a clean and user-friendly interface.',
                                    technologies: 'HML, CSS, Bootstrap, Js, React, NodeJS, Express, MySQL',
                                    image: creditflow
                                })
                            }
                            id={'04'}
                            title={'CreditFlow'}
                            technologies={'HML, CSS, Js, Bootstrap, React, NodeJS, Express, MySQL'}
                            image={creditflow}
                        />
                    </div>
                    <Modal
                        isOpen={selectedProject !== null}
                        onClose={() => setSelectedProject(null)}
                    >

                        {selectedProject && (
                            <>
                                <img src={selectedProject.image} width="90%" />
                                <h2>{selectedProject.title}</h2>
                                <p>{selectedProject.technologies}</p>
                                <p>{selectedProject.body}</p>
                            </>
                        )}

                    </Modal>
                </div>
            </div>
        </main>
    )
}