// utils/blogService.js (you can rename this as needed)
import blogs from '@/data/blogs.json';

export const getAllBlogs = async () => {
  let apiData = {
    title: "",
    excerpt: "",
  };

  try {
    const response = await fetch(
      "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=news&populate=NewsMetaData&populate=NewsMetaData.banner&populate=NewsMetaData.updatesAndEventsSection&populate=NewsMetaData.updatesAndEventsSection.card&populate=NewsMetaData.NewsSection"
    );
    const data = await response.json();

    const section = data.data?.[0]?.NewsMetaData?.[0]?.NewsSection?.[0] || {};

    apiData = {
      title: section.title || "",
      excerpt: section.description || "",
    };
  } catch (error) {
    console.error("Failed to fetch API blog section:", error);
  }

  // Return both API data and blogs from JSON
  return blogs.map(({ id, title, author, authorImage, excerpt }) => ({
    id,
    title: apiData.title,
    excerpt: apiData.excerpt,
    author,
    authorImage,
  }));

};

export const getSingleBlog = async (id) => {
  try {
    const blog = blogs.find((item) => item.id === id);
    return blog || null;
  } catch (error) {
    console.error("Error fetching single blog from JSON:", error);
    throw error;
  }
};
