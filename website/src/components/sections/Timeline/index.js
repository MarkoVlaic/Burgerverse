import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Drop from './Drop';

import * as timelineStyles from './timeline.module.css';

const Timeline = () => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      allTimelineJson {
        nodes {
          stamp,
          date,
          title,
          body
          image {
            src {
              childImageSharp {
                gatsbyImageData (
                  width: 350,
                  height: 350,
                  placeholder: BLURRED,
                  aspectRatio: 1
                )
              }
            }
          }
        }
      }
    }`
  );

  const drops = data.allTimelineJson.nodes
                    .map(({ stamp, date, title, body, image }, i) => <Drop stamp={stamp} date={date} title={title} body={body} number={i+1} queriedImage={image.src} />)

  const dropSlides = drops.map(drop => <SwiperSlide>{({isActive}) => React.cloneElement(drop, { active: isActive })}</SwiperSlide>)

  return (
    <section className={timelineStyles.container} id='timeline'>
      <h2 className={timelineStyles.title}>Project timeline</h2>
      <div className={timelineStyles.dropContainer}>
        {drops}
      </div>
      
      <div className={timelineStyles.mobileDropContainer}>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.5}
          centeredSlides
        >
          {dropSlides}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;