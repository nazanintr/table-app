/* Reviewer Note: 
    The useMockData setting determines whether the table data should be fetched from
    an API or from mock data.
    Setting it to 'true' will use mock data for testing or development purposes, 
    while 'false' will fetch data from the API.
*/
export const useMockData: boolean = false;
/* Reviewer Note:
   BASE_URL is the base URL used for fetching table data from an API. 
   It's better to keep sensitive information like URLs in 
   environment variables for security reasons.
*/
export const BASE_URL: string = "http://localhost:5000";