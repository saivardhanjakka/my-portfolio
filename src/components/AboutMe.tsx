import { Code, Database, Server } from "lucide-react";

const AboutMe = () => {
  return (
<div>
    <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-6">
             Hello, I am Jakka Saivardhan. I am a Full Stack Java/React Js
              Developer with 1.3 Years of experience in Application Development
              (Microservices), Design, Deployment, Monitoring and Testing using
              Java/J2EE, JPA/Hibernate, Spring Boot (Core, MVC, Security, REST,
              Data JPA), Spring Cloud (Microservices), JUnit, Mockito, Docker,
              JavaScript, TypeScript, React JS, Containerizing spring boot apps
              using Docker.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Code className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Frontend</h3>
                <p className="text-sm text-gray-600">React Js,Next Js, JavaScript,TypeScript, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div className="text-center">
                <Server className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Backend</h3>
                <p className="text-sm text-gray-600">Java(J2SE & J2EE), Java 8 Features,Spring Core, MVC, Security and REST,
                  Spring & Spring Boot,Microservices with Spring Cloud,Hibernate With Spring Data JPA,Servlets, JSP, JDBC,MySQL</p>
                
              </div>
              <div className="text-center">
                <Database className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Database And Tools</h3>
                <p className="text-sm text-gray-600">MySQL,Docker,
                  SonarQube,Junit And Mockito,Aws Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
   
    </div>
  );
};

export default AboutMe;
