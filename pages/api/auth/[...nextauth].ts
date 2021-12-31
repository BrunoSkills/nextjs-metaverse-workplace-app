import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


type Profile = {
    id: string
    login: string
    email: string
    avatar_url: string
}

type User = {
    id: string
    name: string
    email: string
    image: string
}

export default NextAuth({
    // https://next-auth.js.org/configuration/providers

    //https://next-auth.js.org/getting-started/example
    
    providers: [
        // https://github.com/nextauthjs/next-auth/blob/main/src/providers/github.js
        Providers.GitHub({
            // clientId: process.env.GITHUB_CLIENT_ID,
            clientId: '7d1dc6725064bd0b70bb',
            // clientSecret: process.env.GITHUB_CLIENT_SECRET,
            clientSecret: '7b4c39ef72c601e6fa8014f868d2fb8be50048c6',
         
            profile(profile: Profile): User {
                // You can use the tokens, in case you want to fetch more profile information
                // For example several OAuth providers do not return email by default.
                // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
                return {
                    id: profile.id,
                    name: profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                }
            },
        }),
    ],
    theme: 'light',
})
