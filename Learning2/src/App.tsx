import Accordion from "./Components/Accordion";
import Heading from "./Components/Heading";

const App = () => {
  const accordionData = [
    {
      title: "What is Hardelz Organization",
      content: `Hardelz organization is a group that sponsor Adults or young student that want to learn or wish to learn will be gladly supported and help till he/she finishes his/her grades `,
    },
    {
      title: "What you need to qualify",
      content: `for you to participate with us or join our organization you must have some qualities and that is you must either be a first class student or second class upper with good attitude, obedience and ready to be corrected and a God fearing someone. `,
    },
    {
      title: "How we operate the group",
      content: `It's a group of rich people that decided to change the faith of small children that need help or that are intelligent.`,
    },
  ];

  return (
    <div>
      <Heading></Heading>
      <h1 className="items-center text-4xl place-content-center flex p-2">FAQs</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
