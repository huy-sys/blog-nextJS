"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Post, posts } from '../../lib/posts';
import PostItem from "../../components/PostItem";
import FooterPage from "../../components/FooterPage";


const BlogListing = () => {
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

      <div className="flex justify-center items-center px-16 py-8 w-full max-md:px-5 max-md:max-w-full bg-gray-50">
        <div className="flex gap-5 justify-between max-w-full w-[1218px] max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc8343a891916293e0885ec85dd6080fad46cfcaddfab48436f5f7bbb36ff2e?apiKey=33a64a0f93c2493da0447121a699bf7a&"
            className="shrink-0 max-w-full aspect-[4.35] w-[158px]"
          />
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex justify-center items-center px-16 my-auto text-base leading-6 text-zinc-700 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between max-md:flex-wrap">
                <div className="justify-center whitespace-nowrap">Blog</div>
                <Link href={'/write'} className="justify-center whitespace-nowrap">Create Post</Link>
                <button onClick={handleLogout} className="justify-center whitespace-nowrap">Logout</button>
              </div>
            </div>
            <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap text-zinc-400">
              <div className="flex gap-3 py-2 pr-2 pl-4 rounded-md bg-zinc-100">
                <div className="flex-1">Search</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1024d9c520cd635a66c84da1cba18cde0a18948f7d97bef90c8a00935a7be7?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                  className="shrink-0 my-auto w-4 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfa914ef95ca7392d07e29c2f0929d6da491d66993d1f420e6cd421ea7b85294?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                className="shrink-0 my-auto w-12 aspect-[1.72]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-4 w-10/12 max-w-screen-2xl">
          {todos.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <FooterPage />
    </>
  );
};


export default BlogListing;
