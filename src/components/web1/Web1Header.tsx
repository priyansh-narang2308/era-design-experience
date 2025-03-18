
import React from 'react';
import { Link } from 'react-router-dom';

const Web1Header = () => {
  return (
    <table width="100%" cellPadding={0} cellSpacing={0} style={{ border: '0' }} className="web1-table">
      <tbody>
        <tr>
          <td style={{ textAlign: 'center', backgroundColor: '#C0C0C0' }}>
            <div style={{ fontFamily: 'Times New Roman', fontSize: '32px', fontWeight: 'bold' }}>
              Welcome to the Web 1.0 Experience
            </div>
            <br />
            <div style={{ fontFamily: 'Times New Roman', fontSize: '13px', fontStyle: 'italic' }}>
              Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#FFFFFF' }}>
            <table width="100%" cellPadding={2} cellSpacing={0} style={{ border: '0' }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
                      <Link to="/explore" className="web1-link">HOME</Link> |{" "}
                      <Link to="/about" className="web1-link">ABOUT</Link> |{" "}
                      <Link to="/compare" className="web1-link">COMPARE</Link> |{" "}
                      <Link to="/" className="web1-link">EXIT</Link>
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
