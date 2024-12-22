export default function RightSection({
  imgUrl,
  productName,
  productDescription,
  LearnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6" style={{paddingTop:"100px"}}>

          <h1>{productName}</h1>
          <p className="">{productDescription}</p>
          {LearnMore ? <a href={LearnMore}>{LearnMore}→</a> : null}
        
        </div>
        <div className="col-6">
          <img src={imgUrl} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
