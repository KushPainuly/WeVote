import { Link } from 'react-router-dom';
import '../css/Vote.css';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';
const Howitworks = () => {
    return (
        <>
        <Navbar />
            <section className="section-padding how-it-works bg-theme-primary" style={{ backgroundColor: 'background-color: #f8f7f5', padding: '136px 0' }}>
                <div className="container">
                    <div className="section-header-style-2" >
                        <h6 className="text-light-green sub-title" style={{ color: '#141433' }}>Our Process</h6>
                        <h3 className="text-light-black header-title" style={{ color: '#000000de' }}>How Does It Work</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="how-it-works-box arrow-1">
                                <div className="how-it-works-box-inner"> <span className="icon-box">
                                    <Link to="/search"><img src="https://static.vecteezy.com/system/resources/previews/015/571/359/original/india-map-icon-vector.jpg" alt="icon" /></Link>
                                    <span className="number-box">01</span>
                                </span>
                                    <h6>Search</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="how-it-works-box arrow-2">
                                <div className="how-it-works-box-inner"> <span className="icon-box">
                                    <Link to="/search"><img classNameName="text-light" src="https://icon-library.com/images/choice-icon/choice-icon-5.jpg" alt="icon" /></Link>
                                    <span className="number-box">02</span>
                                </span>
                                    <h6>Select</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="how-it-works-box arrow-1">
                                <div className="how-it-works-box-inner"> <span className="icon-box">
                                    <Link to="/search"><img src="https://static.vecteezy.com/system/resources/previews/010/748/083/original/elections-icon-design-free-vector.jpg" alt="icon" /></Link>
                                    <span className="number-box">03</span>
                                </span>
                                    <h6>Vote</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="how-it-works-box">
                                <div className="how-it-works-box-inner"> <span className="icon-box">
                                    <Link to="/search"><img src="https://metropolitanhost.com/themes/themeforest/html/vitto/assets/img/how4.png" alt="icon" /></Link>
                                    <span className="number-box">04</span>
                                </span>
                                    <h6>Change</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Search />
            <Footer />
        </>
    )
};

export default Howitworks;