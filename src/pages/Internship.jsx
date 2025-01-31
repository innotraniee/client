import { Link } from "react-router";
import Card from "../components/Card";
import { Button } from "@/components/ui/button";

const Internship = () => {
  const cards = [
    {
      id: 100,
      image:
        "https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1592.jpg?t=st=1735988923~exp=1735992523~hmac=66df465225192cf8b4c22015af43608cd6282072d278773f51e90a8670936e11&w=740",
      title: "Web Development",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 101,
      image:
        "https://img.freepik.com/free-vector/mobile-apps-concept-landing-page_23-2148298810.jpg?t=st=1735989031~exp=1735992631~hmac=e567a79e39357f6d5859da53a15a10ad72256a54891896a2dba47bfa0ecad4a2&w=360",
      title: "Android Development",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 102,
      image:
        "https://torobche.com/wp-content/uploads/2022/10/Java.Programming.Vector.943.EPS_.jpg",
      title: "Java programming",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 103,
      image:
        "https://static.vecteezy.com/system/resources/previews/048/078/157/large_2x/development-and-programming-concept-in-modern-flat-design-for-web-woman-developer-working-at-laptop-and-coding-on-screens-fixing-bugs-making-maintenance-and-optimization-illustration-vector.jpg",
      title: "C/C++ Programming",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 104,
      image:
        "https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18132.jpg?t=st=1735989155~exp=1735992755~hmac=b9a5444569b21a36cd2e32521c935a7a9af9d4812b97afd5bd6b82aff9e138b9&w=740",
      title: "Data Science",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 105,
      image:
        "https://static.vecteezy.com/system/resources/previews/024/638/148/large_2x/the-difference-between-ux-and-ui-design-vector.jpg",
      title: "UI/UX Design",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 106,
      image:
        "https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration-programming-build-tool-software-development-framework-cross-platform-structure-application-ui-coding-process_335657-344.jpg",
      title: "Python Programming",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 107,
      image:
        "https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg",
      title: "Artificial intelligence",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
    {
      id: 108,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg",
      title: "Machine learning",
      formLink: "https://forms.gle/ypHcp5JRXAyfXkUk8",
    },
  ];
  return (
    <>
      <div className="flex flex-col px-10 md:px-40 my-10 gap-5 justify-center items-center">
        <h1 className="text-5xl font-semibold self-center">Our Internships</h1>
        <p className=" self-center text-center max-w-md mb-5">
          We are passionate about technology and believe in the power of
          software to transform the world. Our internship program is just one of
          the ways in which we are investing in the future of the industry.
        </p>
        <div className="flex gap-5">
          <Link to="/submit-project">
            <Button>Submit Project</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects link</Button>
          </Link>
        </div>
        <h2 className="text-3xl font-semibold self-center">
          Internship We Offer!
        </h2>
        <div className="flex md:flex-row gap-5 items-center justify-center flex-wrap ">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-col px-10 md:px-40 my-10 gap-5 items-center justify-center">
        <h1 className="text-4xl font-bold">Why Choose Us?</h1>
        <p className="">
          We bring you the best programs designed to help you succeed in your
          career.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-3 shadow-xl rounded-xl p-5">
            <div className="text-5xl">🌟</div>
            <h2 className="text-2xl font-bold">Expert Mentors</h2>
            <p className="text-center">
              Learn from industry professionals with years of experience in
              their fields.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 shadow-xl rounded-xl p-5">
            <div className="text-5xl">🚀</div>
            <h2 className="text-2xl font-bold">Career Growth</h2>
            <p className="text-center">
              Accelerate your career with programs tailored for high-impact
              roles.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 shadow-xl rounded-xl p-5">
            <div className="text-5xl">📚</div>
            <h2 className="text-2xl font-bold">Practical Learning</h2>
            <p className="text-center">
              Hands-on projects to ensure you gain real-world skills and
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
