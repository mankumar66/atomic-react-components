import { css } from 'styled-components';

export default css`
  padding: 2px 25px;
  > h1, h3{
    font-family: serif;
    margin: 0;
    font-weight: 600;
  } 
  > h3 {
    border-bottom: 1px solid #efefef;
    padding-bottom: 10px;
    font-size: larger;
  }
  > h1 {
    font-size: xx-large;
  }
  > p{
    background: #ffbbbf;
    padding: 15px;
    border-radius: 10px;
    color: #f5534b;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
