import Auth from "@aws-amplify/auth"
import DynamoDB from "aws-sdk/clients/dynamodb"

const getDocumentClient = () =>
    Auth.currentCredentials().then(
        credentials =>
            new DynamoDB.DocumentClient({
                region: process.env.REACT_APP_REGION,
                credentials: Auth.essentialCredentials(credentials),
            })
    )

export const putItemToDynamo = async Item => {
    const params = {
        TableName: process.env.REACT_APP_USER_TABLE,
        Item,
    }

    const client = await getDocumentClient()
    return await client.put(params).promise()
}

export const getItemFromDynamo = async Key => {
    const params = {
        TableName: process.env.REACT_APP_USER_TABLE,
        Key,
    }

    const client = await getDocumentClient()
    return await client.get(params).promise()
}
