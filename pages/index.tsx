import type { NextPage } from 'next'
import Head from 'next/head'
import KycForm from './components/kyc-form'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <KycForm/>
      </main>
    </div>
  )
}

export default Home