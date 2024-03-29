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
import calendar from '../assets/images/calendar.png'
import recipe from '../assets/images/recipe.png'
import allrecipes from '../assets/images/allrecipes.png'
import gigtime1 from '../assets/images/gigtime1.png'
import gigtime2 from '../assets/images/gigtime2.png'
import gigtime3 from '../assets/images/gigtime3.png'

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
                            <p> Aspiring web developer seeking opportunities to learn and grow.  I am a problem solving oriented professional, proficient with JavaScript, React, Node.</p>
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
                                <h2>Skills</h2>
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
                            <p className="project-title">PANTRIFY:</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={allrecipes} alt="" /></span>
                            <p>Meal planner web app. Allows the user to collect recipes, make shopping lists and manage their pantry.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={recipe} alt="" /></span>
                            <p>The recipe card view allows the user to add all ingredients of that particular recipe to a shopping list.  In the shopping view the user can place items he bought in the pantry.</p>
                            <ul className="actions">
                                <li><a href="https://www.pantrify.us" className="button" target="_blank">Visit</a></li>
                            </ul>

                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={calendar} alt="" /></span>
                            <p>The calendar view allows user to plan their meals at the click of a button.  The color code also alerts users if they have all ingredients needed to cook the recipe or not.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            
                            
                            <p className="project-title">GIG-TIME:</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={gigtime1} alt="" /></span>
                            <p>Create and manage Gigs, keeping track of time spent on gig as well as client information.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={gigtime2} alt="" /></span>
                            <p>Add individual tasks in a gig, making a detailed and organized plan for gig completion.</p>
                            <ul className="actions">
                                <li><a href="https://gig-time.com" className="button" target="_blank">Visit</a></li>
                            </ul>

                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={gigtime3} alt="" /></span>
                            <p>Bill your clients based on time spent working on a gig.</p>
                        </div>
                        
                        
                        

                    </div>
                </section>


                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Are you interested in building something together?</h2>
                        </header>
                        
                        <ul className="actions uniform">
                            <li><a href="mailto:tiagomaffei@gmail.com" className="button special">Email me</a></li>
                           
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;