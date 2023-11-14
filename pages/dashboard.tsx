import { useSession } from "next-auth/react";
// export default function Dashboard() {
// //   const { data: session, status } = useSession<Session>();
// //   const loading = status === "loading";
// //   console.log(session, loading);
//   return (
//     <>
//       <h1>Dashboard Page</h1>
//     </>
//   );
// }

// securing page client-side
import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession(); //returns a user object or null if user is not loggedIn
      console.log({ session });
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <h1>Dashboard page</h1>;
}

export default Dashboard;
