type Data = {
  status: 'success'|'error',
  isTest: boolean
}

async function getApiData (apiUrl: string): Promise<Data> {
  try {
    const result = await fetch(apiUrl, { cache: 'no-store' })
    const data: Data = await result.json()

    return data
  } catch {
    const data: Data = {
      status: 'error',
      isTest: true
    }

    return data
  }
}

export default async function Home() {
  const data = await getApiData('http://api')

  return (
    <div>
      <h1>Front app</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}
