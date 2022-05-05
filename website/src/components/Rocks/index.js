import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ImagePlacer from '../ImagePlacer';
import * as rockStyles from './rocks.module.css';

const Rocks = () => {
  const data = useStaticQuery(graphql`query RockQuery {
    allRocksJson {
      nodes {
        width,
        height,
        top,
        left,
        rotation,
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
  `);

  return (
    <ImagePlacer data={data.allRocksJson.nodes} wrapperClassName={rockStyles.container} elementClassName={rockStyles.rock} />
  );
};

export default Rocks;