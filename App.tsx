
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useState } from 'react'

function App() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()
  const [rewarded, setRewarded] = useState(false)

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>🎮 Mario Mini App</h1>
      {isConnected ? (
        <>
          <p>Connected as: {address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
          <br /><br />
          <button
            onClick={() => setRewarded(true)}
            disabled={rewarded}
            style={{ fontSize: 18, padding: '10px 20px' }}
          >
            {rewarded ? '✅ Token Reward Sent!' : '🎁 Claim Reward'}
          </button>
        </>
      ) : (
        <button onClick={() => connect()} style={{ fontSize: 18, padding: '10px 20px' }}>
          🔌 Connect Wallet
        </button>
      )}
    </div>
  )
}

export default App
