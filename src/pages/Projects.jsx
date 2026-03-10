import Card from "../components/Card";

export default function Projects() {

    return (
        <main className="bg-p min-vh-100 font-p">
            <div class="container-fluid">
                <div class="row w-100 mx-0 justify-content-center">
                    <div class="col-11 justify-content-center">
                        <h1 className="text-center mt-5 pt-5 mb-5 text-a-glow">Projects</h1>
                    </div>
                    <div class="col-12 col-md-3 d-flex justify-content-center">
                        <Card />
                    </div>
                    <div class="col-12 col-md-3 d-flex justify-content-center">
                        <Card />
                    </div>
                    <div class="col-12 col-md-3 d-flex justify-content-center">
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    )
}