import styled, { css } from "styled-components";

const Username = styled.span`
  font-weight: 600;
  ${props =>
    props.type === "comment" &&
    css`
      font-weight: 500;
    `}
`;

export default Username;
