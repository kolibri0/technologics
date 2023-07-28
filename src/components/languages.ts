export default [
  {
    id: 1,
    name: 'JavaScript',
    date: 'September 1995',
    author: "Brendan Eich",
    type: 'Web',
    interpretation: 'Interpreted',
    lvl: 'mid',
    typingDiscipline: 'Dynamic',
    description: 'JavaScript is a programming language originally designed to add interactivity to web pages and create web applications. It is used in the development of web pages for tasks such as automatically changing the date of a page, making a page appear in a pop-up window when you click on a link or having a text or image change when you hover over it. It is also often used to make surveys and forms. It runs on the computer of the visitor to the web, so it does not require constant downloads from the website.',
    used: 'For the past eight consecutive years, JavaScript has been the most commonly used programming language by developers who responded to Stack Overflow’s annual survey. The language’s popularity stems largely from its versatility. While originally designed for front-end development, JavaScript’s extensive list of associated libraries and frameworks have extended its utility. Now, you can use it for just about anything — including back-end, mobile, and game development.',
    sin: 'https://thumbs.dreamstime.com/b/hello-world-javascript-programming-language-hello-world-code-hello-world-code-written-javascript-programming-language-syntax-248663704.jpg',
    frameworks: [
      {
        name: "React",
        img: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
        description: "The React.js framework is an open-source JavaScript framework and library developed by Facebook.It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface."
      },
      {
        name: "Vue",
        img: 'https://w7.pngwing.com/pngs/492/902/png-transparent-vuejs-original-wordmark-logo-icon.png',
        description: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.',
      },
      {
        name: "Angular",
        img: 'https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png',
        description: 'Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner. These days, we have a variety of frameworks and libraries designed to provide alternative solutions. With respect to front-end web development, Angular addresses many, if not all, of the issues developers face when using JavaScript on its own.',
      },
      {
        name: "Jquery",
        img: 'https://w7.pngwing.com/pngs/606/221/png-transparent-jquery-original-logo-icon.png',
        description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
      },
      {
        name: "Jest",
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-jest-3627678-3028904.png',
        description: 'Jest is a JavaScript open-source framework mainly used for testing. Jest is majorly used to work with react-native based web applications and with react, and it mostly focuses on simplicity while doing any unit testing. Unit testing is often not very useful when run on the front end of any software because it is extensive and very time-consuming and raises complexity. But it can easily be removed using the jest framework. Also, the jest framework helps the programmer validate everything developed by using JavaScript, whether it is browser rendering of web applications or any mobile applications.',
      },
    ]
  },
  {
    id: 2,
    name: 'Python',
    date: 'February 1991',
    author: "Guido van Rossum",
    type: 'Universal',
    typingDiscipline: 'Dynamic',
    interpretation: 'Interpreted',
    lvl: 'mid',
    used: "Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it’s relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances. “Writing programs is a very creative and rewarding activity,” says University of Michigan and Coursera instructor Charles R Severance in his book Python for Everybody. “You can write programs for many reasons, ranging from making your living to solving a difficult data analysis problem to having fun to helping someone else solve a problem.”",
    description: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python. Python has a reputation as a beginner-friendly language, replacing Java as the most widely used introductory language because it handles much of the complexity for the user, allowing beginners to focus on fully grasping programming concepts rather than minute details.',
    sin: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/q2.JPG',
    frameworks: [
      {
        name: "Django",
        img: 'https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png',
        description: "The Django web framework is a free, open source framework that can speed up development of a web application being built in the Python programming language. Django facilitates “rapid development and clean, pragmatic design.” The Django web framework, deployed on a web server, can help developers quickly produce a web frontend that’s feature-rich, secure and scalable."
      },
      {
        name: "Cherrypy",
        img: 'https://testrigor.com/wp-content/uploads/2023/04/cherrypy_logo_square.png',
        description: 'CherryPy is a popular framework of Python. Using CherryPy, web applications can be built in a faster and more reliable way. It is also called a web application library. It is known for its simplicity as it is based on object-oriented Python programming, resulting in smaller source code in less time. It is one of the oldest frameworks of Python, the very first version being released in June 2002. This framework is mainly for the developers who want to create portable database-driven web application using Python, as it provides Create, Retrieve, Update and Delete functionalities.',
      },
      {
        name: "Aiohttp",
        img: 'https://docs.aiohttp.org/en/v3.7.2/_static/aiohttp-icon-128x128.png',
        description: 'aiohttp is an HTTP client/server for asyncio. Basically it allows you to write asynchronous clients and servers. The aiohttp package also supports Server WebSockets and Client WebSockets. asyncio is a library to write concurrent code. It is used at the core of many asynchronous applications to deliver high-performance and speedy processing, etc.',
      },
      {
        name: "Flask",
        img: 'https://icon2.cleanpng.com/20180802/iwp/kisspng-flask-by-example-python-web-framework-bottle-lico-softwares-websites-press-services-product-5b634c8e416770.5741331515332343182679.jpg',
        description: 'Flask is a web framework. Flask is part of the categories of the micro-framework. Micro-framework are normally framework with little to no dependencies to external libraries. This has pros and cons. Pros would be that the framework is light, there are little dependency to update and watch for security bugs, cons is that some time you will have to do more work by yourself or increase yourself the list of dependencies by adding plugins.',
      },
    ]
  },
  {
    id: 3,
    name: 'C',
    author: "Dennis Ritchie",
    date: '1972',
    type: 'System administration Network programming',
    typingDiscipline: 'Static',
    interpretation: 'Compiled',
    used: 'C is an excellent choice for system programming, for example, developing operating systems, compilers, and network drivers. Despite its popularity, C is not without its criticisms. Some have argued that its syntax could be more complex and easier to learn, while others have noted its lack of standardization as a significant issue. Nevertheless, C remains a widely used and influential language and will probably continue for many years.',
    lvl: 'mid',
    description: 'C programming language is a procedural and general-purpose language that provides low-level access to system memory. A program written in C must be run through a C compiler to convert it into an executable that a computer can run. Many versions of Unix-based operating systems (OSes) are written in C and it has been standardized as part of the Portable Operating System Interface (POSIX).',
    sin: 'https://linuxhint.com/wp-content/uploads/2022/03/Hello-World-Program-C-10.png',
    frameworks: [
      {
        name: 'Kore',
        img: "data:image/png;base64,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",
        description: "Kore is a web application platform for writing scalable, concurrent web based processes in C or Python. It is built with a `secure by default` approach. It is fully privilege separated while using strong security features at the operating system level such as seccomp, pledge, unveil and more.Today Kore is used in a variety of applications ranging from high assurance cryptographic devices, machine-learning stacks and even in the aerospace industry."
      },
      {
        name: 'Vely',
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--kkjU9mhP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wwd5pdv591ymqx370nw1.png",
        description: "Vely is a free open source general-purpose framework for rapid development of high-performance software, especially well suited for web applications. Develop anything back-end: web applications, plain command-line programs, cloud applications, middleware, database applications, IOT or anything else. Read about Vely architecture. Create and manage application servers as quickly as command-line programs. Take advantage of distributed computing in just a single line of code."
      },
    ]
  },
  {
    id: 4,
    name: 'C++',
    date: '1983',
    type: 'Developing browsers Operating systems',
    interpretation: 'Compiled',
    author: 'Bjarne Stroustrup',
    typingDiscipline: 'Static',
    lvl: 'hard',
    used: 'C++ is most popularly used for building large software infrastructure and applications that run on limited resources. Because C++ can directly manipulate the hardware (or machine) that it runs on, programmers can fine-tune their code to run efficiently in any environment, even when there’s limited hardware space or energy available to power the application. This translates to applications that run quickly and reliably on a variety of devices, making C++ ideal for forming the base layer of many important applications. For these reasons, C++ is an excellent choice for building software that is fast, efficient at managing system resources, and reliable in performing critical tasks.',
    description: 'C++ is an object-oriented programming language created by notable computer scientist Bjorne Stroustrop as part of the evolution of the C family of languages. It was developed as a cross-platform improvement of C to provide developers with a higher degree of control over memory and system resources.',
    sin: 'https://btechgeeks.com/wp-content/uploads/2021/10/C-Program-to-Print-Hello-World-Multiple-Times.png',
    frameworks: [
      {
        name: 'Drogon',
        img: "https://repository-images.githubusercontent.com/131236938/be693c00-693d-11e9-9d03-90c0d5344650",
        description: 'Drogon is a HTTP web application framework running on Linux/macOS/Unix/Windows. Drogon uses a few tricks to decouple controllers from the main program. The routing settings of controllers can be done through macros or configuration file.'
      },
      {
        name: "Poco",
        img: "https://avatars.githubusercontent.com/u/201918?s=280&v=4",
        description: 'The POCO C++ Libraries are powerful cross-platform C++ libraries for building network- and internet-based applications that run on desktop, server, mobile, IoT, and embedded systems. Whether building automation systems, industrial automation, IoT platforms, air traffic management systems, enterprise IT application and infrastructure management, security and network analytics, automotive infotainment and telematics, financial or healthcare, C++ developers have deployed the POCO C++ Libraries in millions of devices.'
      },
      {
        name: "TreeFrog",
        img: "https://avatars.githubusercontent.com/u/2995876?v=4",
        description: 'TreeFrog Framework is a high-speed and full-stack C++ framework for developing Web applications, which supports HTTP and WebSocket protocol. Web applications can run faster than that of scripting language because the server-side framework was written in C++/Qt. In application development, it provides an O/R mapping system and template systems on an MVC architecture, aims to achieve high productivity through the policy of convention over configuration.'
      }
    ]
  },
  {
    id: 5,
    name: 'Java',
    date: 'May 1995',
    type: 'Applications for almost any platform',
    author: "James Gosling",
    interpretation: 'Both',
    typingDiscipline: 'Static',
    lvl: 'mid',
    used: "With a large variety of applications and use cases, Java is still one of the most popular programming languages in the world in 2022. You can use Java primarily in the following areas: -Web Application Development, -Mobile Application Development, -Game Development",
    description: 'Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.',
    sin: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/10/Notepad_HelloWorld.png',
    frameworks: [
      {
        name: 'Spring',
        img: 'https://media.trustradius.com/product-logos/9B/8G/IMJEF6VWC74S.PNG',
        description: 'Spring Framework is a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application. Spring enables you to build applications from “plain old Java objects” (POJOs) and to apply enterprise services non-invasively to POJOs. This capability applies to the Java SE programming model and to full and partial Java EE.',
      },
      {
        name: 'Google Web Toolkit',
        img: 'https://upload.wikimedia.org/wikipedia/zh/thumb/a/a8/Google_Web_Toolkit_logo.svg/1200px-Google_Web_Toolkit_logo.svg.png',
        description: 'GWT is a development toolkit for building and optimizing complex browser-based applications. Its goal is to enable productive development of high-performance web applications without the developer having to be an expert in browser quirks, XMLHttpRequest, and JavaScript. It’s open source, completely free, and used by thousands of developers around the world. The GWT SDK contains the Java API libraries, compiler, and development server. It lets you write client-side applications in Java and deploy them as JavaScript.',
      },
      {
        name: 'MyBatis',
        img: 'https://t1.daumcdn.net/cfile/tistory/99D808505BBF3D4417',
        description: 'MyBatis is a first class persistence framework with support for custom SQL, stored procedures and advanced mappings. MyBatis eliminates almost all of the JDBC code and manual setting of parameters and retrieval of results. MyBatis can use simple XML or Annotations for configuration and map primitives, Map interfaces and Java POJOs (Plain Old Java Objects) to database records.',
      },
      {
        name: "Wicket (Apache Wicket)",
        img: 'https://www.small-improvements.com/wp-content/uploads/2016/10/logo-wicket2.png',
        description: 'Wicket is a Java server-side web component-oriented framework that aims at simplifying building web interfaces by introducing patterns known from desktop UI development. With Wicket it is possible to build a web application using only Java code and XHTML compliant HTML pages. No need for Javascript, nor XML configuration files. It provides a layer over the request-response cycle, shielding from working at a low level and allowing developers to focus on the business logic.',
      },
    ]
  },
]