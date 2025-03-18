
import React from 'react';
import { Link } from 'react-router-dom';

const fontStyle = (face: string, size: string) => ({
  fontFamily: face,
  fontSize: size === '1' ? '10px' : 
            size === '2' ? '13px' : 
            size === '3' ? '16px' : 
            size === '4' ? '18px' : 
            size === '5' ? '24px' : 
            size === '6' ? '32px' : '16px'
});

const Web1Header = () => {
  return (
    <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '0' }} className="web1-table">
      <tbody>
        <tr>
          <td style={{ textAlign: 'center', backgroundColor: '#C0C0C0' }}>
            <div style={fontStyle('Times New Roman', '6')}>
              <b>Welcome to the Web 1.0 Experience</b>
            </div>
            <br />
            <div style={fontStyle('Times New Roman', '2')}>
              <i>Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0</i>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#FFFFFF' }}>
            <table width="100%" cellPadding={2} cellSpacing={0} style={{ border: '0' }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <div style={fontStyle('Times New Roman', '3')}>
                      <Link to="/explore" className="web1-link">HOME</Link> |{" "}
                      <Link to="/about" className="web1-link">ABOUT</Link> |{" "}
                      <Link to="/compare" className="web1-link">COMPARE</Link> |{" "}
                      <Link to="/contact" className="web1-link">CONTACT</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Web1Header;
