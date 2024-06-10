"use client";
import React, { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import useTodo from "../../lib/useTodo";


const BlogListing = () => {
  const {todos, handleDeleteTodo} = useTodo()
  return (
    <>
      <div className="flex justify-center py-10 bg-slate-50">
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 w-10/12 max-w-screen-2xl">
          {todos.map(post => (
            <PostItem key={post.id} post={post} onDelete={handleDeleteTodo} />
          ))}
        </div>
      </div>
    </>
  );
};


export default BlogListing;
