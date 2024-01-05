import HeroImage from '../../assets/images/hero.png';

export const Home = () => {
  return (
    <div>
      <div className='relative flex items-center'>
        <img src={HeroImage} />
        <div className='absolute w-full'>
          <div className='container mx-auto'>
            <div className='max-w-48'>
              <h1 className='text-6xl font-bold'>Scandinavian Supremacy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
