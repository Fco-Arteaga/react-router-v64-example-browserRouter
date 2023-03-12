import {Link, useLoaderData} from "react-router-dom";

const Blog = () => {
    const {posts}  = useLoaderData();

    return (  
    <div>

    <ul>
        {posts.length > 0 ? (
            posts.map((blog) => (
                <li key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>{blog.id}-{blog.title}</Link>
                </li>
            ))
            ) : (
                <li>No blogs found</li>
                )}
    </ul>  
    </div>
    )

}

export default Blog;

export const loaderBlog = async () => {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!res.ok) throw({
        status:res.status,
        statusText: "No encontado",
    })

    const posts= await res.json()

    return{posts:posts} 
}