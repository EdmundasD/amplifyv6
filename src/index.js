import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json' assert { type: 'json' };
import { listTodos } from './graphql/queries.js';
import { generateClient } from 'aws-amplify/api';
Amplify.configure(amplifyconfig);
const client = generateClient();

(async () => {
    try {
        const response = await client.graphql({
            query: listTodos
        });
        console.log(response);
    } catch (e) {
        console.error(e);
    }
})();
