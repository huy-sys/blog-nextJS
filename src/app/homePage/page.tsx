"use client";
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import './HomePage.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { Post, posts } from '../../lib/posts';
import PostItem from '../../components/PostItem';

const HomePage = () => {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const [todos, setTodos] = useState<Post[]>(() => {
    const savedTodos = localStorage.getItem('postList');
    return savedTodos ? JSON.parse(savedTodos) : posts;
  });
  useEffect(() => {
    localStorage.setItem('postList', JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router, isLoggedIn]);

  const handleLogout = () => {
    // Clear isLoggedIn from localStorage
    localStorage.removeItem("isLoggedIn");
    // Navigate to the login page
    router.push('/');
  };
  return (
    <>
      <div className="home-page-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="home-page-home-page">
          <div className="home-page-content">
            <div className="home-page-onavbar">
              <div className="home-page-frame209">
                <div className="home-page-logo">
                  <img
                    src="/meta2147-a9t9.svg"
                    alt="Meta2147"
                    className="home-page-meta"
                  />
                  <img
                    src="/blog2147-qb0f.svg"
                    alt="Blog2147"
                    className="home-page-blog"
                  />
                  <img
                    src="/union2147-hw7s.svg"
                    alt="Union2147"
                    className="home-page-union"
                  />
                </div>
                <div className="home-page-frame208">
                  <div className="home-page-menu">
                    <div className="home-page-item">
                      <Link href="/homePage" className="home-page-text Bodyb4Regular">
                        <span>Home</span>
                      </Link>
                    </div>
                    <div className="home-page-item1">
                      <Link href="/blog" className="home-page-text002 Bodyb4Regular">
                        <span>Blog</span>
                      </Link>
                    </div>
                    <div className="home-page-item2">
                      <span className="home-page-text004 Bodyb4Regular">
                        <span>Single Post</span>
                      </span>
                    </div>
                    <div className="home-page-item3">
                      <span className="home-page-text006 Bodyb4Regular">
                        <span>Pages</span>
                      </span>
                    </div>
                    <div className="home-page-item4">
                      <span className="home-page-text008 Bodyb4Regular">
                        <span>Contact</span>
                      </span>
                    </div>
                  </div>
                  <div className="home-page-frame207">
                    <div className="home-page-atomsinput">
                      <span className="home-page-text010 BodytextSm-14Regular">
                        <span>Search</span>
                      </span>
                      <img
                        src="/searchoutlinei2147-fde.svg"
                        alt="searchoutlineI2147"
                        className="home-page-searchoutline"
                      />
                    </div>
                    <div className="home-page-swich">
                      <div className="home-page-frame205">
                        <img
                          src="/sunny2147-72z.svg"
                          alt="sunny2147"
                          className="home-page-sunny"
                        />
                      </div>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-page-content01">
              <div className="home-page-content02">
                <div className="home-page-content03">
                  <img
                    src="/image2101-fwse-1300w.png"
                    alt="Image2101"
                    className="home-page-image"
                  />
                  <div className="home-page-content04">
                    <div className="home-page-heading">
                      <div className="home-page-abadge">
                        <span className="home-page-text012 Bodyb5Medium">
                          <span>Technology</span>
                        </span>
                      </div>
                      <span className="home-page-text014 Headingh1Semibold">
                        <span>
                          The Impact of Technology on the Workplace: How
                          Technology is Changing
                        </span>
                      </span>
                    </div>
                    <div className="home-page-short-info">
                      <div className="home-page-aauthor">
                        <img
                          src="/imagei2101-9eo-200h.png"
                          alt="ImageI2101"
                          className="home-page-image01"
                        />
                        <span className="home-page-text016 Bodyb4Medium">
                          <span>Jason Francisco</span>
                        </span>
                      </div>
                      <span className="home-page-text018 Bodyb4Regular">
                        <span>August 20, 2022</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-page-content05">
                  <div className="home-page-oadsspace">
                    <div className="home-page-info">
                      <span className="home-page-text020 Bodyb5Regular">
                        <span>Advertisement</span>
                      </span>
                      <span className="home-page-text022 Headingh4Semibold">
                        <span>You can place ads</span>
                      </span>
                      <span className="home-page-text024 Bodyb3Regular">
                        <span>750x100</span>
                      </span>
                    </div>
                  </div>
                  <div className="home-page-opostlayout">
                    <div className="home-page-heading01">
                      <span className="home-page-text026 Headingh3Bold">
                        <span>Latest Post</span>
                      </span>
                    </div>
                    <div className="home-page-content06">
                      <div className="home-page-row">
                        {todos.map(post => (
                          <PostItem key={post.id} post={post} />
                        ))}
                      </div>
                    </div>
                    <button className="home-page-abutton">
                      <span className="home-page-text100 Bodyb4Medium">
                        <span>View All Post</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="home-page-oadsspace1">
                  <div className="home-page-info1">
                    <span className="home-page-text102 Bodyb5Regular">
                      <span>Advertisement</span>
                    </span>
                    <span className="home-page-text104 Headingh4Semibold">
                      <span>You can place ads</span>
                    </span>
                    <span className="home-page-text106 Bodyb3Regular">
                      <span>750x100</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-page-ofooter">
                <div className="home-page-content16">
                  <div className="home-page-info2">
                    <div className="home-page-about">
                      <span className="home-page-text108 textLgSemiBold">
                        <span>About</span>
                      </span>
                      <span className="home-page-text110 textBaseRegular">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </span>
                      </span>
                    </div>
                    <div className="home-page-contact">
                      <span className="home-page-text112">
                        <span className="home-page-text113">
                          Email :
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>info@jstemplate.net</span>
                      </span>
                      <span className="home-page-text115">
                        <span className="home-page-text116">
                          Phone :
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>880 123 456 789</span>
                      </span>
                    </div>
                  </div>
                  <div className="home-page-link">
                    <div className="home-page-quick-link">
                      <span className="home-page-text118 textLgSemiBold">
                        <span>Quick Link</span>
                      </span>
                      <div className="home-page-link-list">
                        <span className="home-page-text120 textBaseRegular">
                          <span>Home</span>
                        </span>
                        <span className="home-page-text122 textBaseRegular">
                          <span>About</span>
                        </span>
                        <span className="home-page-text124 textBaseRegular">
                          <span>Blog</span>
                        </span>
                        <span className="home-page-text126 textBaseRegular">
                          <span>Archived</span>
                        </span>
                        <span className="home-page-text128 textBaseRegular">
                          <span>Author</span>
                        </span>
                        <span className="home-page-text130 textBaseRegular">
                          <span>Contact</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-page-category">
                      <span className="home-page-text132 textLgSemiBold">
                        <span>Category</span>
                      </span>
                      <div className="home-page-category-list">
                        <span className="home-page-text134 textBaseRegular">
                          <span>Lifestyle</span>
                        </span>
                        <span className="home-page-text136 textBaseRegular">
                          <span>Technology</span>
                        </span>
                        <span className="home-page-text138 textBaseRegular">
                          <span>Travel</span>
                        </span>
                        <span className="home-page-text140 textBaseRegular">
                          <span>Business</span>
                        </span>
                        <span className="home-page-text142 textBaseRegular">
                          <span>Economy</span>
                        </span>
                        <span className="home-page-text144 textBaseRegular">
                          <span>Sports</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-page-mnewsletter">
                    <div className="home-page-heading11">
                      <span className="home-page-text146 Headingh4Semibold">
                        <span>Weekly Newsletter</span>
                      </span>
                      <span className="home-page-text148 Bodyb4Regular">
                        <span>Get blog articles and offers via email</span>
                      </span>
                    </div>
                    <div className="home-page-form">
                      <div className="home-page-ainput">
                        <div className="home-page-input">
                          <span className="home-page-text150 Bodyb4Regular">
                            <span>Your Email</span>
                          </span>
                          <img
                            src="/maili2147-cu6f.svg"
                            alt="mailI2147"
                            className="home-page-mail"
                          />
                        </div>
                      </div>
                      <button className="home-page-abutton1">
                        <span className="home-page-text152 Bodyb4Medium">
                          <span>Subscribe</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-page-copyright">
                  <div className="home-page-copyright-info">
                    <img
                      src="/logo2147-p54.svg"
                      alt="Logo2147"
                      className="home-page-logo1"
                    />
                    <div className="home-page-text154">
                      <span className="home-page-text155">
                        <span className="home-page-text156">Meta</span>
                        <span>Blog</span>
                      </span>
                      <span className="home-page-text158 textBaseRegular">
                        <span className="home-page-text159">
                          ©
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="home-page-text160">JS Template</span>
                        <span> 2023. All Rights Reserved.</span>
                      </span>
                    </div>
                  </div>
                  <div className="home-page-link1">
                    <span className="home-page-text162 textBaseRegular">
                      <span>Terms of Use</span>
                    </span>
                    <img
                      src="/divider2147-aziq.svg"
                      alt="Divider2147"
                      className="home-page-divider"
                    />
                    <span className="home-page-text164 textBaseRegular">
                      <span>Privacy Policy</span>
                    </span>
                    <img
                      src="/divider2147-ajt.svg"
                      alt="Divider2147"
                      className="home-page-divider1"
                    />
                    <span className="home-page-text166 textBaseRegular">
                      <span>Cookie Policy</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
