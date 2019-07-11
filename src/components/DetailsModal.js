import React from 'react';

export default ({open}) => {
  return ( <div aria-hidden={open} className={ open ? 'detailsModal boxShadow': 'detailsModal-hidden'}> 
    Picking up your order in the store helps cut costs, and we pass the savings to you.
  </div>);
}