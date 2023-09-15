import { gql , GraphQLClient} from "graphql-request";
const GRAHPQL_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTQ1OTc4NTEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsbTgxN3pxYTBjNzkwMXQ5NWwzOTJqNHMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImIyMjFmZDI2LWU0MmEtNGZiYS1hMzBhLTQ1ZWQyMzdhYjllYSIsImp0aSI6ImNsbWhqdDJ3YzA3aHAwMXVrNXByOGY0N2IifQ.0Vq5MktJm18H2YPIKTskOmhSU3MH4XokEwki7LF0m0GGC3kH00WXUdDBU2YlVEvPBG4Dl1aEO3ygdfjHU1ofDc5DMoDT0BKloEQazG0ZQO7qZruDIb6uf9-yuQiSz65YyjCrhJeo0cxY5cpJ3h27rL83y3UnXAuDGLkVUiFGJWtZLVzI3tnJlmAnqHO4LL_EGkGTBhKbe22RrtgJVY2g4Gu8ofh8n6OwzbZONR_V7DyG4PT4siPoLu0R__aFIR1Pxer4Eb-W-38QyX__MB9taxdJAwWKXZteVx9REz-VUDbUr83RfeKyS4y-E7uRVzkA5b4UxKDNtv0Fb_hUKZb-k2-neOYgVabZt5JtS2a57AJvRN-3yOg0-kfUd_dyFRa1fG5X5jopudnnEpbe5rWKv1sObqttTFjpiXFPt32_oy5oJVq1coxolCsAKL5tonmHhJWoknmj-gXNCGZyktj4ksSwgkF22DEfCqRQIN_LtP2p_8zWjnnlLJAaPV7_qttAzE1z2Lj23lqef65wuI1TDl-aZ7OsLpQ9ORkAfqPZjOB9N-7g7ZfptE4JJhFCVNNHYM1GKaDEuj-qQdqoNed2n3eThGmfcTcYSV3dDF5eLE3YF9QxNky4SSkcHbeNiV8hNuUUesuV_SUzkayQm5UYHvIthyJzt9qW2GUnfuyMZFs"
const GRAHPQL_URL = "https://api-ap-south-1.hygraph.com/v2/clm817zqa0c7901t95l392j4s/master"
export default async function comments(request, response){
   const graphQlClient = new GraphQLClient(GRAHPQL_URL, {
    headers: {
      "Authorization": `Bearer ${GRAHPQL_TOKEN}`,
      "Content-Type": "application/json",
    },
   })
   const query = gql`
     mutation CreateComment($name:String, $email:String , $comment:String ,$slug:String)
     {
        createComment(data:{name : $name , email : $email , comment : $comment post: {connect:{slug : $slug}}}){id}
     }`;
     const result = await graphQlClient.request(query, {
        name: request.body.name,
        email: request.body.email,
        comment: request.body.comment,
        slug: request.body.slug
     })
     response.status(200).send(result)
}
       