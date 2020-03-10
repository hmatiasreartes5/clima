import React from 'react';

//titulo es un props, ({titulo}) con esa sentencia se aplica destructuring
const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className='nav-wrapper ligth-blue darken-2'>
                <a href="#!" className='brand-logo'>{titulo}</a>
            </div>
        </nav>
     );
}
 
export default Header;