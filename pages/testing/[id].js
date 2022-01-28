import React from 'react';
import { templateData } from '../../components/dummyData';

function Details({items}) {
  return (
    <div style={{backgroundColor: 'red'}}>
      Details
      <h2>{items.title}</h2>
    </div>
  );
}

export default Details;

export const getStaticPaths = async () => {
  const paths = templateData.map(item => {
    return {
      params: {id: item.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await templateData.context.params.id
  return {
    props: {
      items : data,
    }
  }
}