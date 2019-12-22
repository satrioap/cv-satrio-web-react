import React from 'react';
import '../index.css';
import WelcomeScreen from './WelcomeScreen';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import ProfileImage from "../components/ProfileImage";
import SmallText from "../components/SmallText";
import {EXPERIENCE_PAGE, HOME_PAGE, PROFILE_PAGE, SKILLS_PAGE} from "../utils/Constant";
import {COLOR_SECONDARY} from "../utils/Colors";
import Skills from './Skills';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      selectedPage: HOME_PAGE,
    };
  }

  onScrollEvent = () => {
    const {space, current} = this.refs.parallax;
    const page = current / space;
    this.setState({
      offset: page,
      selectedPage: this._getSelectedPage(page),
    })
  };

  _getSelectedPage = (offset) => {
    if (offset < 0.5) return HOME_PAGE;
    if (offset < 1.5) return PROFILE_PAGE;
    if (offset < 2.5) return SKILLS_PAGE;
    return EXPERIENCE_PAGE;
  };

  _getButtonColor = (selectedPage, thisPage) => {
    if (selectedPage === thisPage) return {
      backgroundColor: COLOR_SECONDARY,
    };
  };

  _getButtonCSSColor = (selectedPage, thisPage) => {
    if (selectedPage === thisPage) return "buttonColorGradient"
  };

  _getFontWeight = (selectedPage, thisPage) => {
    if (selectedPage === thisPage) return {
      fontWeight: 600,
    };

    return {
      fontWeight: 400,
    };
  };

  _scrollTo = (page) => {
    const {selectedPage} = this.state;
    if (selectedPage !== this._getSelectedPage(page)) {
      this.refs.parallax.scrollTo(page);
    }
  };

  render() {
    const {offset, selectedPage} = this.state;

    return (
      <div onScroll={this.onScrollEvent} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{
          zIndex: 10,
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 96,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 20,
          alignItems: 'center'}}>
          <div className={`headerButton ${this._getButtonCSSColor(selectedPage, HOME_PAGE)}`} style={{
            ...buttonStyles,
          }}
            onClick={() => this._scrollTo(0)}>
            <SmallText title={HOME_PAGE} style={{...this._getFontWeight(selectedPage, HOME_PAGE)}}/>
          </div>
          <div className={`headerButton ${this._getButtonCSSColor(selectedPage, PROFILE_PAGE)}`} style={{
            ...buttonStyles,
          }}
            onClick={() => this._scrollTo(1)}>
            <SmallText title={PROFILE_PAGE} style={{...this._getFontWeight(selectedPage, PROFILE_PAGE)}}/>
          </div>
          <div className={`headerButton ${this._getButtonCSSColor(selectedPage, SKILLS_PAGE)}`} style={{
            ...buttonStyles,
          }}
            onClick={() => this._scrollTo(2)}>
            <SmallText title={SKILLS_PAGE} style={{...this._getFontWeight(selectedPage, SKILLS_PAGE)}}/>
          </div>
          <div className={`headerButton ${this._getButtonCSSColor(selectedPage, EXPERIENCE_PAGE)}`} style={{
            ...buttonStyles,
            marginRight: 16,
          }}
            onClick={() => this._scrollTo(3)}>
            <SmallText title={EXPERIENCE_PAGE} style={{...this._getFontWeight(selectedPage, EXPERIENCE_PAGE)}}/>
          </div>
        </div>

        <Parallax scrolling={true} ref="parallax" pages={4}>
          <ParallaxLayer offset={0} speed={-0.4} factor={1} style={{ backgroundColor: '#00143C88', zIndex: 1 }}>
            <img
              alt=""
              src={require('../assets/images/astronot.jpg')}
              style={{ zIndex: 0, objectFit: 'cover'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} factor={1.4} style={{ backgroundColor: '#00143C', zIndex: 2 }}>
            <img
              alt=""
              src={require('../assets/images/mockup-2k.png')}
              style={{ zIndex: 0,objectFit: 'cover'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} factor={1.2} style={{ backgroundColor: '#ff143C88',  zIndex: 3 }}>
            <img
              alt=""
              src={require('../assets/images/dashboard-small.jpg')}
              style={{ zIndex: 0, objectFit: 'cover'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.3} style={{ backgroundColor: '#DD14ff88', zIndex: 4 }}>
            <img
              alt=""
              src={require('../assets/images/jl.jpg')}
              style={{ zIndex: 0, objectFit: 'cover'}}/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.6}
            style={{display: 'flex', zIndex: 10, alignItems: 'flex-end', justifyContent: 'center'}}>
            <WelcomeScreen onClick={() => this.refs.parallax.scrollTo(1)} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.1}
            speed={-0.6}
            style={{display: 'flex', zIndex: 5, alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <ProfileImage offset={offset} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={1}
            style={styles}>
            <Skills/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={2}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(3)}>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.2}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1} factor={1} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: 4}} />
          <ParallaxLayer offset={0.2} speed={0.6} factor={5} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: 6}} />
          <ParallaxLayer offset={2.4} speed={0.2} factor={4} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: 7
          }} />
        </Parallax>
      </div>
    )
  }
}

const styles = {
  fontSize: 14,
  lineHeight: '10px',
  color: 'white',
  zIndex: 3,
  display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const buttonStyles = {
  borderRadius: 32, height: 48,
  padding: '2px 24px 2px 24px',
  margin: '0 8px 0 8px',
  display: 'flex', alignItems: 'center',
};

export default Homepage;
