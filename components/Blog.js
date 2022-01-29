import Link from 'next/link';

function Blog({data}) {
  return (
    <div className='container'>
      <div className='blog'>
        {data.map((index, id) => (
          <div className='blog__block' key={id}>
            <img className='blog__block--img' src={`/images/${index.img}.png`}/>
            <time>{index.date}</time>
            <h6>{index.title}</h6>
            <p>{index.text}</p>
            <Link href={`/blog/${id + 1}`}>
              <span>Read More <img src="/images/blog/blog__arrow.svg" alt="" /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
