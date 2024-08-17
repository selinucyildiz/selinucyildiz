document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "SPACEY",
            description: "An AI model that detects and classifies solar system and outer space such as galaxy and stars objects in real-time.",
            media: "videos/spacey-video.mp4",
            type: "video"
        },
        {
            title: "Real Estate Website",
            description: "A real estate website for the real estate agent.",
            media: "videos/real-estate.mp4",
            type: "video"
        },
        {
            title: "Chess App",
            description: "A chess app named Chessy. ",
            media: "videos/chessy.mp4",
            type: "video"
        },
        {
            title: "Tetris 2048",
            description: "A game that combination of Tetris and 2048. ",
            media: "videos/tetris2048.mp4",
            type: "video"
        },

        {
            title: "Zombie War Game",
            description: "First Person Shooter zombie war game.",
            media: "videos/zombiewargame.mp4",
            type: "video"
        },
        // {
        //     title: "Getir Clone",
        //     description: "A clone of a mobile application Getir. (React Native) ",
        //     media: "spacey-video.mp4",
        //     type: "video"
        // },
        // {
        //     title: "Courself",
        //     description: "A website that people can learn from online and free courses. (SQL, HTML, CSS, PHP, Bootstrap).",
        //     media: "real-estate.mp4",
        //     type: "video"
        // },

    ];

    const projectContainer = document.getElementById('project-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        let projectMedia;
        if (project.type === "image") {
            projectMedia = document.createElement('img');
            projectMedia.src = project.media;
        } else if (project.type === "video") {
            projectMedia = document.createElement('video');
            projectMedia.src = project.media;
            projectMedia.controls = true;
        }

        projectMedia.className = 'project-media';
        projectMedia.alt = project.title;

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectDescription);
        projectCard.appendChild(projectMedia);
        projectCard.appendChild(projectInfo);
        projectContainer.appendChild(projectCard);
    });



//     window.addEventListener('mousemove', function(e) {
//       var arr = [1, 0.9, 0.8, 0.5, 0.2];

//       arr.forEach(function(i) {
//         var x = (1 - i) * 75;
//         var star = document.createElement('div');

//         star.className = 'star';
//         star.style.top = e.clientY + Math.round(Math.random() * x - x / 2) + 'px';
//         star.style.left = e.clientX + Math.round(Math.random() * x - x / 2) + 'px';

//         document.body.appendChild(star);

//         window.setTimeout(function() {
//           document.body.removeChild(star);
//         }, Math.round(Math.random() * i * 600));
//       });
//     }, false);

// // Function to generate random stars
// function generateStars() {
//     const numberOfStars = 50; // Adjust this to add more or fewer stars
//     const body = document.body;
  
//     for (let i = 0; i < numberOfStars; i++) {
//       const star = document.createElement('div');
//       star.className = 'star2';
      
//       // Randomize size, position, delay, and opacity
//       const size = Math.random() * 2 + 0.5 + 'px';
//       const top = Math.random() * window.innerHeight + 'px';
//       const left = Math.random() * window.innerWidth + 'px';
//       const randomDelay = Math.random(); // Random value between 0 and 1
//       const randomOpacity = Math.random() * 0.3 + 0.4; // Random opacity between 0.4 and 0.7
  
//       star.style.width = size;
//       star.style.height = size;
//       star.style.top = top;
//       star.style.left = left;
//       star.style.setProperty('--random', randomDelay); // Set random delay
//       star.style.setProperty('--opacity', randomOpacity); // Set random opacity
  
//       body.appendChild(star);
//     }
//   }
  
//   // Run the function when the window loads
//   window.onload = generateStars;
});
