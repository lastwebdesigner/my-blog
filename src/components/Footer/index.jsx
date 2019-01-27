import React from 'react';

import FooterTitle from './FooterTitle';
import BlogPosts from './BlogPosts';
import Address from './Address';
import ReadingList from './ReadingList';
import GeekStuff from './GeekStuff';
import Social from './Social';
import FooterTagline from './FooterTagline';
import SubFooter from './SubFooter';
import Logo from '../Logo';

const Footer = props => (
    <footer className='site-footer padding-y padding-x-half'>
        <FooterTitle />
        <BlogPosts />
        <section className='extra'>
            <GeekStuff />
            <ReadingList />
        </section>
        <Social />
        <Address />
        <Logo />
        <FooterTagline />
        <SubFooter />
    </footer>
);

export default Footer;