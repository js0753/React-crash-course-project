import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';
function PostsList({ isPosting, onStopPosting }) {
    const posts =  useLoaderData();

    
   
    return (
        <>
           
            {posts.length == 0 ? <div style={{ textAlign: 'center', color: 'white' }}><h2>No Posts</h2><p>Create a New Post</p></div> :
                <ul className={classes.posts}>
                    {posts.map((postData) => <Post key={postData.id} id={postData.id} {...postData} />)}
                </ul>
            }
        </>
    );
}

export default PostsList;




 // const [modalContent, setModalContent] = useState(<Modal closeModal={onStopPosting}>
    //     <NewPost onBodyChange={bodyChangeHandler}
    //         onAuthorChange={authorChangeHandler}
    //     />
    // </Modal>);
    // function onStopPosting() {
    //     setModalContent(null);
    // }
    // let modalContent;

    // if(isPosting){
    //     modalContent = (<Modal closeModal={onStopPosting}>
    //     <NewPost onBodyChange={bodyChangeHandler}
    //         onAuthorChange={authorChangeHandler}
    //     />
    // </Modal>);
    // }