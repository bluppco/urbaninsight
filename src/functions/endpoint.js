export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.urbaninsight.blupp.co" : "https://api.urbaninsight.blupp.co"

}
