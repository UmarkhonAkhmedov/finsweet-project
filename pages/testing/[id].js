import React from 'react';
import { templateData } from '../../components/dummyData';

function Details({item}) {
  
  console.log("items", item)
  return (
    <div style={{backgroundColor: 'red'}}>
      Details
      <h2>{item.title}</h2>
    </div>
  );
}

export default Details;

export function getStaticPaths() {
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

export function getStaticProps(context) {
  const id = context.params.id
  const data = templateData.filter((item) => item.id == id)[0]
  return {
    props: {
      item : data,
    }
  }
}