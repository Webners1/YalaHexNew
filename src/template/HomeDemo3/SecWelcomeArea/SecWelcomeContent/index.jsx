function SecWelcomeContent({img}){
  return(
      <div className="welcome-content">
          <div className="promo-section">
              {/* <div className="integration-link">
                  <span className="integration-icon">
                      <img src={img} width="24" height="24" alt="" />
                  </span>
                  <span className="integration-text">Discover a new ways to enjoy your World!</span>
              </div> */}
          </div>
          <h1>YLXmum Yield, Instant Liquidity</h1>
          <p>
          Yalahex is a smart contract for trustless pooling of a max length HEX stake.
          </p>
          <div className="dream-btn-group">
              <span className="btn dream-btn mr-3">Buy HEXY</span>
              {/* <span className="btn dream-btn">Contact Us</span> */}
          </div>
      </div>
  )
}

export default SecWelcomeContent