import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "946081884001-jsoqgvv8ifve1ojf3gt4l7u6nfabceaf.apps.googleusercontent.com",
            clientSecret:"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"
        })
    ],
})

export { handler as GET , handler as POST}