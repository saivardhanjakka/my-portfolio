import { Github } from "lucide-react";

const Experience = () => {
  return (
    <div>
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Company 1 */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Software Developement Engineer
                  </h3>
                  <p className="text-blue-600 font-medium text-sm md:text-base">
                    Order Matic Technologies.
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium self-start">
                  July 2024 - Present
                </span>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                Worked on the development of Menumamu, QR Based Ordering System
                for Restaurants supporting Dine-In, Takeaway, Pickup, and
                Delivery services. Focused on building scalable and
                user-friendly web solutions using Spring Boot and React.js,
                ensuring smooth operation and a seamless user experience.Built
                and secured REST APIs using Spring Boot, Spring Security, and
                JWT to handle user authentication and ensure secure data access.
                Implemented Exception Handling mechanisms to gracefully manage
                errors and ensure better system stability and user feedback.
                Designed dynamic and responsive UI components using React.js,
                improving usability across multiple restaurant service modes.
                Integrated Swagger for clear and accessible API documentation
                and testing. Worked with AWS Cloud services like EC2, S3 and
                RDS. Implemented Redis for caching frequently accessed data,
                improving application performance and response times. I have
                expertise in OOPS, Exception Handling, Java 8 features like
                lambda, streams, functional interface. Worked on designing and
                developing microservices using Spring Cloud to implement config
                server, service discovery, circuit breaker, dynamic scaling
                using eureka and spring cloud load balancer, Spring cloud API
                gateway, fault tolerance using Resilence4J, distributed tracing
                with Zipkin Implemented Dockerization to run apis as containers.
                Applied SonarQube to monitor code quality and improve
                maintainability by identifying bugs and code smells. Implemented
                test cases for services using JUnit and Mockito. Used Git and
                GitHub for version control, code collaboration, and managing
                project repositories effectively.
              </ul>

             
               
           
            </div>

            {/* Company 2 */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                     Java Developer Intern
                  </h3>
                  <p className="text-green-600 font-medium text-sm md:text-base">
                   Hulk Hire Tech
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium self-start">
                  May 2024- June 2024
                </span>
              </div>
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                Completed a two-month internship focused on Java Backend Development. Gained hands-on experience in developing REST APIs using Spring Boot and improved practical understanding of backend development and web application architecture.
              </ul>

           
               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
