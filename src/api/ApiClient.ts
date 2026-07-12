export class ApiClient {

    public static async get<T>(url: string): Promise<T> {

        try {
            
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            
            const json = await response.json();
            
            return json;

        } catch (error) {
            console.error(error.message);
        }

    }

}