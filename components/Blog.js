import Image from 'next/image';
import Link from 'next/link';

function Blog({data}) {
  return (
    <div className='container'>
      <div className='blog'>
        {data.map((index, id) => (
          <div className='blog__block' key={id}>
            <Image width={405} height={285} className='blog__block--img' src={`/images/${index.img}.png`} alt=""/>
            <time>{index.date}</time>
            <h6>{index.title}</h6>
            <p>{index.text}</p>
            <Link href={`/blog/${id + 1}`} passHref>
              <span>Read More <Image width={24} height={12} src="/images/blog/blog__arrow.svg" alt="" /></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
