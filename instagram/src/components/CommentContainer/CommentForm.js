import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  height: 35px;
  width: 93%;
  background-color: #fff;
  padding-left: 0px;
  border-radius: 1px;
`;
const FormC = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

const CommentForm = props => {
  return (
    <FormC onSubmit={props.addComment}>
      <Input
        type="text"
        placeholder="Add a comment..."
        value={props.comment}
        onChange={props.change}
      />
      <i className="fas fa-ellipsis-h" />
    </FormC>
  );
};
export default CommentForm;
