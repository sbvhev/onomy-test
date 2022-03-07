import React, { useState } from "react";

import {
  ModalBlock,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalLeftContainer,
  ModalOverlay,
  ModalRightContainer,
  TabContainer,
} from "./Modal.styles";
import Tab from "../Tab";
import ModalRightContent from "./ModalRightContent";

interface ModalProps {
  show: boolean;
  hideModal: () => void;
}

const TAB_LIST = ["Confirm Transaction", "Onomy Access", "Finish"];

const Modal: React.FC<ModalProps> = ({ show, hideModal }) => {
  const [activeTab, setActiveTab] = useState<string>(TAB_LIST[0]);

  return (
    <>
      {show && (
        <ModalBlock>
          <ModalOverlay onClick={hideModal}></ModalOverlay>
          <ModalContainer>
            <ModalBody>
              <ModalLeftContainer>
                <ModalHeader>{activeTab}</ModalHeader>
                <TabContainer>
                  <Tab
                    tabList={TAB_LIST}
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </TabContainer>
              </ModalLeftContainer>
              <ModalRightContainer>
                <ModalRightContent hideModal={hideModal} />
              </ModalRightContainer>
            </ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
