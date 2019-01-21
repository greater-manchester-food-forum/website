import React from 'react';
import Mission from './Mission';
import collab from '../../images/collaboration.jpg';
import foodAccess from '../../images/food-access.jpg';
import healthyFood from '../../images/healthy-food.jpg';
import localBusiness from '../../images/local-business.jpg';

function OurMission() {
  return (
    <React.Fragment>
      <div className="py-20 container mx-auto" id="mission-statement">
        <h2 className="text-5xl font-bold tracking-tight leading-tight text-safe-green-darker text-center mb-12">
          Our Mission
        </h2>
        <div className="mission-grid px-6 md:px-0">
          <Mission
            title="Collaboration"
            image={collab}
            desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
          <Mission
            title="Food Access"
            image={foodAccess}
            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
          />
          <Mission
            title="Local Business"
            image={localBusiness}
            desc="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas."
          />
          <Mission
            title="Health"
            image={healthyFood}
            desc="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          />
        </div>
        <button
          className="btn btn-green mt-3 mx-auto text-center"
          type="button"
        >
          Read our full mission statement
        </button>
      </div>
    </React.Fragment>
  );
}

export default OurMission;
