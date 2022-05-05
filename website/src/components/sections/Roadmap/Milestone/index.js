import React, { useState } from 'react';

import * as milestoneStyles from './milestone.module.css';

const Milestone = ({ title, number, description, punchline, left }) => {
  const [collapsed, setCollapsed] = useState(true); 
  const toggleCollapsed = () => setCollapsed(c => !c);

  let containerClass  = left ? `${milestoneStyles.container}` : `${milestoneStyles.container} ${milestoneStyles.reversed}`;
  containerClass = collapsed ? `${containerClass} ${milestoneStyles.collapsed}` : containerClass;

  return (
    <div className={containerClass} onClick={() => toggleCollapsed()}>
      <div className={milestoneStyles.titleContainer}>
        <h3 className={milestoneStyles.title}>{title}</h3>
        <p className={milestoneStyles.number}>{number}</p>
      </div>
      
      <div className={milestoneStyles.content}>
        <p className={milestoneStyles.body}>{description}</p>
        <p className={milestoneStyles.conclusion}>{punchline}</p>
      </div>
    </div>
  );
};

export default Milestone;