const About = () => {
  return (
    <>
      <div className="flex flex-col px-10 md:px-40 gap-10 my-10">
        <h1 className="text-5xl font-bold">Get to know us </h1>
        <p>
          <span className="font-bold">InnoTraniee</span> are IT services and IT
          consultancy that specializes in creating innovative solutions for
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
      <div className="flex flex-col md:flex-row px-10 md:px-40 gap-8 md:gap-28 items-center h-auto bg-slate-100 ">
        <div className="flex flex-col gap-5 py-5 my-5 md:w-1/2">
          <h1 className="font-bold text-4xl ">Our Mission</h1>
          <p className="text-lg">
            Software development is an iterative process, and the mission
            includes continually improving software solutions. This entails
            gathering feedback, identifying areas for enhancement, and
            implementing updates to make the software more efficient,
            user-friendly, and reliable. Continuous improvement also involves
            staying up to date with the latest technologies, tools, and industry
            trends.
          </p>
        </div>
        <div className="flex flex-col gap-5 py-5 my-5 md:w-1/2">
          <h1 className="font-bold text-4xl ">Our Vision</h1>
          <p className="text-lg">
            The vision of software development is to create innovative solutions
            that push the boundaries of technology. This involves leveraging
            emerging technologies, exploring new ideas, and developing software
            that brings novel approaches to solving problems and improving the
            lives of users.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
