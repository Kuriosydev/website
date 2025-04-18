import blogs from '@/data/blogs.json';

export const getAllBlogs = async () => {
    try {
        return blogs.map(({ id, title, author, authorImage, excerpt }) => ({ id, title, author, authorImage, excerpt }))
    } catch (error) {
        console.error("Getting data from json: ", error);
        throw error;
    }
}


export const getSingleBlog = async (id) => {
    try {
        const blog = blogs.find((item) => item.id == id)
        return blog
    } catch (error) {
        console.error("Getting single data from json: ", error);
        throw error;
    }
}