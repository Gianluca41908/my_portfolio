import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "dc76caab-62a7-4cb6-b3ac-365a2c74ac8b");
        formData.append("subject", "Nuovo messaggio dal portfolio");
        formData.append("from_name", "Portfolio Gianluca");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Your message has been sent!" : "Error");
        // console.log(data);
    };

    return (
        <main className="bg-p min-vh-100 font-p">
            <div className="container-fluid mt-5 pt-5">
                <div className="row justify-content-center ">
                    <div className="col-11 text-center d-flex justify-content-center">
                        <h1 className="text-a-glow">Contact Me</h1>
                    </div>
                    <div className="col-11 col-md-4 pt-5">
                        <ul className="list-unstyled d-flex flex-column gap-4">
                            <li>
                                <a
                                    href="mailto:tuo@email.com"
                                    className="text-decoration-none text-white d-flex align-items-center"
                                >
                                    <i className="bi bi-envelope fs-3 me-3" />
                                    gianluca.padolecchia@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+393425525272"
                                    className="text-decoration-none text-white d-flex align-items-center"
                                >
                                    <i className="bi bi-phone fs-3 me-3 " />
                                    +39 342 552 5272
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+393425525272"
                                    className="text-decoration-none text-white d-flex align-items-center"
                                >
                                    <i className="bi bi-geo-alt fs-3 me-3 " />
                                    Bari, Italy
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-11 col-md-4 pt-5">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <input type="text" name="name" required placeholder="Name" className="w-100 input-pers" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" required placeholder="E-mail" className="w-100 input-pers" />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Message"
                                    className="w-100 area-pers"
                                />
                            </div>
                            <input type="checkbox" name="botcheck" className="hidden d-none"></input>
                            <button type="submit" className="btn-pers">Send</button>
                            <p className="text-white mt-2 fs-3">{result}</p>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}