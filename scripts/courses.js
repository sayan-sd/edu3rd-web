// =================== COURSES ================================
const courses = [
    {
        id: 1,
        courseImg: `../assets/ct1.png`,
        courseName: `Web Dev: Craft Your Digital Presence`,
        courseDescription: `Learn HTML, CSS, JavaScript, and frameworks. Build responsive, dynamic websites. Dive into backend with Node.js, databases, and APIs. Learn MERN STACT development with Edu Nest.`,
        price: 49,
        timeLimit: 12,
        studentCount: 5,
        link: `#`
    },
    {
        id: 2,
        courseImg: `../assets/ct2.png`,
        courseName: `DAS Course: Unleash Data Analytics Skills`,
        courseDescription: `Master data analytics techniques, including data mining, visualization, and interpretation for informed decision-making in various industries. Learn full DSA with Java or C++.`,
        price: 59,
        timeLimit: 8,
        studentCount: 10,
        link: `#`
    },
    {
        id: 3,
        courseImg: `../assets/ct3.png`,
        courseName: `Python Mastery: Unlock Programming Potential`,
        courseDescription: `Comprehensive Python programming course covering fundamentals to advanced topics, equipping learners with versatile skills for software development and data analysis.`,
        price: 69,
        timeLimit: 6,
        studentCount: 15,
        link: `#`
    },
    {
        id: 4,
        courseImg: `../assets/ct4.png`,
        courseName: `Data Science Essentials: Unlocking Insights Powerfully`,
        courseDescription: `Explore data science fundamentals, including statistics, machine learning, and data visualization, empowering you to extract valuable insights from complex datasets.`,
        price: 75,
        timeLimit: 4,
        studentCount: 20,
        link: `#`
    },
    {
        id: 5,
        courseImg: `../assets/ct5.png`,
        courseName: `Blockchain Essentials: Transforming Digital Transactions`,
        courseDescription: `Delve into blockchain technology fundamentals, understanding decentralized systems, smart contracts, and cryptocurrencies, enabling innovation in digital transactions and beyond.`,
        price: 55,
        timeLimit: 10,
        studentCount: 12,
        link: `#`
    },
    {
        id: 6,
        courseImg: `../assets/ct6.png`,
        courseName: `Java Essentials: Building Dynamic Software Solutions`,
        courseDescription: `Comprehensive Java programming course covering core concepts and advanced techniques for developing robust and scalable software applications across various platforms.`,
        price: 65,
        timeLimit: 8,
        studentCount: 18,
        link: `#`
    },
    {
        id: 7,
        courseImg: `../assets/ct7.png`,
        courseName: `Photoshop Proficiency: Mastering Creative Digital Design`,
        courseDescription: `Learn Photoshop tools and techniques for graphic design, photo editing, and digital art creation, unleashing your creativity and professional potential.`,
        price: 45,
        timeLimit: 12,
        studentCount: 8,
        link: `#`
    },
    {
        id: 8,
        courseImg: `../assets/ct8.png`,
        courseName: `MS Office Mastery: Streamlining Workplace Productivity`,
        courseDescription: `Comprehensive MS Office course covering Word, Excel, PowerPoint, and Outlook, equipping you with essential skills for efficient workplace communication and organization.`,
        price: 50,
        timeLimit: 10,
        studentCount: 25,
        link: `#`
    },
];

function generateCourseHTML(course) {
    return `
    <article class="course">
        <div class="course-image">
            <img src="${course.courseImg}" alt="">
        </div>
        <div class="course-info">
            <h4>${course.courseName}</h4>
            <p>${course.courseDescription}</p>
            <h5>$ ${course.price}</h5>
            <div class="course-description">
                <div class="course-time">
                    <i class="fa-solid fa-clock"></i>
                    <span>${course.timeLimit} Weeks</span>
                </div>
                <div class="course-students">
                    <i class="fa-solid fa-users"></i>
                    <span>${course.studentCount}K+ Students</span>
                </div>
            </div>
            <a href="${course.link}" class="btn btn-primary">Buy Now</a>
        </div>
    </article>
    `;
}

// Function to display courses dynamically
function displayCourses() {
    const container = document.querySelector('.courses-container');
    container.innerHTML = ''; // Clear existing content

    // Loop through the courses array and generate HTML for each course
    courses.forEach(course => {
        const courseHTML = generateCourseHTML(course);
        container.insertAdjacentHTML('beforeend', courseHTML); // Append course HTML to container
    });
}
displayCourses();
