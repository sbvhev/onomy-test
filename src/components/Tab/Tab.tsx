import React from "react";

import {
  TabButton,
  TabButtonContent,
  TabButtonBorder,
  TabItemContainer,
} from "./Tab.styles";

interface TabProps {
  tabList: string[];
  active: string;
  setActive: (activeItem: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabList, active, setActive }) => {
  return (
    <TabItemContainer>
      {tabList.map((tabItem: string, index: number) => (
        <div key={`tabItem_${index}`}>
          <TabButton
            active={active === tabItem}
            onClick={() => setActive(tabItem)}
          >
            <>
              {index + 1}.
              <TabButtonContent active={active === tabItem}>
                {tabItem}
              </TabButtonContent>
            </>
          </TabButton>
          {active === tabItem && <TabButtonBorder />}
        </div>
      ))}
    </TabItemContainer>
  );
};

export default Tab;
