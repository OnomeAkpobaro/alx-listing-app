import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { UI_TEXT } from '../constants';

const Home: NextPage = () => {
  // Sample data for demonstration
  const sampleProperties = [
    {
      id: '1',
      title: 'Cozy Beach House',
      description: 'Beautiful beachfront property with stunning ocean views',
      price: 150,
      image: '/assets/listing-images/List 1.png'
    },
    {
      id: '2',
      title: 'Modern City Apartment',
      description: 'Stylish apartment in the heart of downtown',
      price: 120,
      image: '/assets/listing-images/List 4.png'
    },
    {
      id: '3',
      title: 'Mountain Retreat',
      description: 'Peaceful cabin surrounded by nature',
      price: 200,
      image: '/assets/listing-images/List 10.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{UI_TEXT.APP_NAME}</title>
        <meta name="description" content="Find amazing places to stay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {UI_TEXT.HERO_TITLE}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {UI_TEXT.HERO_SUBTITLE}
        </p>

        <div className="mb-8 flex gap-4">
          <Button variant="primary" onClick={() => console.log('Primary clicked')}>
            Explore Properties
          </Button>
          <Button variant="outline" onClick={() => console.log('Outline clicked')}>
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProperties.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              description={property.description}
              price={property.price}
              image={property.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;