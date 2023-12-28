import Navbar from "./Navbar";
import '../css/Vote.css';


const Helpline = () => {
    return (
        <>
            <Navbar />
            <div className="container col-xxl-8 px-4 py-5">
                <div className="content3 row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <texarea className="form-control" rows="5"></texarea>
                                <label>Your Message</label>
                            </div>
                            <hr className="my-4" />
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Feel Free to Land us a Message !</h1>
                        <div className="card" style={{ width: "18rem" }}>
                            
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Helpline;