import React from 'react';
import AboutHeader from '../../Layout/AboutHeader.jsx';
import { dependencies, languages, technicals, toLearn, contacts } from '../../../data/skills.js'
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
                    <h1>About</h1>
                    <p>
                        <h2>About Me:</h2>
                        <p>
                            After graduating from the University of North Texas with my Bachelor's in finance, I worked in the field at the Bank of New York Mellon. 
                            Soon after my graduation, I learned that finance was not for me, and began looking at other options. 
                            After finding Bloom Institute of Technology, I started working on getting my certificate in full-stack web development, where I recently completed the program in October. 
                            I am learning that programming is much more my niche, along with problem solving and mathematical computation and patterns.
                        </p>
                        <br />
                        <h2>Technical Skills:</h2>
                        <ul>
                            {technicals.map((technical, index) => (
                                <li key={index}>
                                    {technical}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <h2>Languages:</h2>
                        <ul>
                            {languages.map((language, index) => (
                                <li key={index}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <h2>Dependencies and Frameworks:</h2>
                        <ul>
                            {dependencies.map((dependency, index) => (
                                <li key={index}>
                                    {dependency}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <h2>Experience:</h2>
                        <p>
                            While having no official coding job experience, I believe that results speak far louder than individual experience. 
                            As such, I hope to leverage my coding results to gain invaluable experience working the industry.
                        </p>
                        <br />
                        <h2>Next Moves:</h2>
                        <p>
                            I am currently seeking remote job opportunities in front-end or full-stack web development specializing in React and/or RDBMS.
                            Given the leniency of the hiring manager, I am also open to hybrid work in the Philadelphia/Manhattan area, 
                            as long as the hiring manager will let me work remote until I complete my move to Philly.
                        </p>
                        <br />
                        <h2>Additional Information:</h2>
                        <ul>
                            <li>
                                Pronouns: she/her
                            </li>
                            <li>
                                I am currently working on: A <a href='http://github.com/dilemmaemma/react-weather-app'>React weather app </a> 
                                to further develop skills working with external APIs and learning about new frameworks and how to implement them in my code.
                            </li>
                            <li>
                                I am currently learning: Java and Springboot
                            </li>
                        </ul>
                        <br />   
                        <h2>To Learn:</h2>
                        <ul>
                            {toLearn.map((learn, index) => (
                                <li key={index}>
                                    {learn}
                                </li>
                            ))}
                        </ul>
                        <br />
                        <h2>View My Resume:</h2>
                        <ul>
                            <li>
                                <a href='https://docs.google.com/document/d/1PeV59uCPIIv2Keb7n7MuXiqeg1urrnm_/edit?usp=sharing&ouid=104778651520500424936&rtpof=true&sd=true'>
                                    Google Drive Link
                                </a>
                            </li>
                            <li>
                                <a href='https://www.dropbox.com/scl/fi/ogelyjyy89q39c623sjss/Henderson_Resume.pdf?rlkey=tqonv2ztrkktng9syhysknbjy&dl=0'>
                                    Dropbox Link
                                </a>
                            </li>
                        </ul>
                    </p>
                </section>

                <section className='section' id='contact'>
                    <h1>Contact</h1>
                    <p>
                        You can add me on socials, or reach me at many places, listed below:
                        <ul>
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    {contact.method}:
                                    &nbsp;
                                    <a href={`${contact.link}`}>{contact.name}</a>
                                </li>
                            ))}
                        </ul>
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
                        <h2>Information I Collect</h2>
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
        </div>
    );
};

export default About;