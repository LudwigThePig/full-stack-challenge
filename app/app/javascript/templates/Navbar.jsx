import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <h1>CompanyDirectory</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/companies/new">Add Company</a>
        </nav>
      </div>
    );
  }
}
// const Navbar = () => (
//   <div id="navbar">
//     <h1>CompanyDirectory</h1>
//     <nav>
//       <a href="/">Home</a>
//     </nav>
//   </div>
// );

export default Navbar;
