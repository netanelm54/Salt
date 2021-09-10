import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Container = styled.div`
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.purple &&
    css`
      border: 1px solid ${(props) => props.theme.colors.purple};
      color: ${(props) => props.theme.colors.purple};
    `}
  ${(props) =>
    props.purple &&
    props.fill &&
    css`
      background: ${(props) => props.theme.colors.purple};
      color: ${(props) => props.theme.colors.white};
    `};
  ${(props) =>
    props.blue &&
    css`
      border: 1px solid ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.blue};
    `}
  ${(props) =>
    props.blue &&
    props.fill &&
    css`
      background: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
    `};
  :hover {
    opacity: 0.9;
  }
`;

const Button = ({ className, children, fill, blue, purple, onClick }) => {
  return (
    <Container
      onClick={onClick}
      className={className}
      fill={fill}
      blue={blue}
      purple={purple}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fill: PropTypes.bool,
  purple: PropTypes.bool,
  blue: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
