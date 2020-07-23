import React, { Component } from 'react';
import { FooterContainer, FooterText, FooterSocial, SocialItem, NameItem } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  render() {
    return (<FooterContainer>
      <FooterText>
        <NameItem href="https://julianscialabba.com" target="_blank">Julián Scialabba</NameItem>
      </FooterText>
      <FooterSocial>
        <SocialItem href="http://twitter.com/juliansci" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialItem>
        <SocialItem href="https://www.linkedin.com/in/julianscialabba/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialItem>
        <SocialItem href="http://github.com/juliansci" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </SocialItem>
      </FooterSocial>
    </FooterContainer >);
  }
}

export default Footer;
