async function getPost(params) {
  const arr = ["hi", "no"];
  const post = await arr[params.id];

  return post;
}

export default async function Post({ params }) {
  const post = await getPost(params);
  return <p>Hi {post}</p>;
}
