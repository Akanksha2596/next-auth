import { getSession, useSession } from "next-auth/react";
export default function Blog({ data }: any) {
  //no need to pass session as props
  // const [session] = useSession();
  const { data: session } = useSession();
  console.log({ session });
  return (
    <>
      <h1>Blog Page - {data}</h1>
    </>
  );
}
export async function getServerSideProps(context: any) {
  // session will always be loaded with getServerSideProps
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`, //donot hardcode baseUrl use env variable instead.
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
