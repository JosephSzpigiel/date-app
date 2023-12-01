import React, { useState } from 'react';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function Welcome() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion fluid styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        How It Works:
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <Segment> 
            1. Plan a Date with Ease: 
            Ready for a date that reflects your unique style? Simply use our intuitive DatePlanForm to set the mood, define your budget, and choose from a selection of carefully curated activities. Craft the perfect date, effortlessly.
        </Segment>
        <Segment>
            2. Discover Local Gems:
            Explore local activities that match your mood and budget using our ActivitySearch feature. Filter by mood, search for the best local spots, and seamlessly add them to your date plan. It's your city, your mood, your date.
        </Segment>
        <Segment>
            3. Review and Edit:
            Your date plan is your canvas. With Create a Date itinerary section, take a moment to review and fine-tune your selections before finalizing. Want to add or adjust an activity? No problem. It's all about ensuring every detail aligns with your preferences.
        </Segment>
        <Segment>
            4. See All Your Planned Dates:
            Easily keep track of all your finalized dates with our All Dates page. Whether you want to reminisce about past adventures or fantasize of the future dates to come, it's all at your fingertips.  
        </Segment>         
      </Accordion.Content>
    </Accordion>
  );
}

export default Welcome;
