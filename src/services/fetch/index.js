export async function getData() {
  const url = `http://api.what-to-eat-this-week.com:3000/`
  const res = await fetch(url)
  return res.json()
}
