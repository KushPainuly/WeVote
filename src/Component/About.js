import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/Vote.css';
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <section className=" content2 py-5 text-center container" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1307211587/vector/blue-star-vector-background-american-banner-patriotic-pattern.jpg?s=612x612&w=0&k=20&c=s3OdDHg953ADPIKF5mOnLjBwUqztZvH29vFdlekEfak=')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="row py-lg-5 text-light" style={{ marginTop: '80px' }}>
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <p className="lead" style={{ fontSize: '30px' }}>About LetsVote</p>
                        <h3 className="fw-light">
                            <Link style={{ color: 'white' }} to="/home">Home</Link> /
                            <h3 className="fw-light" style={{ display: "inline-block" }}> About</h3>
                        </h3>
                    </div>
                </div>
            </section>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Why Voting is Neccessary?</h1>
                        <p className="lead">
                            The power to vote for your country is an important part of a democratic country like India. While many in our country are eligible to cast vote, few are enthusiastic about it.
                            <ul className="fw-bold">Reasons to Vote
                                <li>Its Our Right</li>
                                <li>Agent of change</li>
                                <li>As a citizen its our duty to form a right Government, therefore</li>
                                <li>Every vote counts</li>
                            </ul>
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.hindustantimes.com/img/2022/12/05/550x309/PTI12-05-2022-000246A-0_1670258864977_1670258864977_1670258909688_1670258909688.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
            <header style={{ backgroundColor: '#e2ebf0', padding: '60px' }}>
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal text-body-emphasis text-uppercase" style={{ fontSize: '20px' }}>Wondering why trust us ?</h1>
                    <p className="fs-1 text-body-secondary text-capitalise">
                        We got you there <br /> We are :-
                    </p>
                </div>
            </header>
            <main style={{ padding: '40px 180px', marginTop: '-90px' }}>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">1.</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">Flexible</h1>
                                <p className="lead"> flexible voting services and methods to provide you the better experience at vote times.</p>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">2.</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">Unbiased</h1>
                                <p className="lead">
                                    Voting here will all non-partial and unbiased therefore you can trust us
                                </p>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">3.</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">TrustWorthy</h1>
                                <p className="lead">
                                    we assure you that the data shared with us will all be confidential.
                                </p>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <header style={{ backgroundColor: '#e2ebf0', padding: '60px' }}>
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal text-body-emphasis text-uppercase" style={{ fontSize: '20px' }}>Watch Latest Articles</h1>
                    <p className="fs-1 text-body-secondary text-capitalise">
                        Up-to-date News and Articles
                    </p>
                </div>
            </header>
            <main style={{ padding: '40px 100px', marginTop: '-90px' }}>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2020/02/news_blog_2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Vote Politic for Results Dedicat Proven Leadership Accountability</h3>
                                <p className="card-text news-text">It is long established fact that a reader will be..</p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2020/01/image1-750x465.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Fox News Anchor Bret Baier Fires Back to the extension of the</h3>
                                <p className="card-text news-text">Design for are edward regret met lovers. This are</p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/blog_image5-730x465.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Rebuild & Restore our Voice for Positive Change Community</h3>
                                <p className="card-text news-text">Am terminated it excellence invitation projection as. </p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginTop: '30px' }}>
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2020/01/blog_image3-730x465.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Honesty, Integrity and Community Changes Every Experience</h3>
                                <p className="card-text news-text">Design for are edward regret met lovers. This are </p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginTop: '30px' }}>
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2020/01/blog_image1-730x465.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Politicals campaigns usually require a campaign</h3>
                                <p className="card-text news-text">Together we the people achieve more than any single </p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ marginTop: '30px' }}>
                        <div className="card news" style={{ width: "18rem" }}>
                            <img src="https://wp.xpeedstudio.com/electionify/wp-content/uploads/2019/12/blog_image4-730x465.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title news-title">Common Sense Leader Keep Moving of Forward</h3>
                                <p className="card-text news-text">It is a long established fact that a reader will be</p>
                                <span><Link style={{ textDecoration: 'none', color: 'red' }} to="/">Read More</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
};

export default About;