import {GraphQLClient} from "graphql-request";

const graphcmsEndpoint = "https://api-ap-south-1.hygraph.com/v2/clm817zqa0c7901t95l392j4s/master";

export const graphcmsClient = new GraphQLClient(graphcmsEndpoint)