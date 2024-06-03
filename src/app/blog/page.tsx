"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Post, posts } from '../../lib/posts';
import PostItem from "../../components/PostItem";


const BlogListing = () => {
  const [todos, setTodos] = useState<Post[]>(() => {
    const savedTodos = localStorage.getItem('postList');
    return savedTodos ? JSON.parse(savedTodos) : posts;
  });
  useEffect(() => {
    localStorage.setItem('postList', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="blog-listing-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="blog-listing-blog-listing">
          <div className="blog-listing-content">
            <div className="blog-listing-header">
              <div className="blog-listing-onavbar">
                <div className="blog-listing-frame209">
                  <div className="blog-listing-logo">
                    <img
                      src="/metai2143-pru.svg"
                      alt="MetaI2143"
                      className="blog-listing-meta"
                    />
                    <img
                      src="/blogi2143-mksv.svg"
                      alt="BlogI2143"
                      className="blog-listing-blog"
                    />
                    <img
                      src="/unioni2143-1pkm.svg"
                      alt="UnionI2143"
                      className="blog-listing-union"
                    />
                  </div>
                  <div className="blog-listing-frame208">
                    <div className="blog-listing-menu">
                      <div className="blog-listing-item">
                        <Link
                          href="/homePage"
                          className="home-page-text Bodyb4Regular"
                        >
                          <span>Home</span>
                        </Link>
                      </div>
                      <div className="blog-listing-item1">
                        <Link
                          href="/blog"
                          className="home-page-text Bodyb4Regular"
                        >
                          <span>Blog</span>
                        </Link>
                      </div>
                      <div className="blog-listing-item2">
                        <Link href='/write' className="blog-listing-text004 Bodyb4Regular">
                          <span>Create Post</span>
                        </Link>
                      </div>
                      <div className="blog-listing-item3">
                        <span className="blog-listing-text006 Bodyb4Regular">
                          <span>Pages</span>
                        </span>
                      </div>
                      <div className="blog-listing-item4">
                        <span className="blog-listing-text008 Bodyb4Regular">
                          <span>Contact</span>
                        </span>
                      </div>
                    </div>
                    <div className="blog-listing-frame207">
                      <div className="blog-listing-atomsinput">
                        <span className="blog-listing-text010 BodytextSm-14Regular">
                          <span>Search</span>
                        </span>
                        <img
                          src="/searchoutlinei2143-1fhn.svg"
                          alt="searchoutlineI2143"
                          className="blog-listing-searchoutline"
                        />
                      </div>
                      <div className="blog-listing-swich">
                        <div className="blog-listing-frame205">
                          <img
                            src="/sunnyi2143-55j.svg"
                            alt="sunnyI2143"
                            className="blog-listing-sunny"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-listing-opageinfo">
                <div className="blog-listing-content01">
                  <span className="blog-listing-text012 Headingh2Semibold">
                    <span>Page TItle</span>
                  </span>
                  <div className="blog-listing-abreadcrumb">
                    <span className="blog-listing-text014 Bodyb4Regular">
                      <span>Home</span>
                    </span>
                    <div className="blog-listing-link-one">
                      <img
                        src="/divideri2101-1x4n.svg"
                        alt="DividerI2101"
                        className="blog-listing-divider"
                      />
                      <span className="blog-listing-text016 Bodyb4Regular">
                        <span>Link One</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-listing-mpostcardoverlay">
              <div className="blog-listing-content02">
                <div className="blog-listing-heading">
                  <div className="blog-listing-abadge">
                    <span className="blog-listing-text018 Bodyb5Medium">
                      <span>Technology</span>
                    </span>
                  </div>
                  <span className="blog-listing-text020 Headingh1Semibold">
                    <span>
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </span>
                  </span>
                </div>
                <div className="blog-listing-short-info">
                  <div className="blog-listing-aauthor">
                    <img
                      src="/imagei2147-daf-200h.png"
                      alt="ImageI2147"
                      className="blog-listing-image"
                    />
                    <span className="blog-listing-text022 Bodyb4Medium">
                      <span>Tracey Wilson</span>
                    </span>
                  </div>
                  <span className="blog-listing-text024 Bodyb4Regular">
                    <span>August 20, 2022</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="blog-listing-content03">
              <div className="blog-listing-opostlayout">
                <div className="blog-listing-content04">
                  <div className="blog-listing-row">
                    {todos.map(post => (
                      <PostItem key={post.id} post={post} />
                    ))}
                  </div>
                </div>
                <button className="blog-listing-abutton">
                  <span className="blog-listing-text098 Bodyb4Medium">
                    <span>Load More</span>
                  </span>
                </button>
              </div>
              <div className="blog-listing-oadsspace">
                <div className="blog-listing-info">
                  <span className="blog-listing-text100 Bodyb5Regular">
                    <span>Advertisement</span>
                  </span>
                  <span className="blog-listing-text102 Headingh4Semibold">
                    <span>You can place ads</span>
                  </span>
                  <span className="blog-listing-text104 Bodyb3Regular">
                    <span>750x100</span>
                  </span>
                </div>
              </div>
              <div className="blog-listing-ofooter">
                <div className="blog-listing-content14">
                  <div className="blog-listing-info1">
                    <div className="blog-listing-about">
                      <span className="blog-listing-text106 textLgSemiBold">
                        <span>About</span>
                      </span>
                      <span className="blog-listing-text108 textBaseRegular">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </span>
                      </span>
                    </div>
                    <div className="blog-listing-contact">
                      <span className="blog-listing-text110">
                        <span className="blog-listing-text111">
                          Email :
                          <span
                            dangerouslySetInnerHTML={{
                              __html: " ",
                            }}
                          />
                        </span>
                        <span>info@jstemplate.net</span>
                      </span>
                      <span className="blog-listing-text113">
                        <span className="blog-listing-text114">
                          Phone :
                          <span
                            dangerouslySetInnerHTML={{
                              __html: " ",
                            }}
                          />
                        </span>
                        <span>880 123 456 789</span>
                      </span>
                    </div>
                  </div>
                  <div className="blog-listing-link">
                    <div className="blog-listing-quick-link">
                      <span className="blog-listing-text116 textLgSemiBold">
                        <span>Quick Link</span>
                      </span>
                      <div className="blog-listing-link-list">
                        <span className="blog-listing-text118 textBaseRegular">
                          <span>Home</span>
                        </span>
                        <span className="blog-listing-text120 textBaseRegular">
                          <span>About</span>
                        </span>
                        <span className="blog-listing-text122 textBaseRegular">
                          <span>Blog</span>
                        </span>
                        <span className="blog-listing-text124 textBaseRegular">
                          <span>Archived</span>
                        </span>
                        <span className="blog-listing-text126 textBaseRegular">
                          <span>Author</span>
                        </span>
                        <span className="blog-listing-text128 textBaseRegular">
                          <span>Contact</span>
                        </span>
                      </div>
                    </div>
                    <div className="blog-listing-category">
                      <span className="blog-listing-text130 textLgSemiBold">
                        <span>Category</span>
                      </span>
                      <div className="blog-listing-category-list">
                        <span className="blog-listing-text132 textBaseRegular">
                          <span>Lifestyle</span>
                        </span>
                        <span className="blog-listing-text134 textBaseRegular">
                          <span>Technology</span>
                        </span>
                        <span className="blog-listing-text136 textBaseRegular">
                          <span>Travel</span>
                        </span>
                        <span className="blog-listing-text138 textBaseRegular">
                          <span>Business</span>
                        </span>
                        <span className="blog-listing-text140 textBaseRegular">
                          <span>Economy</span>
                        </span>
                        <span className="blog-listing-text142 textBaseRegular">
                          <span>Sports</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-listing-mnewsletter">
                    <div className="blog-listing-heading10">
                      <span className="blog-listing-text144 Headingh4Semibold">
                        <span>Weekly Newsletter</span>
                      </span>
                      <span className="blog-listing-text146 Bodyb4Regular">
                        <span>Get blog articles and offers via email</span>
                      </span>
                    </div>
                    <div className="blog-listing-form">
                      <div className="blog-listing-ainput">
                        <div className="blog-listing-input">
                          <span className="blog-listing-text148 Bodyb4Regular">
                            <span>Your Email</span>
                          </span>
                          <img
                            src="/maili2101-t448.svg"
                            alt="mailI2101"
                            className="blog-listing-mail"
                          />
                        </div>
                      </div>
                      <button className="blog-listing-abutton1">
                        <span className="blog-listing-text150 Bodyb4Medium">
                          <span>Subscribe</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="blog-listing-copyright">
                  <div className="blog-listing-copyright-info">
                    <img
                      src="/logoi2101-n06.svg"
                      alt="LogoI2101"
                      className="blog-listing-logo1"
                    />
                    <div className="blog-listing-text152">
                      <span className="blog-listing-text153">
                        <span className="blog-listing-text154">Meta</span>
                        <span>Blog</span>
                      </span>
                      <span className="blog-listing-text156 textBaseRegular">
                        <span className="blog-listing-text157">
                          ©
                          <span
                            dangerouslySetInnerHTML={{
                              __html: " ",
                            }}
                          />
                        </span>
                        <span className="blog-listing-text158">
                          JS Template
                        </span>
                        <span> 2023. All Rights Reserved.</span>
                      </span>
                    </div>
                  </div>
                  <div className="blog-listing-link1">
                    <span className="blog-listing-text160 textBaseRegular">
                      <span>Terms of Use</span>
                    </span>
                    <img
                      src="/divideri2101-lfu9.svg"
                      alt="DividerI2101"
                      className="blog-listing-divider1"
                    />
                    <span className="blog-listing-text162 textBaseRegular">
                      <span>Privacy Policy</span>
                    </span>
                    <img
                      src="/divideri2101-ekqr.svg"
                      alt="DividerI2101"
                      className="blog-listing-divider2"
                    />
                    <span className="blog-listing-text164 textBaseRegular">
                      <span>Cookie Policy</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-listing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-blog-listing {
            width: 100%;
            height: 3114px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-content {
            gap: 48px;
            top: 0px;
            left: 0px;
            width: 1920px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-header {
            gap: 24px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-onavbar {
            gap: 10px;
            display: flex;
            padding: 32px 350px;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-frame209 {
            gap: 118px;
            display: flex;
            align-items: flex-start;
          }
          .blog-listing-logo {
            width: 158px;
            height: 36px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .blog-listing-meta {
            top: 9.531813621520996px;
            left: 45.00244140625px;
            width: 55px;
            height: 19px;
            position: absolute;
            box-sizing: content-box;
          }
          .blog-listing-blog {
            top: 9.237277030944824px;
            left: 105.40643310546875px;
            width: 53px;
            height: 24px;
            position: absolute;
            box-sizing: content-box;
          }
          .blog-listing-union {
            top: 0px;
            left: 0px;
            width: 36px;
            height: 36px;
            position: absolute;
          }
          .blog-listing-frame208 {
            gap: 21px;
            display: flex;
            align-items: center;
          }
          .blog-listing-menu {
            gap: 40px;
            width: 667px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .blog-listing-item {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-item1 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text002 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-item2 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text004 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-item3 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text006 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-item4 {
            gap: 4px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text008 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-frame207 {
            gap: 40px;
            display: flex;
            align-items: center;
          }
          .blog-listing-atomsinput {
            gap: 12px;
            width: 166px;
            display: flex;
            padding: 8px 8px 8px 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            background-color: var(--dl-color-secondary-100);
          }
          .blog-listing-text010 {
            color: var(--dl-color-secondary-400);
            height: auto;
            flex-grow: 1;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-searchoutline {
            width: 16px;
            height: 16px;
          }
          .blog-listing-swich {
            width: 48px;
            height: 28px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(232, 232, 234, 1);
          }
          .blog-listing-frame205 {
            gap: 10px;
            top: 2px;
            left: 2px;
            display: flex;
            padding: 5px;
            position: absolute;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.11999999731779099);
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-sunny {
            width: 14px;
            height: 14px;
          }
          .blog-listing-opageinfo {
            gap: 10px;
            width: 1216px;
            display: flex;
            padding: 16px 0;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-content01 {
            gap: 8px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-text012 {
            color: var(--dl-color-secondary-800);
            height: auto;
            text-align: center;
            line-height: 36px;
          }
          .blog-listing-abreadcrumb {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-text014 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .blog-listing-link-one {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-divider {
            width: 16px;
            height: 1px;
          }
          .blog-listing-text016 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .blog-listing-mpostcardoverlay {
            gap: 10px;
            width: 1216px;
            height: 450px;
            display: flex;
            padding: 40px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-radius: 12px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url("/tq_ywxdsy0hzv-hceg-500h.png");
          }
          .blog-listing-content02 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-theme1-primary);
          }
          .blog-listing-text018 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text020 {
            color: var(--dl-color-default-white);
            width: 720px;
            height: auto;
            text-align: left;
            line-height: 40px;
          }
          .blog-listing-short-info {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text022 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text024 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-content03 {
            gap: 80px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-opostlayout {
            gap: 32px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-content04 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 1216px;
          }
          .blog-listing-row {
            gap: 20px;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
          }
          .blog-listing-mpostcardgrid {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle38 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content05 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading01 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge01 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text026 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text028 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info01 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor01 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image01 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text030 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text032 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid1 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle381 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content06 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading02 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge02 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text034 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text036 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info02 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor02 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image02 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text038 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text040 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid2 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle382 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content07 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading03 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge03 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text042 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text044 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info03 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor03 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image03 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text046 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text048 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-row1 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
          }
          .blog-listing-mpostcardgrid3 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle383 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content08 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading04 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge04 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text050 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text052 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info04 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor04 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image04 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text054 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text056 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid4 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle384 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content09 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading05 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge05 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text058 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text060 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info05 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor05 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image05 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text062 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text064 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid5 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle385 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content10 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading06 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge06 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text066 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text068 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info06 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor06 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image06 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text070 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text072 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-row2 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
          }
          .blog-listing-mpostcardgrid6 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle386 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content11 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading07 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge07 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text074 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text076 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info07 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor07 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image07 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text078 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text080 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid7 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle387 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content12 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading08 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge08 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text082 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text084 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info08 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor08 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image08 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text086 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text088 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mpostcardgrid8 {
            gap: 16px;
            width: 392px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-rectangle388 {
            width: 360px;
            height: 240px;
            border-radius: 6px;
          }
          .blog-listing-content13 {
            gap: 20px;
            display: flex;
            padding: 8px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-heading09 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-abadge09 {
            gap: 4px;
            display: flex;
            padding: 4px 10px;
            align-items: center;
            border-radius: 6px;
            justify-content: center;
            background-color: rgba(75, 107, 251, 0.05000000074505806);
          }
          .blog-listing-text090 {
            color: var(--dl-color-theme1-primary);
            height: auto;
            text-align: left;
            line-height: 20px;
          }
          .blog-listing-text092 {
            color: var(--dl-color-secondary-800);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-short-info09 {
            gap: 20px;
            display: flex;
            align-items: center;
          }
          .blog-listing-aauthor09 {
            gap: 12px;
            display: flex;
            align-items: center;
          }
          .blog-listing-image09 {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
          .blog-listing-text094 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text096 {
            color: var(--dl-color-secondary-400);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-abutton {
            gap: 12px;
            display: flex;
            padding: 12px 20px;
            overflow: hidden;
            align-items: center;
            border-color: rgba(105, 106, 117, 0.30000001192092896);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
          }
          .blog-listing-text098 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-oadsspace {
            gap: 10px;
            width: 750px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-100);
          }
          .blog-listing-info {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-text100 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: center;
            line-height: 20px;
          }
          .blog-listing-text102 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .blog-listing-text104 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: center;
            line-height: 26px;
          }
          .blog-listing-ofooter {
            gap: 64px;
            display: flex;
            padding: 64px 352px 0;
            align-items: flex-start;
            border-color: rgba(232, 232, 234, 1);
            border-style: solid;
            border-width: 1px 0 0;
            flex-direction: column;
            background-color: var(--dl-color-secondary-50);
          }
          .blog-listing-content14 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
          }
          .blog-listing-info1 {
            gap: 24px;
            width: 289px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .blog-listing-about {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text106 {
            color: var(--dl-color-secondary-800);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-text108 {
            color: var(--dl-color-secondary-500);
            width: 280px;
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-contact {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text110 {
            color: rgba(24, 26, 42, 1);
            height: auto;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-listing-text111 {
            color: var(--dl-color-secondary-800);
            font-weight: 600;
          }
          .blog-listing-text113 {
            color: rgba(24, 26, 42, 1);
            height: auto;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-listing-text114 {
            color: var(--dl-color-secondary-800);
            font-weight: 600;
          }
          .blog-listing-link {
            gap: 80px;
            width: 495px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .blog-listing-quick-link {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text116 {
            color: var(--dl-color-secondary-800);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-link-list {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text118 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text120 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text122 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text124 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text126 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text128 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-category {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text130 {
            color: var(--dl-color-secondary-800);
            height: auto;
            text-align: left;
            line-height: 28px;
          }
          .blog-listing-category-list {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text132 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text134 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text136 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text138 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text140 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text142 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mnewsletter {
            gap: 30px;
            width: 392px;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 12px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-heading10 {
            gap: 8px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-listing-text144 {
            color: var(--dl-color-secondary-800);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .blog-listing-text146 {
            color: var(--dl-color-secondary-500);
            height: auto;
            text-align: center;
            line-height: 24px;
          }
          .blog-listing-form {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-ainput {
            gap: 4px;
            width: 320px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .blog-listing-input {
            gap: 10px;
            display: flex;
            padding: 12px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(220, 221, 223, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            background-color: var(--dl-color-default-white);
          }
          .blog-listing-text148 {
            color: var(--dl-color-secondary-400);
            height: auto;
            flex-grow: 1;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-mail {
            width: 20px;
            height: 20px;
          }
          .blog-listing-abutton1 {
            gap: 12px;
            display: flex;
            padding: 12px 20px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-theme1-primary);
          }
          .blog-listing-text150 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-copyright {
            gap: 64px;
            width: 1216px;
            display: flex;
            padding: 32px 0;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(220, 221, 223, 1);
            border-style: solid;
            border-width: 1px 0 0;
          }
          .blog-listing-copyright-info {
            gap: 10px;
            display: flex;
            align-items: center;
          }
          .blog-listing-logo1 {
            width: 48px;
            height: 48px;
          }
          .blog-listing-text152 {
            gap: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-listing-text153 {
            color: var(--dl-color-secondary-900);
            height: auto;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Plus Jakarta Sans;
            font-weight: 400;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .blog-listing-text154 {
            font-weight: 400;
          }
          .blog-listing-text156 {
            color: rgba(59, 60, 74, 1);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-text157 {
            color: var(--dl-color-secondary-600);
          }
          .blog-listing-text158 {
            color: var(--dl-color-secondary-900);
          }
          .blog-listing-link1 {
            gap: 16px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: flex-end;
          }
          .blog-listing-text160 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-divider1 {
            width: 24px;
            height: 1px;
          }
          .blog-listing-text162 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
          .blog-listing-divider2 {
            width: 24px;
            height: 1px;
          }
          .blog-listing-text164 {
            color: var(--dl-color-secondary-600);
            height: auto;
            text-align: left;
            line-height: 24px;
          }
        `}
      </style>
    </>
  );
};


export default BlogListing;
