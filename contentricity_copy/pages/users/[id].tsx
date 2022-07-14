import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUser } from "../../controllers/Users";
import connectDB from "../../utils/mongodb";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  await connectDB()
  const [user, error] = await getUser((params?.id || "").toString());
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { user }
  };
}

const User = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (user === null || user === undefined) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <h1>User {user.id}</h1>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.displayName}</p>
      <p>{user.entity}</p>
    </div>
  )
}

export default User