import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'
const PotCard = () => {
  const { lotteryId, lastWinner, lotteryPot, enterLottery, pickWinner } =
    useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Lottery{' '}
        <span className={style.textAccent}>#{lotteryId ? lotteryId : '1'}</span>
      </div>
      <div className={style.pot}>
        Lottery Pot 🍯: <span className={style.goldAccent}>{lotteryPot} BNB</span>
      </div>
      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      {!lastWinner.length ? (
        <div className={`${style.winner} ${style.headingline}`}>No winner yet</div>
      ) : (
        lastWinner.length > 0 && (
          <div className={style.winner}>
            {truncateEthAddress(lastWinner[lastWinner.length - 1])}
          </div>
        )
      )}
      <div className={`${style.btn} ${style.btnhover} ${style.gradientbtn}`} onClick={enterLottery}>
        Enter With XXXXX HUSKY
      </div>
    </div>
  )
}
export default PotCard
