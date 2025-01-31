import { Link } from "react-router";
import Contact from "./Contact";
import Internship from "./Internship";
import Service from "./Services";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-Background-Home w-auto h-screen flex items-center justify-center flex-col gap-7">
          <h1 className="text-5xl">
            Take Your Career to the Next Level with{" "}
            <span className="font-extrabold">InnoTraniee</span>
          </h1>
          <h3 className="text-3xl"> Join Exciting Internship Journey</h3>
          <Link to="/register" className="text-white">
            <Button>Apply</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 my-7 px-10 md:px-40 ">
          <h2 className="text-4xl font-semibold self-center">Who we are</h2>
          <p>
            <span className="font-bold">InnoTraniee</span> are IT services and
            IT consultancy that specializes in creating innovative solutions for
            businesses. We are passionate about technology and believe in the
            power of software to transform the world. Our internship program is
            just one of the ways in which we are investing in the future of the
            industry.
          </p>
          <p>
            At <span className="font-bold">InnoTraniee</span>, we believe
            practical knowledge is the key to success in the tech industry. Our
            aim is to help students lacking basic skills by offering hands-on
            learning through live projects and real-world examples.{" "}
          </p>
        </div>
        <div className="my-5">
          <Service />
        </div>
        <div className="px-10 md:px-20 my-5">
          <Internship />
        </div>
        <div className="flex flex-col px-10 md:px-40 my-10 gap-5 ">
          <h1 className="text-4xl font-semibold self-center">Our Features</h1>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col w-3/5 md:w-2/5 h-auto shadow-lg p-4 m-5 items-center justify-center gap-3">
              <h2 className="text-2xl font-bold ">Email Notifications</h2>
              <p className="leading-none text-justify">
                Receive notifications about important events such as upcoming
                deadlines, new assignments, and changes to your schedule.
              </p>
            </div>
            <div className="flex flex-col w-3/5 md:w-2/5 h-auto shadow-lg p-4 m-5 items-center justify-center gap-3">
              <h2 className="text-2xl font-bold ">Large Community</h2>
              <p className="leading-none text-justify">
                We believe in networking and connecting with other interns who
                share similar interests.
              </p>
            </div>
            <div className="flex flex-col w-3/5 md:w-2/5 h-auto shadow-lg p-4 m-5 items-center justify-center gap-3">
              <h2 className="text-2xl font-bold ">Simple Interface</h2>
              <p className="leading-none text-justify">
                Our simple interface makes it easy to use and navigate. The
                information is presented clearly and concisely.
              </p>
            </div>
            <div className="flex flex-col w-3/5 md:w-2/5 h-auto shadow-lg p-4 m-5 items-center justify-center gap-3">
              <h2 className="text-2xl font-bold ">Deadline Reminders</h2>
              <p className="leading-none text-justify">
                We send timely reminders via email to help you manage your tasks
                and deadlines effectively.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-14 items-center gap-10 flex-col md:flex-row">
            <div className="flex flex-col w-3/5 md:w-1/5 h-auto md:h-44 max-h-48 gap-3 items-center justify-center shadow-xl p-5 bg-[#EDD1E0] rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all ">
              <h2 className="text-lg font-bold">Simplified Internships</h2>
              <p className="leading-none text-justify">
                Explore virtual internships in Web Dev, App Dev, Full Stack,
                UI/UX, and Data Science; focused learning.
              </p>
            </div>

            <div className="flex flex-col w-3/5 md:w-1/5 h-auto md:h-44 max-h-48 gap-3 items-center justify-center shadow-xl p-5 bg-[#F8ECD7] rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all ">
              <h2 className="text-lg font-bold">Building Student Trust</h2>
              <p className="leading-none text-justify">
                We ensure your success and build a trusted platform for valuable
                learning experiences.
              </p>
            </div>
            <div className="flex flex-col w-3/5 md:w-1/5 h-auto md:h-44 max-h-48 gap-3 items-center justify-center shadow-xl p-5 bg-[#F1EFF0] rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all ">
              <h2 className="text-lg font-bold">Build Your Network</h2>
              <p className="leading-none text-justify">
                We believe in networking to connect with other interns who are
                interested in the same things.
              </p>
            </div>
            <div className="flex flex-col w-3/5 md:w-1/5 h-auto md:h-44 max-h-48 gap-3 items-center justify-center shadow-xl p-5 bg-[#fff] rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all ">
              <h2 className="text-lg font-bold">Structured Learning</h2>
              <p className="leading-none text-justify">
                Enjoy growth-oriented internships at Bharat Intern, tailored for
                maximum skill development.
              </p>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};
export default Home;
