import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : 'auto')};
  max-width: 80%;
  padding: 1.75rem;
  text-align: ${props => (props.align ? props.align : 'left')};
  background-color: ${props => props.theme.blueMedium};
  border-radius: 15px;
  margin-bottom: 1.8rem;
`;
