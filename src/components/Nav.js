import React from 'react';
import { Link } from 'react-scroll';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  handleClick(){
    this.setState({open:!this.state.open});
  }

  render() {

    const styles = {
      ham: {
        height: '24px',
        width: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
        position: 'fixed',
        marginTop: '31px',
      },
      burger: {
        width: '24px',
        height: '2px',
        backgroundColor: '#FF2C9E',
        transition: 'all 200ms ease-in-out',
      },
      burgerTop: {
        marginBottom: '5px',
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        backgroundColor: this.state.open ? '#ffffff': '#FF2C9E',
      },
      burgerMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-5px)': 'none',
      },
      burgerBottom: {
        transform: this.state.open ? 'translateX(-1px) translateY(3px) rotate(-45deg)':'none',
        backgroundColor: this.state.open ? '#ffffff': '#FF2C9E',
        transformOrigin: 'top left',
        marginTop: '5px',
      }
    }
    return (
      <div className="container">
        <div style={styles.ham} className="hamburger" onClick={this.props.onClick ? this.props.onClick: () => {this.handleClick();}}>
          <span style={{...styles.burger,...styles.burgerTop }}></span>
          <span style={{...styles.burger,...styles.burgerMiddle }}></span>
          <span style={{...styles.burger,...styles.burgerBottom }}></span>
        </div>
      </div>
    )
  }
}