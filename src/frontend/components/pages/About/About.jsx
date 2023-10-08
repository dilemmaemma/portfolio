import React from 'react';
import '../../../styles/About.less';

const About = () => {
    return (
        <div className='about-me-page'>
            <header className='page-header'>
                <h1>About Me</h1>
                <nav>
                    <ul>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                        <li>
                            <a href='#terms'>Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className='page-content'>
                <section className='section'>
                    <h2>About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet elit eget lacus venenatis posuere.
                        Vestibulum suscipit ante sit amet lorem fringilla, non laoreet purus volutpat. Fusce eget vehicula tortor.
                    </p>
                </section>

                <section className='section' id='contact'>
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet elit eget lacus venenatis posuere.
                        Vestibulum suscipit ante sit amet lorem fringilla, non laoreet purus volutpat. Fusce eget vehicula tortor.
                    </p>
                </section>

                <section className='section' id='terms'>
                    <h2>Terms & Privacy</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet elit eget lacus venenatis posuere.
                        Vestibulum suscipit ante sit amet lorem fringilla, non laoreet purus volutpat. Fusce eget vehicula tortor.
                    </p>
                </section>
            </main>
            {/* <div className='aboutMe'>
                <h1>About Me:</h1>
            </div>
            <div className='section' id='contact'>
                <h1>Contact:</h1>
                <div className='text'>
                    You can reach me and view my work at multiple places:
                    <pre style={{fontFamily: 'Roboto', fontSize: '16px', marginLeft: '20px'}}>
                        <br/>
                        Github:
                        <br/>
                        LinkedIn:
                        <br/>
                        CodeSignal:
                        <br/>
                        Email:
                        <br/>
                        Phone Number:
                    </pre>
                </div>
            </div>
            <div id='terms'>
                <h1>Privacy Policy:</h1>
    </div> */}
        </div>
    );
};

export default About;