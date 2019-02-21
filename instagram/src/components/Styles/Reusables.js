import styled, { css } from "styled-components";

const Username = styled.span`
  font-weight: 500;
  font-size: 1.05rem;
  ${props =>
    props.type === "comment" &&
    css`
      font-size: 1rem;
    `}
`;

export default Username;
