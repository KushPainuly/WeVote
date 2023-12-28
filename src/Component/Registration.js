import { Link } from "react-router-dom";
import '../css/Vote.css';
import Footer from "./Footer";

const Registration = () => {
    return (
        <>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4" >
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://t3.ftcdn.net/jpg/04/18/84/78/360_F_418847816_XGQjWVdwKDhDyGVwdvdD3w9gyd0sXv3v.jpg"
                                            alt="Voting_Photo" className="img-fluid" style={{ borderTopLeftRadius: "0.25rem", borderBottomLeftRadius: "0.25rem", width: '90%', height: '90%' }} />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Register to stay up-to-date</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                            <label className="form-label">First name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                            <label className="form-label">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <select className="form-select">
                                                                <option value="1">--select your identity type--</option>
                                                                <option value="2">Voter ID</option>
                                                                <option value="3">Driving License</option>
                                                                <option value="4">Adhaar Card</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                                                            <label className="form-label">Identity Number</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example8" className="form-control form-control-lg" />
                                                    <label className="form-label">Address</label>
                                                </div>

                                                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                    <h6 className="mb-0 me-4">Gender: </h6>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="option1" />
                                                        <label className="form-check-label" >Female</label>
                                                    </div>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="option2" />
                                                        <label className="form-check-label" >Male</label>
                                                    </div>

                                                    <div className="form-check form-check-inline mb-0">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="option3" />
                                                        <label className="form-check-label" >Other</label>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">

                                                        <select className="form-select">
                                                            <option value="1">State</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <select className="form-select">
                                                            <option value="1">City</option>
                                                            <option value="2">Option 1</option>
                                                            <option value="3">Option 2</option>
                                                            <option value="4">Option 3</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example9" className="form-control form-control-lg" />
                                                    <label className="form-label">DOB</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example90" className="form-control form-control-lg" />
                                                    <label className="form-label">Pincode</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example99" className="form-control form-control-lg" />
                                                    <label className="form-label">Phone</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                                    <label className="form-label">Email ID</label>
                                                </div>

                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="button" className="btn btn-light btn-lg">Reset all</button>
                                                    <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                                                </div>
                                                <div className="text-center">
                                                    <p className="lead">Already Registered ?</p>
                                                    <Link to="/login" style={{ fontSize: '18px' }}>Login</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default Registration;