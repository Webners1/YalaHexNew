const ServiceBlock = ({classIco , title}) => {

  return (
    <div className="services-block-four">
        <div className="inner-box">
            <div className="icon-box">
                <span className={classIco}></span>
            </div>
            <h3><a href="#">{title}</a></h3>
            <div className="text">Yalahex give you optionality.

If you want or need to sell all or a portion of your position in the Yalahex stake, you can sell YLX on decentralized exchanges at any time.

If you want to grow your position in the Yalahex stake, you can buy more YLX at any time.

Whoever holds YLX when the stake ends can redeem its portion of HEX and Hedron from the Yalahex Treasury.

</div>
        </div>
    </div>
  );
}

export default ServiceBlock;