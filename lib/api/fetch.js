// Initialize authToken file
var authToken = process.env.AUTH_TOKEN

const signIn = async () => {
    try{
        // Get auth token
        const auth_res = await fetch(
            process.env.API_URL + '/auth/signin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: process.env.AUTH_EMAIL,
                    password: process.env.AUTH_PASSWORD
                })
            },
            
        )
        return await auth_res.json()

    } catch (err) {
        throw err
    }
}

export default async function call(url, method='GET', params={headers: {}}){
    try{
        if (authToken === null){
            // // Fetch token from file
            // authToken = await fetch('')
            // authToken = await authToken.text()
            // console.log(authToken)

            if (authToken === null || authToken === ''){
                authToken = await signIn()
                authToken = authToken['token']
                console.log(authToken)
            }
        }
        // Get response from the API call
        const res = await fetch(process.env.API_URL + url, {
            method: method,
            ...params,
            headers: {
                ...params.headers,
                'auth-token': authToken,
                'content-type': 'application/json'
            }
        })
        // Convert data from response body to JSON and return
        return await res.json()
    }
    catch (err){
        throw err
    }
}
