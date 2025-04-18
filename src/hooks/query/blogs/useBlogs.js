"use client";

import { getAllBlogs, getSingleBlog } from "@/api/functions/blog";
import { useQuery } from "@tanstack/react-query";
import { blogQueryKey, blogsQueryKey } from "./queryKey";

export const useFetchAllBlogs = () => {
    return useQuery({
        queryKey: blogsQueryKey,
        queryFn: getAllBlogs,
        onError: (error) => {
            console.error(error);
            throw error;
        }
    });
}


export const useFetchSingleBlog = (id) => {
    return useQuery({
        queryKey: blogQueryKey(id),
        queryFn: () => getSingleBlog(id),
        enabled: !!id,
        onError: (error) => {
            console.error(error);
            throw error;
        }
    });
}