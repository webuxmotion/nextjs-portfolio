import Head from 'next/head'
import Navbar from '../components/navbar/navbar'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Modure Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio-app">
        <Navbar />
    <div className="container">
      {/* LOGIN PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Login Page</h1>
          </div>
        </div>
      </section>
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password" />
              </div>
              <button
                type="submit"
                className="btn btn-main bg-blue py-2 ttu">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* LOGIN PAGE ENDS */}
    

    </div>
    </div>
    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
    </div>

    
  )
}
