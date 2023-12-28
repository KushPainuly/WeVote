import { Link } from "react-router-dom";
import Footer from "./Footer";
import '../css/Vote.css';
import Navbar from "./Navbar";


const Home = () => {
    return (
        <>
            <Navbar />
            <main className="content">
                <div id="myCarousel" className=" container-fluid carousel slide mb-6" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Cover_photo_of_the_Bharatiya_Janata_Party%27s_election_manifesto_for_2014_Indian_general_elections.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Acche Din Aane Wale Hain</h1>
                                    <p className="opacity-75">The Goods are Coming Soon</p>
                                    <p><Link className="btn btn-lg btn-primary" to="https://www.bjp.org/home">Learn More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://cdn.siasat.com/wp-content/uploads/2019/12/Congress-logo-780x470.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1 className="text-dark"><b>Garibi Hatao Desh Bacha</b></h1>
                                    <p className="text-dark">Remove poverty, save the country</p>
                                    <p><Link className="btn btn-lg btn-primary" to="https://www.inc.in/">Learn more</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://pbs.twimg.com/media/EyME-KJUYAAR1ij.jpg:large" alt="" style={{ width: '100%', height: '100%' }} />
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>AAPka Jhadhu AAPka Naraa</h1>
                                    <p>This is your fight</p>
                                    <p><Link className="btn btn-lg btn-primary" to="https://aamaadmiparty.org/signup/">Learn More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container marketing">

                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-4">
                            <img src="https://www.pmindia.gov.in/wp-content/uploads/2022/07/default_Thumbnails-04.jpg" className="bd-placeholder-img rounded-circle" alt="" style={{ width: '60%', height: '60%' }} />
                            <h2 className="fw-normal">Narendra Modi</h2>
                            <p>Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014.</p>
                            <p><Link className="btn btn-secondary" to="/voteform">Vote</Link></p>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://cdn.telanganatoday.com/wp-content/uploads/2023/06/Manmohan-Singh-23.jpg" className="bd-placeholder-img rounded-circle" alt="" style={{ width: '60%', height: '60%' }} />
                            <h2 className="fw-normal">Dr. Manmohan Singh</h2>
                            <p>Dr.Manmohan Singh is an Indian politician, economist, academician and bureaucrat who served as the 13th Prime Minister of India from 2004 to 2014. </p>
                            <p><Link className="btn btn-secondary" to="/voteform1">Vote</Link></p>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://www.livemint.com/lm-img/img/2023/09/18/1600x900/Delhi-chief-minister-Arvind-Kejriwal_1693915315011_1695035526173.jpg" className="bd-placeholder-img rounded-circle" alt="" style={{ width: '60%', height: '60%' }} />
                            <h2 className="fw-normal">Arvind Kejriwal</h2>
                            <p>Arvind Kejriwal is an Indian politician, activist and former bureaucrat, who is serving as the 7th and current Chief Minister of Delhi since 2015 and from 2013 to 2014.</p>
                            <p><Link className="btn btn-secondary" to="voteform3">Vote</Link></p>
                        </div>
                    </div>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <hr className="featurette-divider" />
                        <div className="back">
                            <div className="flex">
                                <div className="left"></div>
                                <div className="right">
                                    <h2 className="featurette-heading fw-bold lh-1 ">Bharatya Janta Party (BJP) <span className="fw-bold" style={{ display: 'block', marginLeft: '25px', marginTop: '4px' }}>"Nai Soch, Nai Umeed</span><span className="fw-bold" style={{ display: 'block' }}>Ab Acche din Aane Wale Hain"</span></h2>
                                    <p className="lead fw-bold">
                                        Born on <b>September 17, 1950, in Vadnagar, Gujarat.</b><br />
                                        Entered mainstream politics in the 1980s.<br />
                                        Member of the Bharatiya Janata Party (BJP),<br /> a <b>right-wing political party</b> in India.<br />
                                        Served as the Chief Minister of Gujarat in the late 1990s.<br />
                                        Led <b>the BJP to victory in the 2014 Indian general elections.</b><br />
                                        Became the <b>14th Prime Minister of India</b>.<br />
                                        Launched initiatives like<br /> <b>"Make in India," "Digital India,"</b> and <b>"Swachh Bharat Abhiyan."</b><br />
                                        Secured a decisive victory in the 2019 Indian general elections.<br />
                                        His leadership has made him a prominent figure in international politics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <hr className="featurette-divider" />
                        <div className="back2">
                            <div className="flex">
                                <div className="left"></div>
                                <div className="right">
                                    <h2 className="featurette-heading fw-bold lh-1 ">Bharatya Janta Party (BJP) <span className="fw-bold" style={{ display: 'block', marginLeft: '25px', marginTop: '4px' }}>"Nai Soch, Nai Umeed</span><span className="fw-bold" style={{ display: 'block' }}>Ab Acche din Aane Wale Hain"</span></h2>
                                    <p className="lead fw-bold">
                                        Born on <b>September 17, 1950, in Vadnagar, Gujarat.</b><br />
                                        Entered mainstream politics in the 1980s.<br />
                                        Member of the Bharatiya Janata Party (BJP),<br /> a <b>right-wing political party</b> in India.<br />
                                        Served as the Chief Minister of Gujarat in the late 1990s.<br />
                                        Led <b>the BJP to victory in the 2014 Indian general elections.</b><br />
                                        Became the <b>14th Prime Minister of India</b>.<br />
                                        Launched initiatives like<br /> <b>"Make in India," "Digital India,"</b> and <b>"Swachh Bharat Abhiyan."</b><br />
                                        Secured a decisive victory in the 2019 Indian general elections.<br />
                                        His leadership has made him a prominent figure in international politics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <hr className="featurette-divider" />
                        <div className="back3">
                            <div className="flex">
                                <div className="left2">
                                <h2 className="featurette-heading fw-bold lh-1 ">Bharatya Janta Party (BJP) <span className="fw-bold" style={{ display: 'block', marginLeft: '25px', marginTop: '4px' }}>"Nai Soch, Nai Umeed</span><span className="fw-bold" style={{ display: 'block' }}>Ab Acche din Aane Wale Hain"</span></h2>
                                    <p className="lead fw-bold">
                                        Born on <b>September 17, 1950, in Vadnagar, Gujarat.</b><br />
                                        Entered mainstream politics in the 1980s.<br />
                                        Member of the Bharatiya Janata Party (BJP),<br /> a <b>right-wing political party</b> in India.<br />
                                        Served as the Chief Minister of Gujarat in the late 1990s.<br />
                                        Led <b>the BJP to victory in the 2014 Indian general elections.</b><br />
                                        Became the <b>14th Prime Minister of India</b>.<br />
                                        Launched initiatives like<br /> <b>"Make in India," "Digital India,"</b> and <b>"Swachh Bharat Abhiyan."</b><br />
                                        Secured a decisive victory in the 2019 Indian general elections.<br />
                                        His leadership has made him a prominent figure in international politics.
                                    </p>
                                </div>
                                <div className="right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Home;