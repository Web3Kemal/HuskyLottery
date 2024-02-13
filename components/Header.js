import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import WalletConnectBtn from './WalletConnectBtn'

const Header = () => {
  const { address, connectWallet } = useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={`${style.title} ${style.titleContainer}`}>Husky Lottery</div>
      {!address ? (
        <div className={style.connectBtnWrapper}>
          <WalletConnectBtn connectWallet={connectWallet} />
        </div>
      ) : (
        <UserCard address={address} />
      )}
    </div>
  )
}

export default Header

