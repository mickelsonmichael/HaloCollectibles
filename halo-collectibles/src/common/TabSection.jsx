import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const TabSection = ({ tabs }) => {
  const getId = (tab) =>
    "tabsection-" +
    tab.title.replace(/ /g, "-").replace(/:/g, " ").toLowerCase();

  const [activeTab, setActiveTab] = useState(getId(tabs[0]));

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        {tabs.map((tab) => {
          let id = getId(tab);

          return (
            <NavItem>
              <NavLink
                className={{ active: activeTab === id }}
                onClick={() => {
                  toggle(id);
                }}
              >
                {tab.title}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
        {tabs.map((tab) => {
          let id = getId(tab);
          return (
            <TabPane className="pt-4" tabId={id}>
              {tab.content}
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export default TabSection;
