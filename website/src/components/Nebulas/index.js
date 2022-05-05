import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ImagePlacer from '../ImagePlacer';
import * as nebulasStyles from './nebulas.module.css';

const Nebulas = () => {
  const data = useStaticQuery(graphql`query NebulaQuery {
    allNebulasJson {
      nodes {
        width,
        height,
        top,
        left,
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }`);

  return <ImagePlacer data={data.allNebulasJson.nodes} elementClassName={nebulasStyles.nebula} />
};

export default Nebulas;