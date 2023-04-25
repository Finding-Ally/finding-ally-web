import React from 'react'
import { useRouter } from 'next/router'
// import { Heading, Button, Grid } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const { data: session } = useSession()

	const { push, asPath } = useRouter()

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/some' })

		push(data.url)
	}

	const handleSignIn = () => push(`/signin?callbackUrl=${asPath}`)

	return (
		<div placeItems='center' className='grid' gridRowGap='1rem'>
			{session ? (
				<>
					<h1>Signed in as {session.user.email}</h1>
          <img src={session.user.image} alt="" />
					<button onClick={handleSignOut}>Sign out</button>
				</>
			) : (
				<>
					<h1>You are not signed in</h1>

					<button onClick={handleSignIn}>Sign in</button>
				</>
			)}
		</div>
	)
  
}