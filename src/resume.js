import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

export function showResume() {
  // Big ASCII Name
  console.log(
    chalk.cyan(
      figlet.textSync("Prathamesh", {
        horizontalLayout: "full",
      })
    )
  );

  const resume = `
${chalk.bold("Name:")} Prathamesh Pichkate
${chalk.bold("Location:")} Pune, Maharashtra
${chalk.bold("Email:")} prathameshpichkate@gmail.com
${chalk.bold("Phone:")} +91 9370685979

${chalk.bold("Education:")}
• BE in Computer Engineering  
  PDEA’s College of Engineering, Pune (2022 – 2026)  
  SGPA: 8.67 / 10  
  Coursework: DBMS, DSA, OOP

${chalk.bold("Experience:")}
${chalk.bold(
  "Full Stack Web Developer Intern"
)} — MusiTech (Jun 2024 – Jun 2025)
• Built secure, scalable full-stack applications using React, Node.js, Express, Redux
• Implemented REST APIs with JWT-based role-based access control
• Improved performance by ~25% using query optimization & lazy loading
• Contributed to API documentation and integration testing (Postman)
• Worked in Agile teams with code reviews and sprint planning

${chalk.bold("Projects:")}
${chalk.bold("AI Resume Builder")}
• AI-powered platform to create ATS-friendly resumes
• Features: AI summaries, skill suggestions, resume upload & enhancement
• Tech: MERN, OpenAI API, JWT, Tailwind CSS, Vite

${chalk.bold("Official NSS PDEA Website")}
• Responsive UI/UX for events and organizational content
• Tech: React, React Router, Tailwind CSS, Figma

${chalk.bold("JustBlog")}
• Secure blogging platform with admin moderation
• Tech: React, Node.js, Express, MongoDB, Redux, JWT, Google OAuth

${chalk.bold("Technologies:")}
Java, JavaScript (ES6+), React.js, Redux  
Node.js, Express.js, MongoDB, MySQL, Prisma  
Tailwind CSS, HTML5, CSS3  
REST APIs, JWT, OAuth, Git, GitHub, Postman  
Linux (Basic), VS Code

${chalk.bold("Achievements:")}
• International Rank 688 / 35,629 — LeetCode Weekly Contest 464
• Solved 350+ LeetCode DSA problems
• Full Stack Web Development Bootcamp (MERN)

${chalk.bold("Links:")}
• LinkedIn: linkedin.com/in/prathamesh-pichkate
• GitHub: github.com/prathameshpichkate
`;

  console.log(
    boxen(resume, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
    })
  );
}
