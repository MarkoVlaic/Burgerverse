import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Avatar from './Avatar';

import * as chefStyles from './chefs.module.css';

const Chefs = () => {
  const data = useStaticQuery(graphql`
    query {
      allChefsJson {
        nodes {
          name,
          role,
          avatar {
            src {
              childImageSharp {
                gatsbyImageData(width: 350, height: 350)
              }
            }
          }
        }
      }
    }  
  `);


  const avatars = data.allChefsJson.nodes.map((node, key) => <Avatar name={node.name} role={node.role} imageData={node.avatar.src} key={key}/>);
  const avatarSlides = avatars.map(avatar => <SwiperSlide>{({isActive}) => React.cloneElement(avatar, { active: isActive })}</SwiperSlide>)

  console.log(data);

  return (
    <section className={chefStyles.chefsContainer} id='chefs'>
      <h2 className={chefStyles.title}>Meet The Chefs</h2>
      <p className={chefStyles.description}>Our chefs have thousand plus years of experience in making the tastiest burgers in the Universe. They came from different galaxies and teamed up to open the best diner in the Metaverse.</p>
      
      <div className={chefStyles.avatarContainer}>
        {avatars}
      </div>

      <div className={chefStyles.mobileAvatarContainer}>
        <Swiper
          spaceBetween={10}
          centeredSlides
          loop
          breakpoints={{
            300: {
              slidesPerView: 1.2
            },
            400: {
              slidesPerView: 1.4
            },
            570: {
              slidesPerView: 1.6
            },
            720: {
              slidesPerView: 1.9
            }
          }}
        >
          {avatarSlides}
        </Swiper>
      </div>
    </section>
  );
};

export default Chefs;