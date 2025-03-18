
import React from 'react';
import { useNavigate } from 'react-router-dom';
import gif89a from '@/assets/web1/under-construction.gif';
import netscape from '@/assets/web1/netscape.gif';
import counter from '@/assets/web1/counter.gif';

const Web1Content = () => {
  const navigate = useNavigate();
  
  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
          <td width="20%" valign="top" bgcolor="#EEEEEE" className="web1-table">
            <font face="Times New Roman" size="4">
              <b>Site Navigation</b>
            </font>
            <hr size="1" noshade="noshade" />
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
            <hr size="1" noshade="noshade" />
            <div align="center">
              <img 
                src={netscape} 
                alt="Netscape Now!" 
                width="88" 
                height="31" 
                border="0" 
                className="my-2"
              />
              <br />
              <img 
                src={counter} 
                alt="Page Counter" 
                width="88" 
                height="31" 
                border="0" 
                className="my-2"
              />
            </div>
          </td>
          <td width="80%" valign="top" className="p-4">
            <div align="center">
              <img 
                src={gif89a} 
                alt="Under Construction" 
                width="400" 
                height="60" 
                border="0" 
                className="my-4"
              />
            </div>
            <h1 align="center">
              <font face="Times New Roman" size="6" color="#800080">
                Welcome to My Web 1.0 Homepage!
              </font>
            </h1>
            <hr size="2" width="80%" color="#0000FF" noshade="noshade" />
            <p>
              <font face="Times New Roman" size="3">
                Hello and welcome to my little corner of the World Wide Web! This page was created to demonstrate what websites looked like in the early days of the internet (approximately 1994-2000). Back then, websites were mostly static, with minimal styling and interactivity.
              </font>
            </p>
            <p>
              <font face="Times New Roman" size="3">
                <b>Key features of Web 1.0 design:</b>
              </font>
            </p>
            <ul>
              <li>
                <font face="Times New Roman" size="3">Table-based layouts (like this page!)</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Bright background colors or repeating patterns</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Animated GIFs and small images</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Basic navigation with simple hyperlinks</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Hit counters and "Under Construction" signs</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Browser compatibility badges</font>
              </li>
              <li>
                <font face="Times New Roman" size="3">Guestbooks for visitors to sign</font>
              </li>
            </ul>
            <p>
              <font face="Times New Roman" size="3">
                Web 1.0 was characterized by its static nature. Users could only read content, not interact with it. This era is often called the "Read-Only Web." Websites were simple HTML pages with minimal CSS styling.
              </font>
            </p>
            <p align="center">
              <font face="Times New Roman" size="3">
                <marquee scrollamount="3" width="400">
                  <b>Thank you for visiting my Web 1.0 experience!</b>
                </marquee>
              </font>
            </p>
            <p align="center">
              <button className="web1-button" onClick={() => window.alert('This button doesn\'t do much in Web 1.0!')}>
                Click Me!
              </button>
            </p>
            <p align="right">
              <font face="Times New Roman" size="2">
                <i>Last updated: October 12, 1999</i>
              </font>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Web1Content;
