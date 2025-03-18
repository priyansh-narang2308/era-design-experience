
import React from 'react';
import { Link } from 'react-router-dom';

const Web1Header = () => {
  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="web1-table">
      <tbody>
        <tr>
          <td align="center" bgcolor="#C0C0C0">
            <font size="6" face="Times New Roman">
              <b>Welcome to the Web 1.0 Experience</b>
            </font>
            <br />
            <font size="2" face="Times New Roman">
              <i>Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0</i>
            </font>
          </td>
        </tr>
        <tr>
          <td bgcolor="#FFFFFF">
            <table width="100%" cellPadding="2" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td align="center">
                    <font face="Times New Roman" size="3">
                      <Link to="/explore" className="web1-link">HOME</Link> |{" "}
                      <Link to="/about" className="web1-link">ABOUT</Link> |{" "}
                      <Link to="/compare" className="web1-link">COMPARE</Link> |{" "}
                      <Link to="/contact" className="web1-link">CONTACT</Link>
                    </font>
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
