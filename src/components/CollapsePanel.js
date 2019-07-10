import React from 'react';

class CollapsePanel extends React.Component  {
  constructor() {
    super(); 
    this.state = { 
      open : false
    };
  }
  
  toggle = ()=>{
    this.setState({ open: !this.state.open});
  }
  
  render () {
    const {component, openText, closedText} = this.props;
    const open = this.state.open;
    return ( 
      <div className="collapsePanel">
        <div className="collapseHeader" onClick={this.toggle}>
          <span className="collapseHeaderTitle">{open ? openText: closedText}</span> 
          <span className="collapseHeaderIcon">{open ? '-' : '+'}</span>
        </div>
        { open && <div className="collapseContent">{component}</div>}
        
      </div>
    );
  }
}

export default CollapsePanel;