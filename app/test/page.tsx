import { GamePlayOptions } from '../../components/triggers/GamePlayOptions';
import { GameLifeGauge } from '../../components/uis/GameLifeGauge';
import { GameMessageBox } from '../../components/uis/GameMessageBox';

const Test = () => {
  return (
    <>
      <GameLifeGauge lifeCurr={10} lifeMax={100} />
    </>
  );
};

export default Test;
