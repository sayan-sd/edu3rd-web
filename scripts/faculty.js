// Define an array of team members
const teamMembers = [
    { name: "Sayan Das", role: "Web Developer", image: "../assets/user1.png" },
    { name: "John Smith", role: "Mathematics Instructor", image: "../assets/member2.png" },
    { name: "Emma Johnson", role: "DSA Educator", image: "../assets/member3.png" },
    { name: "Sophia Lee", role: "Java Teacher", image: "../assets/member4.png" },
    { name: "Michael Brown", role: "Python Professor", image: "../assets/member5.png" },
    { name: "David Miller", role: "CS Lecturer", image: "../assets/member6.png" },
    { name: "Daniel Wilson", role: "Data Science Coach", image: "../assets/member7.png" },
    { name: "Emily Taylor", role: "Art Instructor", image: "../assets/member8.png" }
];

// Function to generate HTML for a team member
function generateTeamMemberHTML(member) {
    const article = document.createElement('article');
    article.classList.add('team-member');
    article.classList.add('swiper-slide');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('team-member-image');
    const image = document.createElement('img');
    image.src = member.image;
    imageDiv.appendChild(image);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('team-member-info');
    const name = document.createElement('h4');
    name.textContent = member.name;
    const role = document.createElement('p');
    role.textContent = member.role;
    infoDiv.appendChild(name);
    infoDiv.appendChild(role);

    article.appendChild(imageDiv);
    article.appendChild(infoDiv);

    return article;
}

// Get the container where team members will be added
const container = document.querySelector('.team-container');

// Iterate through the teamMembers array and create HTML for each member
teamMembers.forEach(member => {
    const memberHTML = generateTeamMemberHTML(member);
    container.appendChild(memberHTML);
});

