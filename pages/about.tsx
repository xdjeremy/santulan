import React from 'react';
import {NextPage} from "next";
import {Layout} from "@/components/layout";
import {LinkName} from "@/components/navbar";
import {AboutPage} from "@/components/about";

const About: NextPage = () => {
    return (
        <Layout active={LinkName.About}>
            <AboutPage/>
        </Layout>
    );
};

export default About;
