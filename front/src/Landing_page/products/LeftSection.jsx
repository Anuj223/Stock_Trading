export default function LeftSection({
        imgUrl,
        productName,
        productDescription,
        tryDemo,
        LearnMore,
        googlePlay,
        appStore,
      }) {
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-6 p-2 mr-4">
                <img src={imgUrl} />
              </div>
      
              <div className="col-6 mt-5 p-4 ">
                <div className="container ml-6 pl-4">
                  <h1>{productName}</h1>
                  <p>{productDescription}</p>
                  
                  <div className="mb-3">
                    {tryDemo ? <a href={tryDemo}>{tryDemo}→</a> : null}
                    {LearnMore ? <a href={LearnMore}>{LearnMore}→</a> : null}
                  </div>
                  <div>
                    <a href={googlePlay}>
                      <img src="images/googlePlayBadge.svg" />
                    </a>
                    <a href={appStore}>
                      <img src="/images/appstoreBadge.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      