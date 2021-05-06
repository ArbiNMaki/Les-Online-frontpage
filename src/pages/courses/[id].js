import React from "react";
import Head from "next/head";
import Link from "next/link";

function Todo({ data }) {
  return (
    <>
      <Head>
        <title>Les Online | Random | {data.title}</title>
      </Head>

      <main className="container mx-auto mt-4">
          <h1 className="text-6xl">{data.title}</h1>
          
          <p>Please complete your task</p>
          <Link href="/random">
            <a>Back</a>
          </Link>
      </main>
    </>
  );
}

Todo.getInitialProps = async (props) => {
  const { id } = props.query;

  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);

    return { data };
  } catch (error) {}
};

export default Todo;
