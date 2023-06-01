import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
const contentUrl= 'https://kyotoprotocol.io/news/';

export default function SocialShare({...data}) {

    return (
      <>
      <FacebookShareButton
        url={contentUrl + data?.handle}>
        <FacebookIcon size={24} round  />
      </FacebookShareButton>
      <PinterestShareButton
       media='' url={contentUrl + data?.handle} >
        <PinterestIcon size={24} round />
      </PinterestShareButton>
      <RedditShareButton
        url={contentUrl + data?.handle} >
        <RedditIcon size={24} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={contentUrl + data?.handle} >
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={contentUrl + data?.handle} >
        <LinkedinIcon size={24} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={contentUrl + data?.handle} >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
    </>
    );
  }
