// A mock function to mimic making an async request for data
export async function fetchRoutes() {
const response = await fetch("https://gist.githubusercontent.com/narzero/849b3190d9cb47503f36c35aee5e7c72/raw/e6c13ccd56cb1cad854ce5fa556229b3e906eb5f/route.json")
return await response.json()
}
