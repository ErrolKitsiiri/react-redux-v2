import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postActions";
import { useEffect } from "react";

const PostList = () => {

    //dispatch the events
    const dispatch = useDispatch();

    // get data from the store
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }


    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;