import styled from "styled-components";

export const Hello = () => (
  <Heading role="heading">Hello NoteNote World!</Heading>
);

const Heading = styled.h1`
  color: ${({ theme }) => theme.text};
`;
