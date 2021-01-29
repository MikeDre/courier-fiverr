import * as React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layouts/Layout';
import Hero from '../components/Hero/Hero';

import Callout from '../components/Sections/Callout/Callout';
import ImageText from '../components/Sections/ImageText/ImageText';
import Video from '../components/Video/Video';
import ImageImage from '../components/Sections/ImageImage/ImageImage';
import HeadingText from '../components/Sections/HeadingText/HeadingText';
import Image from '../components/Sections/Image/Image';
import Quote from '../components/Sections/Quote/Quote';
import TwoColumnText from '../components/Sections/TwoColumnText/TwoColumnText';

// Landing page images
import FiverrLifestyleImage from '../images/fiverr-lifestyle.jpg';
import FiverrAprilImage from '../images/fiverr-april.jpg';
import FiverrEraImage from '../images/fiverr-era.jpg';
import FiverrEra2Image from '../images/fiverr-era-2.jpg';
import FiverrJimmyImage from '../images/fiverr-jimmy.jpg';
import FiverrJimmy2Image from '../images/fiverr-jimmy-2.jpg';

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
        <Hero image={FiverrEraImage} />

        <section>
          <Callout
            backgroundColor="#ffffff"
            header="The new face of freelancing"
            content="<p>It’s been a challenging few months for small businesses, self-employed entrepreneurs and freelancers. The news has been overwhelmingly bleak, with reports of hospitality, food service and the entertainment industries bearing the <a href='https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/coronavirusandtheeconomicimpactsontheuk/19november2020' target='_blank' rel='noopener noreferrer'>largest brunt</a> of closures and trading pauses.</p>"
          />
        </section>

        <section className="uk-margin-large-bottom">
          <ImageText
            image={FiverrLifestyleImage}
            header="A strong resolve"
            content="<p>What is often missed, though, are the many ingenious ways in which small traders and the self-employed have stayed afloat in this time. They’ve found silver linings from the circumstances, as Gali Arnon highlights: ‘Despite the challenges, we found that over three quarters of workers surveyed in the UK agreed that working from home has allowed them to take on more freelance work. Four in five freelancers agreed that working from home has made them more productive. Freelancing has suddenly become a very legitimate option for many workers in the UK.’</p><p>Gali is the CMO of Fiverr, a global platform that connects businesses with talented freelancers according to their skills, budgets and project deadlines. The platform has seen record numbers of new freelancers joining and creating new gigs this year. ‘It is clear that people are turning to <a href='https://www.fiverr.com/' target='_blank' rel='noopener noreferrer'></a>Fiverr</a> to explore new income sources as they have more time at home and as global unemployment increases,’ Gali adds.</p><p>And for small business owners needing to suddenly and repeatedly pivot, Fiverr proved a convenient way to attract the right people to get the job done: ‘Small businesses increasingly relied on Fiverr to help them move online, or to improve their online presence if they had one already. There was a 319% increase in searches for “dropshipping”, a 205% rise in businesses searching for front-end development skills, and a further 133% increase in those looking for help with app development.’</p>"
            headerColor="#884689"
            backgroundColor="#de8c57"
          />
        </section>

        <section className="uk-container uk-container-large uk-margin-large-top uk-margin-large-bottom">
          <Video
            wistiaID="mncpoovoet"
          />
        </section>

        <section className="uk-margin-large-top">
          <ImageText
            image={FiverrAprilImage}
            header="Next-gen teamwork"
            content="<p>Seeing this rapid, large-scale digital transformation that so many small businesses were taking on &ndash; and noting that many of them needed help getting online in the first place &ndash; Fiverr launched <a href='https://theshift.fiverr.com'>The Shift</a> in August. A one-stop shop of resources and case studies, The Shift contains all the tools and information that a small business needs to take their first steps into the world of digital trading. From the very first hurdle of <a href='https://www.fiverr.com/pages/get-your-website'>building a website</a>, to guides on <a href='https://www.fiverr.com/resources/guides/digital-marketing?utm_source=brand&amp;utm_medium=brand&amp;utm_campaign=theshift&amp;utm_content=resource'>digital marketing</a> and search engine optimisation (SEO), Fiverr&rsquo;s network of freelance professionals has been helping small businesses move online quickly and efficiently.</p><p>Following on from the success of The Shift, the company launched <a href='https://www.fiverr.com/business'>Fiverr Business</a> in September, a modern digital collaboration environment built for the remote working generation. Fiverr Business is a subscription-based service which allows small businesses to collaborate effectively with their freelance workforce, using a project dashboard that aligns internal teams to external talent. Task updates, approvals and budgets can all be tracked through the platform, making it easier than ever to bring the best minds of the freelance world into a small business team.</p>"
            headerColor="#1d1d1b"
            backgroundColor="#e5a842"
          />
        </section>

        <section className="uk-margin-large-bottom">
          <ImageImage
            imageLeft={FiverrJimmyImage}
            imageRight={FiverrJimmy2Image}
            backgroundColor="#d77472"
          />
        </section>

        <section className="uk-container uk-margin-large-top uk-margin-large-bottom">
          <HeadingText
            headerColor="#de8c57"
            header="Sub-title goes here and here"
            content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem ipsum dolor</strong><br>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
          />
        </section>

        <section className="uk-margin-large-top uk-margin-large-bottom">
          <Quote
            quote="Pull out quote here across multiple lines to create an even bigger impact"
            author="Author of Quote, Job Title"
            quoteColor="#1f2a47"
            authorColor="#ffffff"
            backgroundColor="#e5a842"
          />
        </section>

        <section className="uk-container uk-container-large uk-margin-large-top uk-margin-large-bottom">
          <TwoColumnText
            header="Sub-title"
            content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
          />
        </section>

        <section className="uk-container uk-container-large uk-margin-large-top uk-margin-large-bottom">
          <Image
            image={FiverrEra2Image}
            altText="Man holding tray of plants"
          />
        </section>

        <section className="uk-margin-large-top uk-margin-large-bottom">
          <Callout
            backgroundColor="#d5d0c9"
            header="Sub-title"
            content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
          />
        </section>

        <section className="uk-container uk-margin-large-top uk-margin-large-bottom">
          <HeadingText
            image={FiverrJimmyImage}
            imageAltText="Man at desk, typing on laptop"
            headerColor="#de8c57"
            header="Sub-title goes here and here"
            content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem ipsum dolor</strong><br>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p><strong>Lorem ipsum dolor</strong><br>sit amet, consectetur consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
          />
        </section>

      </Layout>
    </>
  );
}
