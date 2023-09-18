import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
    /*let price=posts.price;
    if(price[1]==='$'){
        price.pop();
    }*/
  return (
    <ul>
      {
        posts.map( post => {
          return (
            <li key={ post._id } className={ post.author._id === auth._id ? 'mine': ''}>
              <Link to={`/posts/${post._id}`}>{ post.title }</Link> ${ (post.price*1).toFixed(2) } -{post.author.username}
            </li>
          );
        })
      }
    </ul>
  );
};

export default Posts;