import React from 'react';
import Mission from './Mission';
import collab from '../../images/collaboration.jpg';
import foodAccess from '../../images/food-access.jpg';
import healthyFood from '../../images/healthy-food.jpg';
import localBusiness from '../../images/local-business.jpg';

function MissionSummary() {
  return (
    <React.Fragment>
      <div className="container mx-auto" id="mission-statement">
        <div className="mission-grid px-6 md:px-0">
          <Mission
            title="Collaboration"
            image={collab}
            desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          />
          <Mission
            title="Food Access"
            image={foodAccess}
            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
          />
          <Mission
            title="Local Business"
            image={localBusiness}
            desc="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod."
          />
          <Mission
            title="Health"
            image={healthyFood}
            desc="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MissionSummary;
