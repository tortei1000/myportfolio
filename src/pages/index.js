import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';
import redux from '../assets/images/redux.png'
import nodeimg from '../assets/images/node.png'
import jsimg from '../assets/images/js.png'
import gatsbyimg from '../assets/images/gatsby.png'
import postgress from '../assets/images/postgress.png'
import reactlogo from '../assets/images/reactlogo.png'
import sql from '../assets/images/sql.png'
import sass from '../assets/images/sass.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Tiago Maffei";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Tiago Maffei</h2>
                            </header>
                            <p> Aspiring web developer seeking opportunities to learn and grow.  I am problem solving oriented professional, proficient with JavaScript, React, Node.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src='https://s3-us-west-1.amazonaws.com/pantrify2/19956113_10155488077464813_4869888206858722832_o+(1).jpg' alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Skills<br />
                                    web dev</h2>
                            </header>
                            <p className='skill-text'>Full stack web developer with emphasis on React.  Among others I have experience with the following:</p>
                        </div>
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><img src={jsimg} width='50' /><p>JavaScript</p></li>
                                <li><img src={nodeimg} width='50' /><p>Node</p></li>
                                <li><img src={reactlogo} width='50' /><p>React</p></li>
                                <li><img src={redux} width='50' /><p>React/Redux</p></li>
                                <li><img src={postgress} width='50' /><p>Postgress / SQL</p></li>
                                <li><img src={gatsbyimg} width='50' /><p>Gatsby</p></li>
                                <li><img src={sass} width='80' /><p>Sass</p></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Projects:</h2>
                            </header>
                            <p>These are some of the projects that exemplify my skill set.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src='' alt="" /></span>
                            <h3>Project1</h3>
                            <p>This is my first project.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src='' alt="" /></span>
                            <h3>Project2</h3>
                            <p>My second project and its description</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src='https://s3-us-west-1.amazonaws.com/pantrify2/Screen+Shot+2019-05-24+at+8.17.55+AM.jpg' alt="" /></span>
                            <h3>Pantrify</h3>
                            <p>Meal planner web app. Allows the user to collect recipes, make shopping lists and manage their pantry.</p>
                            <ul className="actions">
                                <li><a href="https://www.pantrify.us" className="button">Visit</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Are you interested in building something together?</h2>
                        </header>
                        {/* <p>please...</p> */}
                        <ul className="actions uniform">
                            <li><a href="mailto:tiagomaffei@gmail.com" className="button special">Email me</a></li>
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;