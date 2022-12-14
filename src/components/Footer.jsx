import React from 'react';
import { Button } from 'semantic-ui-react'
import {GITHUB_REPOSITORY} from '../lib/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

const Footer = ({clicks, won, pairs, restart}) => {
  return (
    <footer>      
      <div className='stats'>
        <span>Clicks: {clicks}</span>        
        <span>Pairs Found: {pairs}</span>   
      </div>
      {won && <Button size='mini' color='blue' onClick={restart}>Restart</Button>}
      <div className='links'>
      &copy; 2022 Ezequiel Castellanos{' '}
          <a
            href="https://twitter.com/Ezequiel_Caste"
            rel="noopener noreferrer"
            target="_blank"
          >
            
            <FontAwesomeIcon
              size="1x"
              className="text-gray-200"
              icon={faTwitterSquare}
            />

            <i className="fab fa-twitter-square"></i>
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/ezequiel-castellanos"
            rel="noopener noreferrer"
            target="_blank"
          >
            
            <FontAwesomeIcon
              size="1x"
              className="text-gray-200"
              icon={faLinkedin}
            />
          </a>
        
        <a
          href={`${GITHUB_REPOSITORY}`}
          className="font-medium hover:underline"
        >
          View code on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;