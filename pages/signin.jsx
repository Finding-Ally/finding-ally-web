import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'

const providers = [
	// {
	// 	name: 'github',
	// 	Icon: BsGithub,
	// },
	// {
	// 	name: 'twitter',
	// 	Icon: BsTwitter,
	// },
	{
		name: 'google',
		Icon: BsGoogle,
	},
]

const Signin = () => {
	const { data: session, status } = useSession()
	const { push } = useRouter()
	const [email, setEmail] = useState('')

	console.log(session)
	if (status === 'loading') return <h1>Checking Authentication...</h1>

	if (session) {
		setTimeout(() => {
			push('/')
		}, 5000)

		return <h1>you are already signed in</h1>
	}

	const handleOAuthSignIn = (provider) => () => signIn(provider)

	// const handleSubmit = (e) => {
	// 	e.preventDefault()

	// 	if (!email) return false

	// 	signIn('email', { email, redirect: false })
	// }

	return (
		<div>
			{/* <form onSubmit={handleSubmit}>
				<label>Email Address</label>
				<input
					value={email}
					type='email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button type='submit' w='100%' my={5}>
					Login
				</button>
			</form> */}

			<div>
				{providers.map(({ name, Icon }) => (
					<button
						key={name}
						leftIcon={<Icon />}
						onClick={handleOAuthSignIn(name)}
						textTransform='uppercase'
						w='100%'
					>
						Sign in with {name}
					</button>
				))}
			</div>
		</div>
	)
}

export default Signin