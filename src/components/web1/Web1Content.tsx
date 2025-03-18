
import React from 'react';
import { useNavigate } from 'react-router-dom';
import gif89a from '../../assets/web1/under-construction.gif';
import netscape from '../../assets/web1/netscape.gif';
import counter from '../../assets/web1/counter.gif';

// Define custom styles for the HTML-like elements that aren't supported in React
const fontStyle = (face: string, size: string, color?: string) => ({
  fontFamily: face,
  fontSize: size === '1' ? '10px' : 
            size === '2' ? '13px' : 
            size === '3' ? '16px' : 
            size === '4' ? '18px' : 
            size === '5' ? '24px' : 
            size === '6' ? '32px' : '16px',
  color: color || 'inherit'
});

const Web1Content = () => {
  const navigate = useNavigate();
  
  return (
    <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '0' }}>
      <tbody>
        <tr>
          <td width="20%" valign="top" style={{ backgroundColor: '#EEEEEE' }} className="web1-table">
            <div style={fontStyle('Times New Roman', '4')}>
              <b>Site Navigation</b>
            </div>
            <hr style={{ height: '1px', border: 'none', backgroundColor: 'black' }} />
            <ul>
              <li>
                <span className="web1-link" onClick={() => navigate('/explore')}>Home Page</span>
              </li>
              <li>
                <span className="web1-link" onClick={() => navigate('/about')}>About Me</span>
              </li>
              <li>
                <span className="web1-link" onClick={() => navigate('/blog')}>My Blog</span>
              </li>
              <li>
                <span className="web1-link" onClick={() => navigate('/links')}>Cool Links</span>
              </li>
              <li>
                <span className="web1-link" onClick={() => navigate('/guestbook')}>Sign Guestbook</span>
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
                src={gif89a} 
                alt="Under Construction" 
                width={400} 
                height={60} 
                style={{ border: '0' }} 
                className="my-4"
              />
            </div>
            <h1 style={{ textAlign: 'center' }}>
              <span style={fontStyle('Times New Roman', '6', '#800080')}>
                Welcome to My Web 1.0 Homepage!
              </span>
            </h1>
            <hr style={{ height: '2px', width: '80%', backgroundColor: '#0000FF', border: 'none' }} />
            <p>
              <span style={fontStyle('Times New Roman', '3')}>
                Hello and welcome to my little corner of the World Wide Web! This page was created to demonstrate what websites looked like in the early days of the internet (approximately 1994-2000). Back then, websites were mostly static, with minimal styling and interactivity.
              </span>
            </p>
            <p>
              <span style={fontStyle('Times New Roman', '3')}>
                <b>Key features of Web 1.0 design:</b>
              </span>
            </p>
            <ul>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Table-based layouts (like this page!)</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Bright background colors or repeating patterns</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Animated GIFs and small images</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Basic navigation with simple hyperlinks</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Hit counters and "Under Construction" signs</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Browser compatibility badges</span>
              </li>
              <li>
                <span style={fontStyle('Times New Roman', '3')}>Guestbooks for visitors to sign</span>
              </li>
            </ul>
            <p>
              <span style={fontStyle('Times New Roman', '3')}>
                Web 1.0 was characterized by its static nature. Users could only read content, not interact with it. This era is often called the "Read-Only Web." Websites were simple HTML pages with minimal CSS styling.
              </span>
            </p>
            <p style={{ textAlign: 'center' }}>
              <span style={fontStyle('Times New Roman', '3')}>
                <div className="marquee-container" style={{ width: '400px', margin: '0 auto', overflow: 'hidden' }}>
                  <div className="marquee-content" style={{ animation: 'marquee 10s linear infinite' }}>
                    <b>Thank you for visiting my Web 1.0 experience!</b>
                  </div>
                </div>
                <style jsx>{`
                  @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                  }
                `}</style>
              </span>
            </p>
            <p style={{ textAlign: 'center' }}>
              <button className="web1-button" onClick={() => window.alert('This button doesn\'t do much in Web 1.0!')}>
                Click Me!
              </button>
            </p>
            <p style={{ textAlign: 'right' }}>
              <span style={fontStyle('Times New Roman', '2')}>
                <i>Last updated: October 12, 1999</i>
              </span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Web1Content;
