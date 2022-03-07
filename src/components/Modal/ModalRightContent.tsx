import React, { useState, useEffect } from "react";

import {
  LabelItem,
  SmallLabelItem,
  MainPriceItem,
  FlexRowHeaderItem,
  FlexRowItem,
  FlexColumnWalletItem,
  FlexColumnItem,
  MainLabelItem,
  InfoContainer,
  ConnectItem,
  AlertItem,
  TransactionPriceContainer,
  TransactionNumPrice,
  TransactionPointPrice,
  LogoItem,
  ColumnItem,
} from "./ModalRightElement.styles";
import { ModalClose } from "./Modal.styles";

import EthereumLogo from "../../assets/Ethereum.svg";

interface RightContentProps {
  hideModal: () => void;
}

const ModalRightContent: React.FC<RightContentProps> = ({ hideModal }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  useEffect(() => {
    async function getWalletAddress() {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });

        const userAddress = window.ethereum?.selectedAddress;
        setWalletAddress(getTruncatedAddress(userAddress));

        window.ethereum.on("disconnect", () => {
          setWalletAddress("");
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", (accounts: string[]) => {
          if (!!accounts.length) {
            setWalletAddress(getTruncatedAddress(accounts[0]));
          }
          window.location.reload();
        });
      }
    }

    getWalletAddress();
  }, []);

  const getTruncatedAddress = (address: string) => {
    const firstSubAddress = address.slice(0, 20);
    const lastSubAddress = address.slice(address.length - 3);
    return firstSubAddress + "..." + lastSubAddress;
  };

  return (
    <>
      <ModalClose onClick={hideModal}>X</ModalClose>
      <>
        <FlexRowHeaderItem>
          <FlexColumnItem>
            <LabelItem>I'm buying</LabelItem>
            <TransactionPriceContainer>
              <>
                <TransactionNumPrice>1</TransactionNumPrice>
                <TransactionPointPrice>.900</TransactionPointPrice>
              </>
              <SmallLabelItem>ETH</SmallLabelItem>
            </TransactionPriceContainer>
            <MainPriceItem>$9,087.99</MainPriceItem>
          </FlexColumnItem>

          <ConnectItem>/</ConnectItem>

          <FlexColumnItem>
            <LabelItem>At the price of</LabelItem>
            <TransactionPriceContainer>
              <>
                <TransactionNumPrice>9034</TransactionNumPrice>
                <TransactionPointPrice>.55</TransactionPointPrice>
              </>
              <SmallLabelItem>USDT</SmallLabelItem>
            </TransactionPriceContainer>
            <MainPriceItem>$9,087.99</MainPriceItem>
          </FlexColumnItem>
        </FlexRowHeaderItem>

        <hr />

        <InfoContainer>
          <FlexRowItem>
            <LabelItem>Order Type</LabelItem>
            <MainLabelItem>Stop</MainLabelItem>
          </FlexRowItem>

          <FlexRowItem>
            <LabelItem>Stop Price</LabelItem>
            <MainLabelItem>3,820.00 USDT</MainLabelItem>
          </FlexRowItem>

          <FlexRowItem>
            <LabelItem>Current Exchange Rate</LabelItem>
            <MainLabelItem>1 ETH = 4,523.19 USDT</MainLabelItem>
          </FlexRowItem>

          <FlexRowItem>
            <FlexColumnWalletItem>
              <LabelItem>Wallet</LabelItem>
              <MainLabelItem>{walletAddress}</MainLabelItem>
            </FlexColumnWalletItem>
            <LogoItem>
              <ColumnItem>
                <img
                  src={EthereumLogo}
                  width={24}
                  height={24}
                  alt="ethereum-logo"
                />
              </ColumnItem>
            </LogoItem>
          </FlexRowItem>

          <FlexRowItem>
            <LabelItem>Gas Fee</LabelItem>
            <MainLabelItem>$5.4 (0.00032 ETH)</MainLabelItem>
          </FlexRowItem>
        </InfoContainer>

        <AlertItem>
          Not enough gas. You need 0.02031 ETH more to complete this
          transaction.
        </AlertItem>
      </>
    </>
  );
};

export default ModalRightContent;
