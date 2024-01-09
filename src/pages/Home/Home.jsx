import HeroImage from '../../assets/images/hero.png';
import Women from '@/assets/images/categories/women.png';
import Men from '@/assets/images/categories/men.png';
import PregWomen from '@/assets/images/categories/preg-women.png';
import Children from '@/assets/images/categories/children.png';

export const Home = () => {
  const categories = [
    {
      category: 'Wemen',
      img: Women,
    },
    {
      category: 'Men',
      img: Men,
    },
    {
      category: 'Pregnant women',
      img: PregWomen,
    },
    {
      category: 'Children',
      img: Children,
    },
  ];

  return (
    <div>
      <section className='relative flex items-center'>
        <img src={HeroImage} />
        <div className='absolute w-full'>
          <div className='container mx-auto'>
            <div className='max-w-48'>
              <h1 className='text-6xl font-bold'>Scandinavian Supremacy</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto py-36'>Categories</div>
      </section>
    </div>
  );
};
