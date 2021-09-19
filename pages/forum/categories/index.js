import Head from 'next/head'
import Navbar from '../../../components/navbar/navbar'

export default function Categories() {
  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Modure Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio-app">
        <Navbar />
    <div className="container">
      
    <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Categories</h1>
          </div>
        </div>
      </section>
      <section className="fj-category-list">
        <div className="row">
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    General Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    Other Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fj-category-container">
              <a className="fj-category subtle-shadow no-border" href="#">
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    Some Discussion
                  </div>
                  <div className="description">
                    Just general question
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    

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
