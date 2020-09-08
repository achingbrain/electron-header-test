
async function main () {
  document.write(`<pre>Requesting headers</pre>`)

  const res = await fetch('https://postman-echo.com/headers')
  const body = await res.json()

  document.write(`<pre>${JSON.stringify(body, null, 2)}</pre>`)
}

main()
