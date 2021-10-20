import React from 'react'
import './where-oxt.scss'

const Component = () => (
	<div className="where-oxt">
		<p i18n="@@ReportExchangesOXT">
			When the Orchid community learns of new listings, they are publicly announced. <br /><br />
			If you see OXT being traded on an exchange that isn’t listed here, please use the <a href="/contact">contact form</a> so that it can be added to the list.
		</p>
		<div className="oxt-row">
			<div className="oxt-column">
				<h3 className="gap-top-thin" i18n="@@ExchangeListings">Exchange Listings</h3>
				<div className="listing-container">
					<div className="listing-col">
						<a href="https://en.bithumb.com/trade/status/OXT_BTC">
							<img src="/img/where-oxt/bithumb.png" alt="Bithumb" />
						</a>
						<a href="https://www.coinbase.com/price/orchid">
							<img src="/img/where-oxt/coinbase.png" srcSet="/img/where-oxt/coinbase.png, /img/where-oxt/coinbase@2x.png 2x, /img/where-oxt/coinbase@3x.png 3x" alt="Coinbase" />
						</a>
						<a href="https://pro.coinbase.com/trade/OXT-USD">
							<img src="/img/where-oxt/coinbase-pro.png" alt="Coinbase | Pro" />
						</a>
						<a href="https://gemini.com/prices/orchid">
							<img src="/img/where-oxt/gemini.png" alt="Gemini" />
						</a>
						<a href="https://www.gate.io/en/trade/OXT_ETH">
							<img src="/img/where-oxt/gateio.png" alt="Gate.io" />
						</a>
						<a href="https://indodax.com/market/OXTIDR">
							<img src="/img/where-oxt/indodax.png" alt="INDODAX" />
						</a>
						<a href="https://coindcx.com/trade/OXTBTC">
							<img src="/img/where-oxt/coindcx.png" alt="CoinDCX" />
						</a>
						<a href="https://uphold.com/en/crypto/buy-oxt">
							<img src="/img/where-oxt/uphold.png" alt="uphold" />
						</a>
						<a href="https://www.bkex.com/trade/OXT_USDT">
							<img src="/img/where-oxt/bkex.png" alt="BKEX" />
						</a>
					</div>
					<div className="listing-col">
						<a href="https://www.kraken.com/">
							<img src="/img/where-oxt/kraken.svg" alt="Kraken" />
						</a>
						<a href="https://global.bittrex.com/Market/Index?MarketName=BTC-OXT">
							<img src="/img/where-oxt/bitrex.png" alt="Bittrex" />
						</a>
						<a href="https://www.binance.us/en/trade/OXT_USD">
							<img src="/img/where-oxt/binanceus.png" alt="Binance.us" />
						</a>
						<a href="https://www.binance.com/?ref=NE62QDGW">
							<img src="/img/where-oxt/binance.svg" alt="Binance" />
						</a>
						<a href="https://coinlist.co/asset/orchid">
							<img src="/img/where-oxt/coinlist.png" alt="COINLIST" />
						</a>
						<a href="https://www.okex.com/en/spot/trade/oxt_usdt">
							<img src="/img/where-oxt/okex.png" alt="OKEx" />
						</a>
						<a href="https://www.huobi.com/en-us/exchange/oxt_usdt">
							<img src="/img/where-oxt/huobi.png" alt="Huobi" />
						</a>
						<a href="https://www.abra.com/">
							<img src="/img/where-oxt/abra.png" alt="Abra" />
						</a>
						<a href="https://upbit.com/">
							<img src="/img/where-oxt/upbit.png" alt="UPbit" style={{ width: "110px" }} />
						</a>
						<a href="https://www.investvoyager.com/blog/how-to-buy-orchid/">
							<img src="/img/where-oxt/voyager.png" alt="VOYAGER" />
						</a>
					</div>
				</div>
			</div>


			<div className="oxt-column slim">
				<h3 className="gap-top-thin" i18n="@@DecentralizedListings">Decentralized Listings</h3>
				<div className="listing-container">
					<div className="listing-col">
						<a href="https://info.uniswap.org/pair/0x9b533f1ceaa5ceb7e5b8994ef16499e47a66312d">
							<img src="/img/where-oxt/uniswap.png" alt="UNISWAP" />
						</a>
						<a href="https://exchange.idex.io/eth/trading/OXT-ETH">
							<img src="/img/where-oxt/idex.png" alt="IDEX" />
						</a>
						<a href="https://1inch.io/">
							<img src="/img/where-oxt/1inch.png" alt="1inch" />
						</a>
						<a href="https://www.bitcoin.com/">
							<img src="/img/where-oxt/bitcoin-com.png" alt="Bitcoin.com" />
						</a>
					</div>
				</div>
			</div>


			<div className="oxt-column">
				<h3 className="gap-top-thin" i18n="@@WalletCustodyPartners">Wallet &amp; Custody Partners</h3>
				<div className="listing-container">
					<div className="listing-col">
						<a href="https://token.im/">
							<img src="/img/where-oxt/imtoken.png" alt="imToken" />
						</a>
						<a href="https://blog.orchid.com/orchid-partners-with-trustwallet/">
							<img alt="TrustWallet" src="/img/partners/trustwallet.png" />
						</a>
						<a href="https://metamask.io/">
							<img alt="Metamask" src="/img/partners/metamask.png" />
						</a>
						<a href="https://gemini.com/prices/orchid">
							<img src="/img/where-oxt/gemini.png" alt="Gemini" />
						</a>
						<a href="https://edge.app/">
							<img src="/img/where-oxt/edge.png" alt="edge" />
						</a>
						<a href="https://wallet.coinbase.com/">
							<img src="/img/where-oxt/cbwallet.png" alt="Coinbase | Wallet" />
						</a>
						<a href="https://blog.orchid.com/oxt-available-on-bitgo/">
							<img alt="BitGo" src="/img/partners/bitgo.png" />
						</a>
					</div>
					<div className="listing-col">
						<a href="https://blog.orchid.com/brd-integrates-oxt/">
							<img alt="BRD" src="/img/partners/brd.png" />
						</a>
						<a href="https://www.ledger.com/">
							<img src="/img/where-oxt/ledger.png" alt="Ledger" />
						</a>
						<a href="https://shapeshift.com/keepkey">
							<img src="/img/where-oxt/keepkey.png" alt="keepkey" />
						</a>
						<a href="https://jaxx.io/">
							<img src="/img/where-oxt/jaxx.png" alt="jaxx" style={{ width: "75px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Component
