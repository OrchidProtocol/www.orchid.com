import React from 'react'
import './where-oxt.scss'

const Component = () => (
	<div className="where-oxt">
		<p i18n="@@ReportExchangesOXT">
			When we learn of new listings, they will be publicly announced. If you see OXT being traded on an exchange that isn’t listed here, please use the <a href="/contact">contact</a> form to let us know, so that it can be added to our list.
		</p>
		<h3 className="gap-top-thin" i18n="@@ExchangeListings">Exchange Listings</h3>
		<a href="https://www.coinbase.com/price/orchid">
			<img className="margin" src="/img/where-oxt/coinbase.png" srcset="/img/where-oxt/coinbase.png, /img/where-oxt/coinbase@2x.png 2x, /img/where-oxt/coinbase@3x.png 3x" alt="Coinbase" />
		</a>
		<a href="https://gemini.com/prices/orchid">
			<img className="margin" src="/img/where-oxt/gemini.png" alt="Gemini" />
		</a>
		<a href="https://www.okex.com/en/spot/trade/oxt_usdt">
			<img className="margin" src="/img/where-oxt/okex.png" alt="OKEx" style={{ width: "150px" }} />
		</a>
		<a href="https://global.bittrex.com/Market/Index?MarketName=BTC-OXT">
			<img className="margin" src="/img/where-oxt/bitrex.png" alt="Bittrex" />
		</a>
		<a href="https://www.kraken.com/">
			<img className="margin" src="/img/where-oxt/kraken.svg" alt="Kraken" />
		</a>
		<a href="https://www.bitcoin.com/">
			<img className="margin" src="/img/where-oxt/bitcoin-com.png" alt="Bitcoin.com" />
		</a>
		<a href="https://www.binance.com/?ref=NE62QDGW">
			<img className="margin" src="/img/where-oxt/binance.svg" alt="Binance" />
		</a>
		<br />
		<br />
		<a href="/oxt">View the full list</a>
		<h3 className="gap-top-wide" i18n="@@OXTContract">OXT Contract on Ethereum</h3>
		<a href="https://etherscan.io/token/0x4575f41308ec1483f3d399aa9a2826d74da13deb">
			<img src="/img/where-oxt/etherscan.png" srcset="/img/where-oxt/etherscan.png, /img/where-oxt/etherscan@2x.png 2x, /img/where-oxt/etherscan@3x.png 3x" alt="Etherscan" />
		</a>
	</div>
)

export default Component
