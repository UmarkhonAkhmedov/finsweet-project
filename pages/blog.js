import Blog from '../components/Blog';
import Article from '../components/Blog/Article';
import { BlogblogData } from '../components/dummyData';

function blog() {
  return (
    <div>
      <Article/>
      <h2 style={{textAlign: "center"}}>Our Blog</h2>
      <Blog data={BlogblogData}/>
    </div>
  );
}

export default blog;
