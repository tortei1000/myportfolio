import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Tiago Maffei</strong>, a web developer<br />
                    please look at my portfolio and feel free to contact me.</h1>
                    <p>little description of something about me maybe.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
