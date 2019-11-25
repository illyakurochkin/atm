import React, {Component} from 'react';
import styled from 'styled-components';
import image from './image.jpg';
import PropTypes from 'prop-types';

const Container = (props) => {
  const style = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={style}>{props.children}</div>
};

const Image = (props) => <img {...props} style={{width: 700}}/>;

const Sign = (props) => {
  const style = {
    position: 'absolute',
    color: 'white',
    fontWeight: '700',
    fontSize: 40,
    textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
  };

  return <div {...props} style={{...props.style || {}, ... style}}>{props.children}</div>;
};

// const Sign = styled.div`
//   position: absolute;
//   color: white;
//   font-weight: 700;
//   font-size: 40px;
//   text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
// `;

const Sign1 = ({children}) => <Sign style={{top: 50, right: 28}}>{children}</Sign>;
const Sign2 = ({children}) => <Sign style={{bottom: 33, right: 90}}>{children}</Sign>;
const Sign3 = ({children}) => <Sign style={{top: 50, left: 28}}>{children}</Sign>;
const Sign4 = ({children}) => <Sign style={{bottom: 33, left: 90}}>{children}</Sign>;

class Money extends Component {
  render() {
    const {amount} = this.props;

    return (
      <Container>
        <Image src="https://imgur.com/OUSqpeg.png" />
        <Sign1>{amount}</Sign1>
        <Sign2>{amount}</Sign2>
        <Sign3>{amount}</Sign3>
        <Sign4 style={{backgroundColor: 'red'}}>{amount}</Sign4>
      </Container>
    );
  }
}

Money.propTypes = {
  amount: PropTypes.string.isRequired,
};

export default Money;
