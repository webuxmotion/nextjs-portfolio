import Head from 'next/head'
import Navbar from '../../components/navbar/navbar'

export default function Portfolios() {
  return (
    <div>
      <Head>
        <title>Portfolios</title>
        <meta name="description" content="Modure Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio-app">
        <Navbar />
    <div className="container">
      {/* HOME PAGE STARTS */}
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card subtle-shadow no-border">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text fs-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer no-border">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card subtle-shadow no-border">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer no-border">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card subtle-shadow no-border">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div className="card-footer no-border">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
      
    {/* FOOTER STARTS */}
    

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
