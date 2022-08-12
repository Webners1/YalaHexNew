import SectionHeading from '../../../components/SectionHeading'

const SecHowItWorks = ({data , imgPhone}) => {

  return (
      <section className="features section-padding-100-0">
        <SectionHeading
            title='How it works'
            text='100% of the 294,316,334.767 YLX token supply was generated during a one time 14 day Minting Phase in April 2022 where minters minted 1 YLX per HEX pledged to the Yalahex Contract. Once the Minting Phase ended, the smart contract executed a single 5555 day stake with all the HEX used to mint YLX. Once the stake ends, users may redeem their portion of the HEX stake principal + yield and Hedron earned.'
        />
        <div className="container">
          <div className="row">
            <div className="service-img-wrapper how col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <img src={imgPhone} className="center-block img-responsive phone-img" alt="" />
              </div>
            </div>
            <div className="services-column col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
              {/*Services Block Four*/}
              {data && data.map((item , key) => (
                <div className="services-block-four how" key={key}>
                  <div className="inner-box">
                    <div className="step">{item.step}</div>
                    <h3><a href="#">{item.title}</a></h3>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default SecHowItWorks;