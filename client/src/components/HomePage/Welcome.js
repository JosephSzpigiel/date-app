import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

function Welcome() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        How It Works:
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <p>
            1. Plan a Date with Ease: 
            Ready for a date that reflects your unique style? Simply use our intuitive DatePlanForm to set the mood, define your budget, and choose from a selection of carefully curated activities. Craft the perfect date, effortlessly.
        </p>
        <p>
            2. Discover Local Gems:
            Explore local activities that match your mood and budget using our ActivitySearch feature. Filter by mood, search for the best local spots, and seamlessly add them to your date plan. It's your city, your mood, your date.
        </p>
        <p>
            3. Review and Edit:
            Your date plan is your canvas. With Create a Date itinerary section, take a moment to review and fine-tune your selections before finalizing. Want to add or adjust an activity? No problem. It's all about ensuring every detail aligns with your preferences.
        </p>
        <p>
            4. See All Your Planned Dates:
            Easily keep track of all your finalized dates with our All Dates page. Whether you want to reminisce about past adventures or fantasize of the future dates to come, it's all at your fingertips.  
        </p>         
      </Accordion.Content>

      {/* <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        What kinds of dogs are there?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <p>
          There are many breeds of dogs. Each breed varies in size and
          temperament. Owners often select a breed of dog that they find to be
          compatible with their own lifestyle and desires from a companion.
        </p>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        How do you acquire a dog?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <p>
          Three common ways for a prospective owner to acquire a dog is from
          pet shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog
          from a private owner allows you to assess the pedigree and
          upbringing of your dog before choosing to take it home. Lastly,
          finding your dog from a shelter helps give a good home to a dog who
          may not find one so readily.
        </p>
      </Accordion.Content> */}
    </Accordion>
  );
}

export default Welcome;
