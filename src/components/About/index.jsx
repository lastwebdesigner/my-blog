import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { aboutText, socialData, files, websites } from '../../data';
import img from '../../images/me.png';
import Aside from './AsideContent';
import { ThemeConsumer } from '../ThemeContext';

const Article = styled.article`
  opacity: ${props => props.element && 1};
`;

const About = () => (
  <ThemeConsumer>
    {({ visibleElement }) => (
      <section className="about-section" id="about">
        <Article
          element={visibleElement}
          className="about container has-gutter-outside"
        >
          <header>
            <h1 className="freight-sans--bold">Ciao! Nice to meet you!</h1>
          </header>
          <figure>
            <img
              className="about__img"
              src={img}
              alt="Surfing in the Canary Islands"
            />
            <figcaption className="img-caption freight-sans--light">
              Surfing in the Canary Islands. Photo credits:
              <a href="https://surfingtherapy.es">Surfing Therapy</a>
              <div className="img-divider" />
            </figcaption>
          </figure>
          <div className="about__content">
            <ReactMarkdown source={aboutText} />
          </div>
          <aside className="about__links has-shadows">
            <Aside socialData={socialData} files={files} websites={websites} />
          </aside>
        </Article>
        <button type="button" className="btn btn--rounded btn--cta btn--about">
          <i className="fas fa-link" />
        </button>
      </section>
    )}
  </ThemeConsumer>
);

export default About;
