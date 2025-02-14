import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Services = () => {
  return (
    <>
      <div className="px-5 md:px-32">
        <div className="flex flex-col p-5 md:px-30">
          <div className="flex flex-col ">
            <h1 className="text-4xl font-bold mb-10 self-center">
              We Provide All Exclusive services For Clients
            </h1>
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
              <img
                className="size-3/4 md:size-2/5"
                src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1592.jpg"
                alt="img"
              />
              <div>
                <h2 className="text-2xl font-bold mb-5">
                  We build websites and web applications.
                </h2>
                <p className="text-lg mb-5">
                  Today, every business should have a website.
                  <br />
                  <br />
                  No matter how small or large your business, having a website
                  is must have at this time.
                  <br />
                  <br />
                  Having a website help you to maintain your online presence.
                </p>
                <Link to="/contact">
                  <Button className="mb-5">Contact Us</Button>
                </Link>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
              <img
                className="size-3/4 md:size-2/5"
                src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg"
                alt="img"
              />
              <div>
                <h2 className="text-2xl font-bold mb-5">
                  E-commerce development
                </h2>
                <p className="text-lg mb-5">
                  Our talented web development team has years of experience
                  building websites from small to large.
                  <br />
                  <br />
                  We deliver projects with almost 100% user satisfaction..
                  <br />
                  <br />
                  Whatever functionality you need for the web, we will implement
                  it.
                </p>
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row-reverse">
              <img
                className="size-3/4 md:size-2/5"
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                alt="img"
              />
              <div>
                <h2 className="text-2xl font-bold mb-5">
                  Need website for your business?
                </h2>
                <p className="text-lg mb-5">
                  Want to sell your products online?
                  <br />
                  <br />
                  We often develop E-commerce for businesses who want to sell
                  their products or services online.
                  <br />
                  <br />
                  Let&apos;s move your products towards online...
                </p>
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
              <img
                className="size-3/4 md:size-2/5"
                src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg"
                alt="img"
              />
              <div>
                <h2 className="text-2xl font-bold mb-5">
                  We provide mobile app development services.
                </h2>
                <p className="text-lg mb-5">
                  Our dedicated Android developers are specialized in the
                  development of cutting-edge applications.
                  <br />
                  <br />
                  Having your very own mobile app can help you to expand your
                  business to new level.
                </p>
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row-reverse">
              <img
                className="size-3/4 md:size-2/5"
                src="https://img.freepik.com/premium-vector/people-creating-together-new-app_23-2148683053.jpg"
                alt="img"
              />
              <div>
                <h2 className="text-2xl font-bold mb-5">
                  Need your very own mobile app?
                </h2>
                <p className="text-lg mb-5">
                  Our talented app development team has years of experience
                  building mobile applications from small to large.
                  <br />
                  <br />
                  We deliver app development projects with almost 100% client
                  satisfaction.
                  <br />
                  <br />
                  We guarantee you, we will not stop working until the app is
                  completed with all the functionalities you need.
                </p>
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
