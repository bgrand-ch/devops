type Data = {
  test: boolean
}

// TODO: Get data from back-end api
export default function Home() {
  const data: Data = {
    test: true
  }

  return (
    <div>
      <h1>Front app</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}
