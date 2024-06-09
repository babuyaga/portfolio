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


function Home() {


const infos = [{
  title:"Product Management Consulting",text:"Expertise in product strategy, roadmapping, and lifecycle management.",partId:"info__part_1"
},{
  title:"Market Research & Strategy Development",text:"Conducting market analysis and developing strategic plans.",partId:"info__part_2"
},{
  title:"SaaS Implementation & Onboarding",text:"Ensuring smooth SaaS product transitions from sales to adoption.",partId:"info__part_3"
},{
  title:"Fullstack Web Development with NextJS",text:"Building scalable web applications with NextJS for high performance.",partId:"info__part_4"
}]




  const handleScroll = () => {

  }



  return (

    <div className="app__holder">
      <div className="app">
        <TopNavbar />
        <div className="app__body">
                 <ParticlesComp/>
          <SectionComp className="all__section section__1" idnm="section__1">
            <Partition direction="column" partid="square__1" bgcolor="transparent">

              <div className="text__holder"><span className="heading__1">Develop, <span className="text-color-green"><span className="hover_letter_holder"><span className="hover_letter">l</span><span className="hover_letter">a</span><span className="hover_letter">u</span><span className="hover_letter">n</span><span className="hover_letter">c</span><span className="hover_letter">h</span></span>,</span> and optimize
              </span>
                <span className="heading__1"> innovative products<span className="blinking-span">.</span> </span></div>
              <div className="text__holder"><span className="heading__2">{/*appinfo.brandname*/} Transform your ideas into
              </span><span className="heading__2">real-life solutions</span></div>
              <div className="button__holder"><button id="explore__button" className="home__button">Email</button><button id="invite__button" className="home__button">LinkedIn</button></div>

              <div className="text__holder" id="section__bottom_text">
                <span onClick={() => { console.log("Hello") }} className="learn__more">Let's talk{/*appinfo.brandname*/} </span>
                <div className="arrow-right--learn-more"></div>
              </div>
            </Partition>
            <Partition partid="square__2" direction="row" bgcolor="transparent">
              <FeaturedCard />
            </Partition>
          </SectionComp>




          <SectionComp className="all__section" idnm="section__2">  <div className="text__holder"><span className="heading__2">Top Projects</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__3"><SwiperComp><RecentCard /><RecentCard imageClass="banking" projectName="Banking app" projectDesc="Budgeting and banking app that let's you transfer money to any account. Built on NextJS 14" /><RecentCard /></SwiperComp></SectionComp>


          <SectionComp className="all__section" idnm="section__4"> <div className="text__holder" id="top__collection"><span className="heading__2">Blog posts</span> {/*<div className="heading__2" id="drop_text"><span>| last 30 days</span></div>*/}</div></SectionComp>
          <SectionComp className="all__section" idnm="section__5">
            {/*  <Partition direction="column" partid="rank__1" bgcolor="transparent">
                <RankCard /><RankCard/>    <RankCard/><RankCard/>    <RankCard/>
            </Partition>
            <Partition direction="column" partid="rank__2" bgcolor="transparent">
                    <RankCard/><RankCard/>    <RankCard/><RankCard/>    <RankCard/>
            </Partition>
            <Partition direction="column" partid="rank__3" bgcolor="transparent">
                    <RankCard/><RankCard/>    <RankCard/><RankCard/>    <RankCard/>
            </Partition> */}

            <RankHolder></RankHolder>
          </SectionComp>

          <SectionComp className="all__section" idnm="section__6">
            <Partition direction="row" partid="ranking__partition" bgcolor="transparent">  <div className="button__holder"><button id="explore__button" className="home__button">View All</button></div></Partition>
          </SectionComp>

          {/* <SectionComp className="all__section" idnm="section__7"> <div className="text__holder" id="top__collection"><span className="heading__2">Trending in</span> <div className="heading__2" id="drop_text"><span>all categories</span></div></div></SectionComp>
    <SectionComp className="all__section" idnm="section__8">
        <SwiperComp sperV="4">
        <CardHolder><TrendCard/><TrendCard/></CardHolder>
        <CardHolder><TrendCard/><TrendCard/></CardHolder>
        <CardHolder><TrendCard/><TrendCard/></CardHolder>
        <CardHolder><TrendCard/><TrendCard/></CardHolder>
        </SwiperComp>
    </SectionComp> */}

          <SectionComp className="all__section" idnm="section__9"> <div className="text__holder" id="top__collection"><span className="heading__2">Guiding Your Digital Path</span> </div></SectionComp>
          <SectionComp className="all__section" idnm="section__10">
           {infos.map((info) => (
    <InfoCard key={info.id} partId={info.partId} text={info.text} title={info.title} />
))
}
            
          </SectionComp>

          <SectionComp className="all__section" idnm="section__11"> <div className="text__holder" id="top__collection"><span className="heading__2">Case Studies</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__12"><SwiperComp><ResourceCard /><ResourceCard /><ResourceCard /></SwiperComp></SectionComp>


          <SectionComp className="all__section" idnm="section__4"> <div className="text__holder" id="top__collection"><span className="heading__2">Places I've worked at</span></div></SectionComp>
          <SectionComp className="all__section" idnm="section__5">
            <Partition direction="column" partid="rank__1" bgcolor="transparent">
              <CategoryCard />
            </Partition>
            <Partition direction="column" partid="rank__2" bgcolor="transparent">
              <CategoryCard />
            </Partition>
            <Partition direction="column" partid="rank__3" bgcolor="transparent">
              <CategoryCard />
            </Partition>
          </SectionComp>


        </div>


      </div>



      <footer>
        <SectionComp className="all__section" idnm="section__17"></SectionComp>
        <SectionComp className="all__section" idnm="section__18">
          <div className="footer__width_control">
            <Partition direction="column" partid="footer__1" bgcolor="transparent">
              <span className="mail__text" id="mail__text_title">Stay in the loop</span>
              <span className="mail__text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips on getting more from {appinfo.brandname}</span>
              <form className="mailing__list_form"><input type="email" placeholder="Your email address" className="mailing__list_input"></input><button className="home__button" id="mailing__list_button">Join</button></form>

            </Partition>
            <Partition direction="column" partid="footer__2" bgcolor="transparent">
              <span className="mail__text" id="mail__text_title">Join our community</span>
              <div className="community__links_holder"></div>
            </Partition>
          </div>

        </SectionComp>
        <SectionComp className="all__section" idnm="section__18">
          <div className="footer__width_control">
            <Partition direction="column" partid="footer__1" bgcolor="transparent">
              <span className="mail__text" id="mail__text_title">Stay in the loop</span>
              <span className="mail__text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips on getting more from SilverVault</span>
              <form className="mailing__list_form"><input type="email" placeholder="Your email address" className="mailing__list_input"></input><button className="home__button" id="mailing__list_button">Join</button></form>

            </Partition>
            <Partition direction="column" partid="footer__2" bgcolor="transparent">
              <span className="mail__text" id="mail__text_title">Join our community</span>
              <div className="community__links_holder"></div>
            </Partition>
          </div>

        </SectionComp>
      </footer>
    </div>

  );
}

export default Home;
