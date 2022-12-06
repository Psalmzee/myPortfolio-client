import React from 'react';
import "../css/index.css";

import profile from "../images/ic_profile_img.jpg";
import facebook from "../images/ic_facebook.png";
import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import youtube from "../images/ic_youtube.png";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-overlay'}></div>
                <div className={'dashboard-profile-div'}>
                    <div className={'dashboard-profile-img-container'}>
                        <img src={profile} className={'dashboard-profile-img'} />
                        <div className={'social-profile-container'}>
                            <a href="https://www.facebook.com/samson.okeji/" target="_blank"><img src={facebook} className={'social-profile-icon'} /></a>
                            <a href="https://twitter.com/Som_hairle" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a>
                            <a href="https://www.linkedin.com/in/samson-okeji-001b1913a/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://github.com/Psalmzee" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            <a href="https://www.youtube.com/@samsonokeji" target="_blank"><img src={youtube} className={'social-profile-icon'} /></a>
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Samson Okeji</span></p>
                        <p className={'dashboard-profile-deatils'}>
                            I'm a Software Engineer specialized in Backend Engineering, having fluent knowledge in the Software Development Life Cycle and Test Driven Development. In terms of the Web framework, I have rich experience developing highly scalable Web APIs following the MVC Architecture and I have experience in both back-end and front-end development, developed many full-stack based web application using Node.js, React.js, MongoDB & MySQL.
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            To improve my skill sets in security I like to participate in various Bug Bounty programs (Bugcrowd, HackerOne & many others) In Bug Bounty programs, I found many vulnerabilities that come under OWASP top 10.
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            As a hobby I love to contribute to open source projects and to share my work with developer communities via <a href="https://github.com/Psalmzee" className={'profile-details-link'} target="_blank">GITHUB</a> and make tutorial videos on my <a href="https://www.youtube.com/@samsonokeji" className={'profile-details-link'} target="_blank">Youtube channel.</a>
                        </p>
                    </div>
                </div>
                <img className={'dashboard-banner-img'} />
            </div>
        );
    }
}

export default ProfileComponent;
