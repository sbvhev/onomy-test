import styled from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 600px;
  max-width: 800px;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalLeftContainer = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid #d8d8eb;
  padding: 2px;
`;

export const ModalRightContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 24px 40px;
`;

export const ModalBody = styled.div`
  display: flex;
  height: 100%;
`;

export const ModalHeader = styled.div`
  background-color: #048ee4;
  padding: 30px;
  color: white;
  font-size: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 10px;
`;
