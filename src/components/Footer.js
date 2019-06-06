import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.facebook.com/tiago.maffei?ref=bookmarks" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://github.com/tortei1000/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:tiagomaffei@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                    <li><a href="https://twitter.com/tortei1000" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
