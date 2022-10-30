type GameLifeGauge = {
  lifeMax: number;
  lifeCurr: number;
};

export const GameLifeGauge = ({ lifeMax, lifeCurr }: GameLifeGauge) => {
  const lifeGaaugePercentage = (lifeCurr / lifeMax) * 100;
  const lifeGaugeColor = lifeGaaugePercentage > 30 ? '#54D57C' : lifeGaaugePercentage > 10 ? '#f4dc47' : '#D24938';

  return (
    <div className='relative rounded-bl rounded-tr rounded-tl-3xl bg-army-green p-2'>
      <div className='rounded-tl-3xl border-4 border-dark-green bg-light-beige p-4'>
        <h1 className='flex justify-between'>
          <span className='text-shadow-game font-game text-game-md leading-game-md'>Dev. Keisuke</span>
          <span className='text-shadow-game font-game text-game-md leading-game-md'>Lv: 5</span>
        </h1>
        <div className='mt-2 ml-auto w-3/4 rounded-md bg-turkey p-1'>
          <div style={{ width: `${lifeGaaugePercentage}%`, backgroundColor: lifeGaugeColor }} className='ml-auto h-2 duration-300'></div>
        </div>
      </div>
      <div className='absolute top-[99%] -right-2 h-3 w-3/4 rounded-tr-3xl rounded-bl-3xl bg-army-green'></div>
    </div>
  );
};
