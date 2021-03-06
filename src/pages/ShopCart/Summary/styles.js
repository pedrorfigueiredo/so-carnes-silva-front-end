import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.surface};
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.huge};
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: ${(props) => props.theme.fontSizes.huge};
`;

export const MiniLabel = styled(Label)`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Price = styled.div`
  font-size: ${(props) => props.theme.fontSizes.huge};
  color: ${(props) => props.theme.fonts.price};
`;

export const MiniPrice = styled(Price)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.fonts.primaryLight};
`;

export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  align-self: flex-end;
  cursor: pointer;
  border-radius: 3px;
  padding: 15px;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const Items = styled.span`
  align-self: flex-end;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: 5px;
`;
