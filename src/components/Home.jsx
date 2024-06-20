import TopNavbar from "./navbar/TopNavbar.jsx";
import React, { useState, useEffect } from "react";
import './home.scss';
import * as appinfo from "./generalinfo.jsx";
import SectionComp from "./SectionComp.jsx";
import Partition from "./Partition.jsx";
import FeaturedCard from "./cards/FeaturedCard.jsx";
import RecentCard from "./cards/RecentCard.jsx";
import SwiperComp from "./carousel/SwiperComp.jsx";
import RankCard from './cards/RankCard.jsx';
import InfoCard from "./cards/InfoCard.jsx";
import TrendCard from "./cards/TrendCard.jsx";
import CategoryCard from "./cards/CategoryCard.jsx";
import ResourceCard from "./cards/ResourceCard.jsx";
import CardHolder from "./cards/CardHolder.jsx";
import RankHolder from "./containers/RankHolder.jsx";
import ParticlesComp from "./background/ParticlesComp.jsx";
import Form from "./forms/Form.jsx";


function Home() {


const infos = [{
  title:"Product Management Consulting",text:"Expertise in product strategy, roadmapping, lifecycle management.",partId:"consulting"
},{
  title:"Market Research & Strategy Development",text:"Conducting market analysis and developing strategic plans.",partId:"strategy"
},{
  title:"SaaS Implementation & Onboarding",text:"Ensuring smooth SaaS product transitions from sales to adoption.",partId:"implementation"
},{
  title:"Fullstack Development",text:"Building scalable web applications with NextJS, ReactJS, Node and Python.",partId:"development"
}]

const socials = [{app:"Instagram",icon:"instagram",link:"https://www.instagram.com/_jerry_jose/"},{app:"LinkedIn",icon:"linkedin",link:"https://www.linkedin.com/in/jerry-jose-055841159/"},{app:"X",icon:"xicon",link:"https://x.com/orupaavampayyan"},{app:"Threads",icon:"threads",link:"https://www.threads.net/@_jerry_jose"}]

const recentProjects = [{
  imageClass: "livereaction",
  projectName: "Live Reaction",
  projectDesc: "Live reaction and cursor tracking for interactive sessions. Implemented with NextJS 14",
  gitlink: "https://github.com/babuyaga/livereaction",
  projectlink: "https://livereaction.vercel.app/",
  linkDesc: "Github Repository"
},

{
  imageClass: "banking",
  projectName: "Banking app",
  projectDesc: "Budgeting and banking app that lets you transfer money to any account. Built on NextJS 14",
  gitlink: "https://github.com/babuyaga/banking",
  projectlink: "https://banking-szfv.vercel.app/",
  linkDesc: "Github Repository"
},
{
  imageClass: "portfolio",
  projectName: "Personal Portfolio Website",
  projectDesc: "A portfolio website showcasing personal projects and skills. Built with React and NextJS",
  gitlink: "https://github.com/babuyaga/portfolio",
  projectlink: "https://portfolio-ec70twh3l-babuyagas-projects.vercel.app/",
  linkDesc: "Github Repository"
}];


const OpenLinkedInButton = () => {
  const openLink = () => {
    window.open('https://www.linkedin.com/in/jerry-jose-055841159/', '_blank'); // Opens the link in a new tab
  };
  openLink();
}

const OpenEmail = () => {
  const openLink = () => {
    window.open('mailto:jerryjose097@gmail.com', '_blank'); // Opens the link in a new tab
  };
  openLink();
}

const OpenInsta = () => {
  const openLink = () => {
    window.open('https://www.instagram.com/_jerry_jose/', '_blank'); // Opens the link in a new tab
  };
  openLink();
}


const OpenBlog = () => {
  const openLink = () => {
    window.open('https://adammichaeljose.medium.com/', '_blank'); // Opens the link in a new tab
  };
  openLink();
}


const openIt=(link)=>{
  const openLink = () => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };
  openLink();
}


  return (

    <div className="app__holder">
      <div className="app">
        <TopNavbar />
        <div className="app__body">
                 <ParticlesComp/>
          <SectionComp className="all__section section__1" idnm="section__1">
            <Partition direction="column" partid="square__1" bgcolor="transparent">

              <div className="text__holder">
                <span className="heading__1">Develop, <span className="text-color-green"><span className="hover_letter_holder"><span className="hover_letter">l</span>
                <span className="hover_letter">a</span>
                <span className="hover_letter">u</span>
                <span className="hover_letter">n</span>
                <span className="hover_letter">c</span>
                <span className="hover_letter">h</span>
                </span>,</span> 
                and optimize
              </span>
                <span className="heading__1"> innovative products
                  <span className="blinking-span">.</span> 
                  </span>
                </div>
              <div className="text__holder2">
                <span className="heading__2">{/*appinfo.brandname*/} Transform your ideas into
                </span><span className="heading__2"> real-life solutions</span></div>
              <div className="button__holder"><button id="explore__button" className="home__button" onClick={OpenEmail}>Email</button><button id="invite__button" onClick={OpenLinkedInButton} className="home__button">LinkedIn</button></div>

              <button onClick={OpenInsta} className="instabutton" id="section__bottom_text">
                <span className="learn__more">Let's talk{/*appinfo.brandname*/} </span>
                <div className="arrow-right--learn-more"></div>
              </button>
            </Partition>
            <Partition partid="square__2" direction="row" bgcolor="transparent">
              <FeaturedCard />
            </Partition>
          </SectionComp>




          <SectionComp className="all__section" idnm="section__2">  <div className="text__holder"><span className="heading__2">Recent Builds</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__3"><SwiperComp>{recentProjects.map((project, index) => (
        <RecentCard
          key={index}
          imageClass={project.imageClass}
          projectName={project.projectName}
          projectDesc={project.projectDesc}
          gitlink={project.gitlink}
          linkDesc={project.linkDesc}
          projectlink={project.projectlink}
        />
      ))}</SwiperComp></SectionComp>
      
     

          <SectionComp className="all__section" idnm="section__4"> <div className="text__holder" id="top__collection"><span className="heading__2b">Blog posts</span> <div className="heading__2" id="drop_text"><span></span></div></div></SectionComp> 
          <SectionComp className="all__section" idnm="section__5">
            <RankHolder></RankHolder>
          </SectionComp>

          <SectionComp className="all__section" idnm="section__6">
            <Partition direction="row" partid="ranking__partition" bgcolor="transparent">  <div className="button__holder"><button id="explore__button" className="home__button" onClick={OpenBlog}>View All</button></div></Partition>
          </SectionComp>

        <SectionComp className="all__section" idnm="section__7"> <div className="text__holder" id="top__collection"><span className="heading__2b">Product Cases</span>
         <div className="heading__2" id="drop_text">
          {/* <span>all categories</span> */}
          </div></div></SectionComp>
    <SectionComp className="all__section" idnm="section__8">
        <SwiperComp sperV="4">
        <CardHolder><TrendCard backgroundId={"bigbasket-case"} link={"https://docs.google.com/presentation/d/1cO4T6tEFY6t-BjhdYneDfvkdR1CFYNHCk-ngFCa2ZCU/edit?usp=sharing"}/></CardHolder>
        <CardHolder><TrendCard backgroundId={"duo-case"} link={"https://docs.google.com/presentation/d/1UMTykt3pKEh-WNVOyyqnXaokURfTBVGOiMwbWDfA9Fw/edit?usp=sharing"}/></CardHolder>
        <CardHolder><TrendCard/></CardHolder>
        </SwiperComp>
    </SectionComp>

          <SectionComp className="all__section" idnm="section__9"> <div className="text__holder" id="top__collection"><span className="heading__2b">Things I Do</span> </div></SectionComp>
          <SectionComp className="all__section" idnm="section__10">
           {infos.map((info) => (
    <InfoCard key={info.id} partId={info.partId} text={info.text} title={info.title} />
))
}
            
          </SectionComp>

          {/* <SectionComp className="all__section" idnm="section__11"> <div className="text__holder" id="top__collection"><span className="heading__2">Business Cases</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__12"><SwiperComp><ResourceCard /><ResourceCard /><ResourceCard /></SwiperComp></SectionComp> */}


          <SectionComp className="all__section" idnm="section__4"> <div className="text__holder" id="top__collection"><span className="heading__2b">Brands I've Worked For</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__5">
            <Partition direction="column" partid="rank__1" bgcolor="transparent">
              <CategoryCard imageid={"flipkart-logo"} />
            </Partition>
            <Partition direction="column" partid="rank__2" bgcolor="transparent">
              <CategoryCard imageid={"byjus-logo"} />
            </Partition>
            <Partition direction="column" partid="rank__3" bgcolor="transparent">
              <CategoryCard imageid={"streak-logo"} />
            </Partition>
          </SectionComp>


        </div>


      </div>


{ 
      <footer>
        <SectionComp className="all__section" idnm="section__17"></SectionComp>
  <SectionComp className="all__section" idnm="section__18">
          <div className="footer__width_control">
            <Partition direction="column" partid="footer__1" bgcolor="transparent">
              <Form appinfo={appinfo}/>
            </Partition>
            <Partition direction="column" partid="footer__2" bgcolor="transparent">
              <span className="mail__text" id="mail__text_title">Here's my social media:</span>
              <div className="community__links_holder">

{socials.map((social)=>(<div className="socials__icon" id={social.icon} onClick={()=>{openIt(social.link)}}></div>))}

              </div>
            </Partition>
          </div>

        </SectionComp>
        
      </footer>}
    </div>

  );
}

export default Home;
