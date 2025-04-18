import BlogSingleClient from './BlogSingleClient';

export default function BlogSingle({ params }) {
    const { slug } = params;

    return <BlogSingleClient id={slug} />;
}
