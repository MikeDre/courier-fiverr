import * as React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layouts/Layout';
import Hero from '../components/Hero/Hero';

import Callout from '../components/Sections/Callout/Callout';
import ImageText from '../components/Sections/ImageText/ImageText';

import '../sass/main.scss';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Courier x Fiverr</title>
        <meta name="description" content="" />
        <meta name="image" content={``} />

        {/* OpenGraph tags */}
        <meta property="og:url" content="" />
        <meta property="og:title" content="Courier x Fiverr" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={``} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courier x Fiverr" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content={``} />
        <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
      </Helmet>
      <Layout>
        <div className="uk-container">
          <Hero />

          <div className="uk-margin-large-top uk-margin-large-bottom">
            <Callout
              header="The new face of freelancing"
              content="<p>It’s been a challenging few months for small businesses, self-employed entrepreneurs and freelancers. The news has been overwhelmingly bleak, with reports of hospitality, food service and the entertainment industries bearing the <a href='https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/coronavirusandtheeconomicimpactsontheuk/19november2020' target='_blank' rel='noopener noreferrer'>largest brunt</a> of closures and trading pauses.</p>"
            />
          </div>

          <div className="uk-margin-large-top uk-margin-large-bottom">
            <ImageText
              image={``}
              header="A strong resolve"
              content="<p>What is often missed, though, are the many ingenious ways in which small traders and the self-employed have stayed afloat in this time. They’ve found silver linings from the circumstances, as Gali Arnon highlights: ‘Despite the challenges, we found that over three quarters of workers surveyed in the UK agreed that working from home has allowed them to take on more freelance work. Four in five freelancers agreed that working from home has made them more productive. Freelancing has suddenly become a very legitimate option for many workers in the UK.’</p><p>Gali is the CMO of Fiverr, a global platform that connects businesses with talented freelancers according to their skills, budgets and project deadlines. The platform has seen record numbers of new freelancers joining and creating new gigs this year. ‘It is clear that people are turning to <a href='https://www.fiverr.com/' target='_blank' rel='noopener noreferrer'></a>Fiverr</a> to explore new income sources as they have more time at home and as global unemployment increases,’ Gali adds.</p><p>And for small business owners needing to suddenly and repeatedly pivot, Fiverr proved a convenient way to attract the right people to get the job done: ‘Small businesses increasingly relied on Fiverr to help them move online, or to improve their online presence if they had one already. There was a 319% increase in searches for “dropshipping”, a 205% rise in businesses searching for front-end development skills, and a further 133% increase in those looking for help with app development.’</p>"
            />
          </div>

        </div>
      </Layout>
    </>
  );
}
