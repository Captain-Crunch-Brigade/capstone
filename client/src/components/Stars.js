import styled from 'styled-components';

const Stars = styled.div`
  ${(props) => props.ratings && `--percent: calc(${props.ratings} / 5 * 100%);`}
  display: inline-block;
  font-family: Times;
  line-height: 1;
  font-size: 14px;

  &::before {
    content: '★★★★★';
    letter-spacing:3px;
    background: linear-gradient(90deg,
      #000 var(--percent), #fff var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Stars;
