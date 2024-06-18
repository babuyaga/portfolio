import React from "react";
import "./rankholder.scss";
import RankCard from "../cards/RankCard.jsx";
import RankHeading from "../cards/RankHeading.jsx";




const articles = [
    {
        blog_title: "Enhancing Brantford Transit Web App",
        subtitle: "A Community-Driven Approach — Part I",
        subject: "Product Design",
        link: "https://medium.com/@adammichaeljose/enhancing-the-brantford-transit-bus-tracker-web-application-a-community-driven-approach-58c86597552c"
    },
    {
        blog_title: "AI Powered SOP and Resume Creation",
        subtitle: "A MERN Stack Journey",
        subject: "Technology",
        link: "https://adammichaeljose.medium.com/simplifying-sop-and-resume-creation-with-ai-a-mern-stack-journey-d5aa0f7be4fe"
    },
    {
        blog_title: "Some Key Concepts in AGILE",
        subtitle: "A quick overview of key concepts and terms",
        subject: "Project Management",
        link: "https://adammichaeljose.medium.com/some-key-concepts-in-agile-4466c91ef6dc"
    },
    {
        blog_title: "Designing Systems that Scale",
        subtitle: "Challenges in Big Tech",
        subject: "Technology",
        link: "https://adammichaeljose.medium.com/designing-systems-that-scale-463e66c7ab4d"
    },
    {
        blog_title: "Agile Principles",
        subtitle: "A tiny history lesson on Agile",
        subject: "Project Management",
        link: "https://adammichaeljose.medium.com/agile-principles-213f98a669c2"
    },
    {
        blog_title: "Agile Development",
        subtitle: "Part of Product Management 101",
        subject: "Project Management",
        link: "https://medium.com/@adammichaeljose/agile-development-and-project-management-part-1-5a9d7c3f7e3d"
    },
    {
        blog_title: "Basic Probability Distributions",
        subtitle: "For every fledgling analyst",
        subject: "Data Analysis",
        link: "https://adammichaeljose.medium.com/basic-probability-distributions-ae92114e8d3e"
    },
    {
        blog_title: "What is a Product?",
        subtitle: "It really could be anything",
        subject: "Product Management",
        link: "https://adammichaeljose.medium.com/what-is-a-product-3e6ea526d150"
    },
    {
        blog_title: "Product Management 101 — Part 1",
        subtitle: "Who is a Product Manager?",
        subject: "Product Management",
        link: "https://adammichaeljose.medium.com/who-is-a-product-manager-2df4721608fe"
    }
];




function RankHolder({ children }) {
    return (<div className="rank__division">
        <div className="rank__title">
            {/* <RankHeading/> */}
        </div>
        <div className="rank__list">
            {articles.map((article) => <RankCard link={article.link} blog_title={article.blog_title} subtitle={article.subtitle} subject={article.subject} />)}
        </div>
    </div>);
}


export default RankHolder;
