import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Python",
    description: "This certificate is awarded for successfully completing a three-day professional workshop in Python, demonstrating a commitment to continuous learning and skill development in the field of programming",
    image: "/projects/AgganBreeze.png",
    
  },
  {
    id: 2,
    title: "IoT",
    description: "This certificate is awarded for attending a 20-hour workshop on the Internet of Things (IoT), where I collaborated with a team to develop a project named Fuel Guard, showcasing hands-on experience and teamwork in an applied technology setting.",
    image: "/projects/AgganBreeze.png",
    
  },
  {
    id: 3,
    title: "IET CSS",
    description:
      "This certificate is awarded for participating in the CSS Challenge organized by IET DAVV, demonstrating skills in web design and styling.",
    image: "/projects/project2.png",
  
  },
  {
    id: 4,
    title: "HackerRank CSS",
    description:
      "This certificate is awarded for successfully passing the CSS test on HackerRank, demonstrating proficiency in front-end development skills.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-cyan-theta.vercel.app/",
    githubUrl: "https://github.com/S15jn/Todo-List",
  },
  {
    id: 4,
    title: "MERN Stack Developer",
    description:
      "This certificate is awarded for successfully completing the MERN Stack Developer course by Apna College, demonstrating proficiency in modern web development technologies",
    image: "/projects/project3.png",

    
  },
];

export const CertificateSection = () => {
  return (
    <section id="certificate" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Certificates </span>
        </h2>

      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
    

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};