"use client";
import React from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  createdAt: string;
};

export default function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className="list-group">
      {posts.map(post => (
        <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
          <Link href={`/post/${post.id}`}>{post.title}</Link>
          <span className="text-muted">
            {new Date(post.createdAt).toLocaleDateString("id-ID")}
          </span>
        </li>
      ))}
    </ul>
  );
}