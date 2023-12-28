import { Link } from "react-router-dom";

const VoteForm1 = () => {
    return (
        <>
            <div style={{ backgroundImage: "url('https://image.shutterstock.com/image-photo/republic-independence-day-horizontal-background-260nw-2252132599.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 text-dark mb-3">Make Your Government,<br/> With just one Finger</h1>
                            <p className="col-lg-10 fs-4">Voting is the expression of our commitment to ourselves, one another, this country, and this world.</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Id</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Age</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <input type="checkbox" value="remember-me" />
                                    <label>  Agree to the <Link to="https://www.justice.gov/crt/title-52-voting-and-elections-subtitle-i-and-ii"> Terms & Conditions.</Link></label>
                                </div>
                                <hr className="my-4" />
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Vote</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default  VoteForm1;