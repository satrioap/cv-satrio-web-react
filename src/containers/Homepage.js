import React from 'react';
import '../index.css';
import WelcomeScreen from './WelcomeScreen';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import ProfileAvatar from "../components/ProfileAvatar";
import {EXPERIENCE_PAGE, HOME_PAGE, PROFILE_PAGE, SKILLS_PAGE} from "../utils/Constant";
import Skills from './Skills';
import {Animate, easings} from 'react-show';
import {COLOR_PRIMARY, BLACK_33, WHITE} from '../utils/Colors';
import {AiOutlineFileText, AiOutlineHome, AiOutlineTool, AiOutlineUser} from 'react-icons/ai';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      selectedPage: HOME_PAGE,
      isAvatarAnimating: true,
      isSkillAnimating: false,
    };
  }

  onScrollEvent = () => {
    const {space, current} = this.refs.parallax;
    const page = current / space;
    this.setState({
      offset: page,
      selectedPage: this._getSelectedPage(page),
      isAvatarAnimating: (this._getSelectedPage(page) !== PROFILE_PAGE),
      isSkillAnimating: (this._getSelectedPage(page) !== SKILLS_PAGE),
    })
  };

  _getSelectedPage = (offset) => {
    if (offset < 0.5) return HOME_PAGE;
    if (offset < 1.5) return PROFILE_PAGE;
    if (offset < 2.5) return SKILLS_PAGE;
    return EXPERIENCE_PAGE;
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
    const {offset, selectedPage, isAvatarAnimating, isSkillAnimating} = this.state;
    return (
      <div onScroll={this.onScrollEvent} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Animate
          show={isAvatarAnimating}
          duration={500}
          easing={easings.easeOutBack}
          style={{
            zIndex: 10,
            position: 'absolute',
            left: 0,
            right: 0,
            width: '12vh',
            backgroundColor: BLACK_33,
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginLeft: 20
          }}
          start={{
            zIndex: 10,
            position: 'absolute',
            left: 0,
            right: 0,
            width: '24%',
            backgroundColor: COLOR_PRIMARY,
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 20,
            marginLeft: 20
          }}
        >
          <Animate
            show={isAvatarAnimating}
            duration={400}
            easing={easings.easeInCirc}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 0,
            }}
            start={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 24,
            }}
          >
            <ProfileAvatar offset={offset} />
          </Animate>
          <div style={{
            zIndex: 10,
            left: 0,
            right: 0,
            width: 85,
            height: 96,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingBottom: 0,
            alignItems: 'center',
          }}>
            <div className={`headerButton ${this._getButtonCSSColor(selectedPage, HOME_PAGE)}`} style={{
              ...buttonStyles,
            }}
                 onClick={() => this._scrollTo(0)}>
              <AiOutlineHome/>
              {/*<SmallText title={HOME_PAGE} style={{...this._getFontWeight(selectedPage, HOME_PAGE)}}/>*/}
            </div>
            <div className={`headerButton ${this._getButtonCSSColor(selectedPage, PROFILE_PAGE)}`} style={{
              ...buttonStyles,
            }}
                 onClick={() => this._scrollTo(1)}>
              <AiOutlineUser/>
              {/*<SmallText title={PROFILE_PAGE} style={{...this._getFontWeight(selectedPage, PROFILE_PAGE)}}/>*/}
            </div>
            <div className={`headerButton ${this._getButtonCSSColor(selectedPage, SKILLS_PAGE)}`} style={{
              ...buttonStyles,
            }}
                 onClick={() => this._scrollTo(2)}>
              <AiOutlineTool/>
              {/*<SmallText title={SKILLS_PAGE} style={{...this._getFontWeight(selectedPage, SKILLS_PAGE)}}/>*/}
            </div>
            <div className={`headerButton ${this._getButtonCSSColor(selectedPage, EXPERIENCE_PAGE)}`} style={{
              ...buttonStyles,
              marginRight: 16,
            }}
                 onClick={() => this._scrollTo(3)}>
              <AiOutlineFileText/>
              {/*<SmallText title={EXPERIENCE_PAGE} style={{...this._getFontWeight(selectedPage, EXPERIENCE_PAGE)}}/>*/}
            </div>
          </div>
        </Animate>
        <Parallax scrolling={true} ref="parallax" pages={4}>
          <ParallaxLayer offset={0} speed={-0.4} factor={1} style={{ backgroundColor: '#00143C88', zIndex: 1 }}>
            <img
              alt=""
              src={require('../assets/images/magic-butt.png')}
              style={{ zIndex: 0, objectFit: 'cover'}}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} factor={1.4} style={{ backgroundColor: WHITE, zIndex: 2 }}>
            {/*<Animate*/}
            {/*  show={isAvatarAnimating}*/}
            {/*  duration={500}*/}
            {/*  easing={easings.easeOutSine}*/}
            {/*  style={{*/}
            {/*    zIndex: 2,*/}
            {/*    height: '160vh',*/}
            {/*    position: 'absolute',*/}
            {/*    width: '0%',*/}
            {/*    left: 0,*/}
            {/*    right: 0,*/}
            {/*    top: 0,*/}
            {/*    bottom: 0,*/}
            {/*    borderRadius: 20,*/}
            {/*    marginLeft: 20,*/}
            {/*    marginTop: 20,*/}
            {/*  }}*/}
            {/*  start={{*/}
            {/*    zIndex: 2,*/}
            {/*    height: '160vh',*/}
            {/*    position: 'absolute',*/}
            {/*    width: '24%',*/}
            {/*    left: 0,*/}
            {/*    right: 0,*/}
            {/*    top: 0,*/}
            {/*    bottom: 0,*/}
            {/*    borderRadius: 20,*/}
            {/*    marginLeft: 20,*/}
            {/*    marginTop: 20,*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Animate*/}
            {/*    show={isAvatarAnimating}*/}
            {/*    duration={800}*/}
            {/*    easing={easings.easeOutSine}*/}
            {/*    style={{*/}
            {/*      zIndex: 10,*/}
            {/*      display: 'flex',*/}
            {/*      marginLeft:'-200vh',*/}
            {/*      alignItems: 'center',*/}
            {/*      justifyContent: 'center',*/}
            {/*      marginTop: 20,*/}
            {/*    }}*/}
            {/*    start={{*/}
            {/*      zIndex: 10,*/}
            {/*      display: 'flex',*/}
            {/*      marginLeft: '0vh',*/}
            {/*      alignItems: 'center',*/}
            {/*      justifyContent: 'center',*/}
            {/*      marginTop: 20,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <ProfileAvatar offset={0} size={72}/>*/}
            {/*  </Animate>*/}
            {/*</Animate>*/}
            {/*<img*/}
            {/*  alt=""*/}
            {/*  src={require('../assets/images/mockup-2k.png')}*/}
            {/*  style={{ zIndex: 0, objectFit: 'cover'}}/>*/}
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} factor={1.2} style={{ backgroundColor: '#ff143C88',  zIndex: 3 }}>
            <img
              alt=""
              src={require('../assets/images/astronot.jpg')}
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
            style={{display: 'flex', zIndex: 10, alignItems: 'flex-end', justifyContent: 'center', marginLeft: 40, marginRight: 40}}>
            <WelcomeScreen onClick={() => this.refs.parallax.scrollTo(1)} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.1}
            speed={-0.6}
            style={{
              display: 'flex',
              zIndex: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <div>

            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.365}
            speed={1}
            style={styles}>
            <Skills isSkillAnimating={isSkillAnimating}/>
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
  borderRadius: 32,
  height: 64,
  padding: '12px 12px 12px 12px',
  margin: '8px 8px 8px 8px',
  display: 'flex',
  alignItems: 'center',
};

export default Homepage;
