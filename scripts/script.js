// get and set the current year in the footer
const currentyear = document.querySelector('#currentyear');
const year = new Date().getFullYear();
currentyear.textContent = year;

// get and set the last modified date in the footer
lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;

// Courselist Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const course_list = document.querySelector('#courses-list');
const certificate_list = document.querySelector('#certificate-list');
let list_html = '';
let list_certificate = '';

// loop through the courses array and display the course information
courses.forEach(course => {  
    list_html += `
        <li>
            <p>${course.subject} ${course.number} - ${course.title}</p>
        </li>
    `;
});
course_list.innerHTML = list_html;

// loop through the courses array and display the certificate information
courses.forEach(course => {
    const list_item_class = course.completed ? 'completed' : '';
    
        list_certificate += `
            <li class="${list_item_class}">
                <strong>${course.subject} ${course.number}</strong>
            </li>`;
    
});
certificate_list.innerHTML = list_certificate;

// to style my completed button
const course_completed_style = document.createElement('style');
course_completed_style.innerHTML = `
    #certificate-list li { /* Basic list styles */
        list-style: none;
        padding: 5px;
        margin: 5px 0;
        border: 1px solid black;
    }

    #certificate-list li.completed { /* Styles for completed courses ONLY */
        background-color: #64301D;
        color: #FFF;
    }
`;
document.head.appendChild(course_completed_style);