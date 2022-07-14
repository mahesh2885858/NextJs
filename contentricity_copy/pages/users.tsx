import type { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import connectDB from '../utils/mongodb'

import { getUsers } from '../controllers/Users'

export const getServerSideProps = async () => {
  await connectDB()
  const [users, error] = await getUsers()
  if (error) {
    return {
      props: { users: [], error }
    }
  }
  return {
    props: { users: JSON.parse(JSON.stringify(users)) }
  }
}

const Users = ({users, error}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <div>Error: <span>{error.toString()}</span> </div>
  }
  return (
    <div>
      <Head>
        <title>Users</title>
        <meta name="description" content="Example website only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Users</h1>
        <ul>
          {(typeof users !== 'string' && users !== null) && (users || []).map((user: any) => (
            <li key={user.id}>
              <Link href="/users/[id]" as={`/users/${user.id}`}>
                <a>{user.id} - {user.email}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
export default Users
