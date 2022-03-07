import styled from "styled-components";

interface TabButtonProps {
  active: boolean;
}

export const TabItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TabButton = styled.div<TabButtonProps>`
  width: 200px;
  background-color: ${(props) => (props.active ? "#ECECF7" : "transparent")};
  padding: 16px 24px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  color: #6a6f83;
`;

export const TabButtonContent = styled.span<TabButtonProps>`
  color: ${(props) => (props.active ? "#0B080D" : "#6A6F83")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
  margin-left: 8px;
`;

export const TabButtonBorder = styled.div`
  width: 100px;
  height: 2px;
  background-color: #048ee4;
  margin-left: 24px;
`;
