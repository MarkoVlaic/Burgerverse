import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Milestone from './Milestone';

import * as roadmapStyles from './roadmap.module.css';

const Roadmap = () => {
  const datoCmsData = useStaticQuery(graphql`query DatoTimelineMilestones {
    allDatoCmsRoadmapMilestone(sort:{fields: [position], order: ASC }) {
      nodes {
        title,
        description,
        punchline
      }
    }
  }`);

  const roadmapData = datoCmsData.allDatoCmsRoadmapMilestone.nodes;

  const leftMilestones = [];
  const rigthMilestones = [];

  for(let i=0;i<roadmapData.length;i++)  {
    const milestone = roadmapData[i];
    if(i%2 === 0) {
      leftMilestones.push( <Milestone number={i+1} title={milestone.title} description={milestone.description} punchline={milestone.punchline} left /> );
    } else {
      rigthMilestones.push( <Milestone number={i+1} title={milestone.title} description={milestone.description} punchline={milestone.punchline} /> );
    }
  }

  let leftClassname = roadmapStyles.left;
  let rightClassname = roadmapStyles.right;

  if(leftMilestones.length > rigthMilestones.length) {
    leftClassname = `${roadmapStyles.left} ${roadmapStyles.bordered}`;
  } else {
    rightClassname = `${roadmapStyles.right} ${roadmapStyles.bordered}`;
  }

  const mobileMilestones = roadmapData.map(({ title, description, punchline }, i) => <Milestone number={i+1} title={title} description={description} punchline={punchline} left />);

  return (
    <section className={roadmapStyles.container} id='roadmap'>
      <h2 className={roadmapStyles.title}>Tasty Roadmap</h2>

      <div className={roadmapStyles.milestoneContainer}>
        <div className={leftClassname}>
          {leftMilestones}
        </div>
        <div className={rightClassname}>
          {rigthMilestones}
        </div>
      </div>

      <div className={roadmapStyles.mobileMilestoneContainer}>
        {mobileMilestones}
      </div>
    </section>
  );
};

export default Roadmap;