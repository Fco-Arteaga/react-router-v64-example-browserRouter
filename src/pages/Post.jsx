import { useLoaderData, Link } from "react-router-dom"

const Post = () => {

    const {post} = useLoaderData()


        return (
            <>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
            <Link to="/Blog" >Volver al Blog</Link>
            </>
        )
}
export default Post

export const loaderPost= async ({params}) => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    //Lo contrario de res.ok//
    if(!res.ok) throw({
        status:res.status,
        statusText: "No encontado",
    })

    const post= await res.json()

    return {post}
}