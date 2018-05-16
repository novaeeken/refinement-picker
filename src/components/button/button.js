import styled from 'styled-components';

export default styled.button`
  display: inline;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  margin: ${props => (props.margin ? props.margin : 'auto')};
  padding: 0.8rem 1rem;
  border: 0px;
  border-radius: 0.5rem;
  width: ${props => (props.width ? props.width : 'auto')};
  color: ${props => (props.color ? props.color : props.theme.textWhite)};
  background-color: ${props => (props.background ? props.background : props.theme.yellowContrast)};
`;