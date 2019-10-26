import React from 'react';
import { Link } from 'react-scroll';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      menuOpen: false,
      open: this.props.open ? this.props.open:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  handleClick(){
    this.setState({open:!this.state.open});
  }

  handleLinkClick() {
    this.setState({open: false});
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
        zIndex: '6',
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
      },
      menuOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100vw',
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: '1s',
        transform: this.state.open ? 'translateX(0)' : 'translateX(-100%)',
        display: 'flex',
        flexDirection: 'column',
        background: '#FF2C9E',
        color: 'white',
        transition: 'transform 500ms ease-in-out',
        zIndex: 5,
      },
      menuItems: {
        marginTop: '80px',
        width: '100%',
      },
      menuChild: {
        animation: '1s slideIn forwards',
        fontSize: '25px',
      }
    }

    const menu = [
      {id: 1, link: '#home', name: 'Home'},
      {id: 2, link: '#whatIDo', name: 'What I do'},
      {id: 3, link: '#howIDoIt', name: 'How I do it'},
      {id: 4, link: '#whoIDoItFor', name: 'Who I do it for'},
      {id: 5, link: '#Testimonials', name: 'Testimonials'},
      {id: 6, link: '#whoIAm', name: 'Who I am'},
      {id: 7, link: '#getInTouch', name: 'Get in touch'},
    ];

    const menuItems = menu.map((item, index) => {
      return (
        <h2 key={index} style={styles.menuChild}>
          <Link
            className="menu-link"
            to={item.link}
            href={item.link}
            spy={true}
            smooth={true}
            duration={800}
            delay={800}
            onClick={()=>{this.handleLinkClick();}}
          >
            {item.name}
          </Link>
        </h2>
      )
    });

    return (
      <div>
        <div className="container">
          <div style={styles.ham} className="hamburger" onClick={this.props.onClick ? this.props.onClick: () => {this.handleClick();}}>
            <span style={{...styles.burger,...styles.burgerTop }}></span>
            <span style={{...styles.burger,...styles.burgerMiddle }}></span>
            <span style={{...styles.burger,...styles.burgerBottom }}></span>
          </div>
        </div>
        <div style={styles.menuOverlay}>
          {this.state.open ?
          <div className="container">
            <div style={styles.menuItems} open={this.state.menuOpen}>
              {menuItems}
            </div> 
          </div> : null
          }
        </div>  
      </div>
    )
  }
}
