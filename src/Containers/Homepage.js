import React from 'react';
import '../index.css';
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  render() {
    const {offset} = this.state;
    const style = offset < 500 ? 'first-page': offset < 800 ? 'second-page': 'third-page';

    console.log(offset);
    return (
      <div style={{width: '100%'}} className={style}>
        <Profile/>
        <Skills/>
        <Experience/>
      </div>
    );
  }
}

export default Homepage;
