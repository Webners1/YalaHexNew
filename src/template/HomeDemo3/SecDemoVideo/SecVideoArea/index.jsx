const SecVideoArea = ({img}) => {

  return (
    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12" data-aos="fade-up">
        <div className="welcome-video-area">
            <div className="welcome-thumb">
                <img src={img} alt="" />
            </div>
            
        </div>
    </div>
  );
}

export default SecVideoArea;