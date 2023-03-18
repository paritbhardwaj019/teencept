import { type NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import CreatePost from 'src/components/CreatePost'
const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Join Nova Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="" />
      </Head>
      <CreatePost />
    </>
  );
};

export default Home;
