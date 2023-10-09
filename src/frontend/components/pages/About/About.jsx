import React from 'react';
import AboutHeader from '../../Layout/AboutHeader.jsx';
import '../../../styles/About.less';

const About = () => {

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

    return (
        <div className='about-me-page'>
            <header>
                <AboutHeader />
            </header>

            <main className='page-content'>
                <section className='section'>
                    <h1>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet elit eget lacus venenatis posuere.
                        Vestibulum suscipit ante sit amet lorem fringilla, non laoreet purus volutpat. Fusce eget vehicula tortor.
                    </p>
                </section>

                <section className='section' id='contact'>
                    <h1>Contact</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet elit eget lacus venenatis posuere.
                        Vestibulum suscipit ante sit amet lorem fringilla, non laoreet purus volutpat. Fusce eget vehicula tortor.
                    </p>
                </section>

                <section className='section' id='terms'>
                    <h1>Terms & Privacy</h1>
                    <p>
                        <h3>Privacy Policy for Delimma Cat Coding</h3>
                        <p>Effective Date: October 8, 2023</p>
                        <br/>
                        <h2>Introduction</h2>
                        <p>
                            Welcome to Delimma Cat Coding. I respect your privacy and am committed to protecting your personal information. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or use my services.
                            <br />
                            By accessing or using my website, you consent to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use my website or services.
                        </p>
                        <br />
                        <h2>Information We Collect</h2>
                        <p>
                            I may collect the following types of information when you visit my website or use my services:
                            <br />
                            <ul>
                                <li>
                                    Personal Information: I may collect personal information that you voluntarily provide to me, such as your name, email address, and other contact details.
                                </li>
                                <li>
                                    Usage Information: I may collect non-personal information about your interactions with my website, including your IP address, browser type, pages viewed, and other usage data.
                                </li>
                            </ul>
                        </p>
                        <br />
                        <h2>How I Use Your Information</h2>
                        <p>
                            I may use the information I collect for various purposes, including:
                            <br />
                            <ul>
                                <li>
                                    To provide and improve my services.
                                </li>
                                <li>
                                    To personalize your experience.
                                </li>
                                <li>
                                    To communicate with you, respond to your inquiries, and provide customer support.
                                </li>
                            </ul>
                        </p>
                        <br />
                        <h2>Sharing Your Information</h2>
                        <p>
                            I may share your information with third parties for various purposes, including:
                            <br />
                            <ul>
                                <li>
                                    Service Providers: I may share your information with third-party service providers who help me operate my website and provide services.
                                </li>
                                <li>
                                    Legal Compliance: I may disclose your information to comply with legal obligations or respond to lawful requests from authorities.
                                </li>
                            </ul>
                        </p>
                        <br />
                        <h2>Your Choices</h2>
                        <p>
                            <ul>
                                <li>
                                    You can choose not to provide me with certain information, but this may limit your ability to use certain features of my website or services.
                                </li>
                                <li>
                                    You can choose to view this webpage as a guest, but this limits your ability to download data directly and to demo projects.
                                </li>
                            </ul>
                        </p>
                        <br />
                        <h2>Security</h2>
                        <p>
                            I take reasonable measures to protect your information, but no data transmission or storage system can be guaranteed to be 100% secure. I cannot ensure the security of any information you provide to me.
                        </p>
                        <br />
                        <h2>Changes to this Privacy Policy</h2>
                        <p>
                            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the updated Privacy Policy on my website. Your continued use of my website and services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes.
                        </p>
                        <br />
                        <h2>Contact Me</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact me at my email: <a href='mailto:emmaf.henderson@outlook.com'>emmaf.henderson@outlook.com</a>.
                        </p>
                    </p>
                </section>
                <div>
                    <p onClick={() => scrollToTop()} className="back-to-top">
                        Back To Top ^
                    </p>
                </div>
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