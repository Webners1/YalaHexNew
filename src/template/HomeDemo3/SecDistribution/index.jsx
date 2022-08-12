import SectionHeading from '../../../components/SectionHeading'
import TokenInfo from './TokenInfo'

const SecDistribution = ({img , data}) => {

  return (
    <section className="token-distribution">
        <div className="container">
            
            <SectionHeading
                title='Our Token Distribution'
                text='YLX has two values. The Treasury Value and the Market Value.

                Treasury Value (or Redemption Value) is based on the estimated amount of HEX and Hedron redeemable per YLX when the max length stake ends.
                
                Market Value is the price of YLX on decentralized exchanges at any point in time.
                
                The Market Value, set on exchanges, may vary widely from the treasury value, cycling between trading at a discount and premium to the underlying Yalahex stake. Below is a chart showing what the relationship between those values could look like over the period of the max length stake.'
            />

            <div className="col-lg-6 col-md-6 col-sm-12">
                <h2 className="text-center mb-30">Token Allocation</h2>
                <div className="token-allocation">
                    <img src={img} className="center-block" alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="token-info-wapper"></div>
                <h2 className="text-center mb-30">More Token Info</h2>
                {data && data.map((item , key) => (
                    <TokenInfo
                        key={key}
                        text={item.text}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
        
    </section>
  );
}

export default SecDistribution;