
import React from 'react';
import { useNavigate } from 'react-router-dom';
import underConstruction from '../../assets/web1/under-construction.gif';
import netscape from '../../assets/web1/netscape.gif';
import counter from '../../assets/web1/counter.gif';

const Web1Content = () => {
  const navigate = useNavigate();
  
  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ border: '0' }}>
      <tbody>
        <tr>
          <td width="20%" valign="top" style={{ backgroundColor: '#EEEEEE' }} className="web1-table">
            <div style={{ fontFamily: 'Times New Roman', fontSize: '18px', fontWeight: 'bold' }}>
              Site Navigation
            </div>
            <hr style={{ height: '1px', border: 'none', backgroundColor: 'black' }} />
            <ul>
              <li>
                <span 
                  className="web1-link" 
                  onClick={() => navigate('/explore')}
                  style={{ cursor: 'pointer' }}
                >
                  Home Page
                </span>
              </li>
              <li>
                <span 
                  className="web1-link" 
                  onClick={() => navigate('/about')}
                  style={{ cursor: 'pointer' }}
                >
                  About Me
                </span>
              </li>
              <li>
                <span 
                  className="web1-link" 
                  onClick={() => navigate('/blog')}
                  style={{ cursor: 'pointer' }}
                >
                  My Blog
                </span>
              </li>
              <li>
                <span 
                  className="web1-link" 
                  onClick={() => navigate('/links')}
                  style={{ cursor: 'pointer' }}
                >
                  Cool Links
                </span>
              </li>
              <li>
                <span 
                  className="web1-link" 
                  onClick={() => navigate('/guestbook')}
                  style={{ cursor: 'pointer' }}
                >
                  Sign Guestbook
                </span>
              </li>
            </ul>
            <hr style={{ height: '1px', border: 'none', backgroundColor: 'black' }} />
            <div style={{ textAlign: 'center' }}>
              <img 
                src={netscape} 
                alt="Netscape Now!" 
                width={88} 
                height={31} 
                style={{ border: '0' }} 
                className="my-2"
              />
              <br />
              <img 
                src={counter} 
                alt="Page Counter" 
                width={88} 
                height={31} 
                style={{ border: '0' }} 
                className="my-2"
              />
            </div>
          </td>
          <td width="80%" valign="top" className="p-4">
            <div style={{ textAlign: 'center' }}>
              <img 
                src={underConstruction} 
                alt="Under Construction" 
                width={400} 
                height={60} 
                style={{ border: '0' }} 
                className="my-4"
              />
            </div>
            <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '32px', color: '#800080' }}>
              Welcome to My Web 1.0 Homepage!
            </h1>
            <hr style={{ height: '2px', width: '80%', backgroundColor: '#0000FF', border: 'none' }} />
            <p style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
              Hello and welcome to my little corner of the World Wide Web! This page was created to demonstrate what websites looked like in the early days of the internet (approximately 1994-2000). Back then, websites were mostly static, with minimal styling and interactivity.
            </p>
            <p style={{ fontFamily: 'Times New Roman', fontSize: '16px', fontWeight: 'bold' }}>
              Key features of Web 1.0 design:
            </p>
            <ul>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Table-based layouts (like this page!)
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Bright background colors or repeating patterns
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Animated GIFs and small images
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Basic navigation with simple hyperlinks
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Hit counters and "Under Construction" signs
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Browser compatibility badges
              </li>
              <li style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                Guestbooks for visitors to sign
              </li>
            </ul>
            <p style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
              Web 1.0 was characterized by its static nature. Users could only read content, not interact with it. This era is often called the "Read-Only Web." Websites were simple HTML pages with minimal CSS styling.
            </p>
            <p style={{ textAlign: 'center' }}>
              <div className="marquee-container" style={{ width: '400px', margin: '0 auto', overflow: 'hidden' }}>
                <div className="marquee-content" style={{ animation: 'marquee 10s linear infinite', fontFamily: 'Times New Roman', fontSize: '16px', fontWeight: 'bold' }}>
                  Thank you for visiting my Web 1.0 experience!
                </div>
              </div>
              <style>
                {`
                  @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                  }
                `}
              </style>
            </p>
            <p style={{ textAlign: 'center' }}>
              <button 
                className="web1-button" 
                onClick={() => window.alert("This button doesn't do much in Web 1.0!")}
                style={{ cursor: 'pointer' }}
              >
                Click Me!
              </button>
            </p>
            <p style={{ textAlign: 'right', fontFamily: 'Times New Roman', fontSize: '13px', fontStyle: 'italic' }}>
              Last updated: October 12, 1999
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Web1Content;
