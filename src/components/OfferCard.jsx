import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext';

const OfferCard = () => {
  const { offers } = useContext(DashboardContext);

  return (
    <>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
        <div>
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-3"
            >
              <p className="font-bold">{offer.title}</p>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OfferCard;
