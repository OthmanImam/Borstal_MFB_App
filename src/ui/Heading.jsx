import styled from 'styled-components';
// import styled, {css} from 'styled-components';

const Heading = styled.h1`
  font-size: ${(heading) => (heading.as === 'h3'? '10px' : '50px')};
  color: var(--color-silver-700);
  margin-bottom: 10px;
`

export default Heading