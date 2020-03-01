const initialState = {
    homepage: {
        greeting: "Hello I'm Sami",
        professiontype: "Fullstack Developer",
        intro1: `I got project experience from multiple positions and roles at IBM and have
                worked with mobile development at Buyandread digital reading store. I have
                been part of Kanban teams and gained experience in agile methodology.`,
        intro2: `I have experience in frontend and backend
                development. I am genuinely interest in new technology and have a passion for
                learning new programming language and frameworks.
                I received my B.sc. in Computer Science at Oslo Metropolitan University.
                I am known for my focus on quality code and constantly improving to
                make the code easily readable and reusable. I always strive to deliver a
                great balance between performance, design and user friendly code.`

    },
    projectspage: {
        projects: [
            {
                title: "Buyandread - Modernization of article reading application",
                content: `Sami was collaborating in developing mobile applications.
                            One in Cordova and Angular and the second one in React Native. Sami focused most on the front page of
                            the application. The emphasis here was to develop a nice and smooth transition on
                            vertical-swipe between articles and horizontal-swipe between topics such as news,
                            sport, culture etc. Lastly he took care of offline storing of articles. To keep data
                            structured and organized, a handy and helpful library named Redux where applied`,
                projectimages: []
            },
            {
                title: "IBM Norway - Booking system for group rooms",
                content: `Sami's task was to write about the technical part from start to end in the final report.
                            Understanding the interaction between the front-end and back-end application was
                            required. The protocol used to communicate between the applications was HTTP and
                            JSON. In order to get a comprehensive picture of the total solution, a diagram of the
                            entire architecture was drawn using the draw.io web service.
                            As a front-end developer, Sami participated in the development of two ReactJS
                            applications, one general for all users and one admin panel for IBM employees. He
                            focused more on the general application. It was important to use the React Router
                            library to create a single page application (SPA) for increased performance and a
                            good user experience.
                            Sami, collaboration with another member in the group had the responsibility to
                            develop the back-end application. His main priority here was to create routes and
                            write the logic for methods corresponding to those routes. To set up the routes and
                            run the server, ExpressJS and NodeJS where applied`,
                projectimages: []
            }
        ]
    },
    detailpage: {

    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'a':
            return;
        case 'b':
            return;
        default:
            return state;
    }
};