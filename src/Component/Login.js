import { Link } from 'react-router-dom';
import '../css/Vote.css';
import loginphoto from '../Images/hand-with-voting-sign-of-india-vector-2041705.jpg';
import Footer from './Footer';
const Login = () => {
    return (
        <>
            <section className="vh-100" style={{backgroundColor: 'lightblue'}}>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={loginphoto}
                                className="img-fluid" style={{boxShadow: "0px 22px 24px grey"}} alt="Sampleimage"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fa fa-facebook"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fa fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fa fa-linkedin"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label">Email address</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Login;