import Head from "next/head";
import Link from "next/link";

function Random({ data }) {
  return (
    <>
      <Head>
        <title>Les Online | Random</title>
      </Head>

      <main className="container mx-auto mt-4">
          <p className="font-sans font-normal text-4xl">Fetching random words</p>
          <ul className="font-sans font-normal">
            {data.map((todo) => {
              return (
                <li key={todo.id} className="border border-indigo-700 p-4">
                  {todo?.title ?? "-"}{" "}
                  <Link href="/random/[id]" as={`/random/${todo.id}`}>
                    <a>Launch</a>
                  </Link>
                </li>
              );
            })}
          </ul>
      </main>
    </>
  );
}

Random.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);

    return { data };
  } catch (error) {}
};

export default Random;
