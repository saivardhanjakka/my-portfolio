import { Github } from "lucide-react";

const PersonalProjectAndFooter = () => {
  return (
    <div>
      {/* Personal Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1  gap-4 md:gap-6">
            {/* E-commerce Platform */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  User Management
                </h3>
                <a
                  href="https://github.com/saivardhanjakka/UserManagement/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Registration Page: Country, State & City values should be
                fetched from Database Drop Downs are dependent Based on Country
                selection, States should be populated Based on State selection,
                cities should be populated App should generate random Pwd and
                send to user in email Login Page When user login for first time,
                reset pwd page will display When user login second time then
                dashboard will come directly Reset Password Page: When user
                login for first time Reset Pwd Page will display User can update
                the password in this page We need to verify user given old pwd
                is correct or not We need to verify New Pwd & Confirm Pwd are
                same nor not If user pwd reset already completed then this page
                will not come again Dashboard Page : This page will get Random
                quotes from third party API.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Java
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Spring Boot
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  Thymleaf
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                  MySQL
                </span>
              </div>
              <a
                href="https://github.com/saivardhanjakka/UserManagement/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Task Management System */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Counsellor Portal
                </h3>
                <a
                  href="https://github.com/saivardhanjakka/counsellorportal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Login for Counsellors: Each counsellor has their own private
                login with a password to keep their information safe. Simple
                Dashboard: When a counsellor logs in, they see a dashboard with
                a quick summary of their work, including: Total number of
                enquiries How many enquiries are still open How many students
                have enrolled How many enquiries were lost Manage Student
                Enquiries: Counsellors can easily: Add: Use a simple form to add
                new students who ask about a course. View: See a list of all
                their student enquiries. Filter: Search the list to find
                students by course, status, or class type (Online/Classroom).
                Edit: Update a student's information or status at any time.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Java
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Spring Boot
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  Thymeleaf
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  MySQL
                </span>
              </div>
              <a
                href="https://github.com/saivardhanjakka/counsellorportal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* school Application */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  School Web Application
                </h3>
                <a
                  href="https://github.com/saivardhanjakka/schoolapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                A public "Contact Us" form allows parents and visitors to send
                inquiries directly through the website. All messages are
                securely captured and stored in the database. A secure admin
                panel displays all contact messages, featuring powerful tools
                for filtering, sorting, and pagination to efficiently manage a
                large volume of communications.Public Information Pages:
                Includes easily updatable pages for general announcements, such
                as a Holidays Page, ensuring the entire school community is kept
                informed. Class & Student Management: Administrators can create
                and manage school classes (e.g., "Grade 10 - Section A"). The
                system allows admins to view a detailed list of all students
                enrolled in a specific class, including their names and contact
                information. Functionality to manage class records, including
                the ability to delete entries. Course Management: A dedicated
                module to list and manage academic courses offered by the
                school, including details like course name and fees. Provides a
                clear view of student enrolment, allowing administrators to see
                all students signed up for a specific course. User Profile
                Management: A secure profile section where registered users
                (staff or students) can view their personal details, including
                name, mobile number, email, city, address, and zipcode.
                Role-Based Authentication with Spring Security: Implements a
                secure registration and login system for both Admins and
                Students. Utilizes the powerful Spring Security framework to
                handle authentication and authorization, protecting routes and
                ensuring users can only access features relevant to their role
                (e.g., Admin dashboard vs. Student profile).
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Java
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Spring Boot
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  Thymeleaf
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                  MySQL
                </span>
              </div>
              <a
                href="https://github.com/saivardhanjakka/schoolapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Inventory Management */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Banking Application
                </h3>
                <a
                  href="https://github.com/saivardhanjakka/BankApplic-tionUsingSpringBoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Automated Account Creation: When a new user registers, the
                system automatically generates a unique and random account
                number for them, which serves as their primary identifier.
                Secure Account Login: Users log in to the application using
                their unique account number, ensuring that they can securely
                access their own account information and functions. Core Banking
                Transactions: Once logged in, a user can perform essential
                financial operations: Deposit: Easily add money to their account
                balance. Withdraw: Securely take money out of their account.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Java
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Spring Boot
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                  REST API
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                  MySQL
                </span>
              </div>
              <a
                href="https://github.com/saivardhanjakka/BankApplic-tionUsingSpringBoot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
           
          </div>

           <div className=" py-6 flex justify-center items-center gap-4">

    
      <a 
        href="https://github.com/saivardhanjakka" 
        className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base !text-white"
      >
        Other Projects
      </a>
      </div>
        </div>
      </section>
     
    </div>
  );
};

export default PersonalProjectAndFooter;
