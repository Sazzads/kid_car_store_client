import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Blogs = () => {
    
    return (
        <div className='px-5'>
            <PageTitle title="Kid Car Store | Blog"></PageTitle>
            <h2 className='text-center text-5xl font-bold mt-10'>Blog Questions</h2>
           
            <Tabs className="max-w-7xl mx-auto my-14 mb-48">
                <TabList className="text-center">
                    <Tab>Question-1</Tab>
                    <Tab>Question-2</Tab>
                    <Tab>Question-3</Tab>
                    <Tab>Question-4</Tab>
                </TabList>

                <TabPanel className="text-justify mt-5">
                    <h2 className='font-semibold'> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                    <p className='mt-4'>An access token is a credential that is used to authenticate and authorize access to protected resources for a client. It is usually a temporary token that authorizes authorization for a limited scope or set of operations. A refresh token, on the other hand, is a token with a lengthy lifespan that is used to receive a new access token when the existing one expires.</p>
                    <p>Access tokens are often saved in the memory of the client-side application or in a secure storage mechanism such as browser cookies or local storage. Because refresh tokens are more sensitive and have a longer lifespan, they should be securely saved, preferably in an HTTP-only cookie or a backend server session. Storing them securely aids in the prevention of unwanted access and token theft.</p>
                </TabPanel>

                <TabPanel className="text-justify mt-5">
                    <h2 className='font-semibold'>Compare SQL and NoSQL databases?</h2>
                    <p className='mt-4'>SQL databases are relational databases that use structured query language (SQL) to manipulate and retrieve data. They protect data integrity, provide robust consistency, and handle complex transactions. Non-relational databases, on the other hand, provide flexible schema design, scalability, and excellent performance for large-scale distributed systems. They give up certain consistency guarantees in exchange for horizontal scalability and simpler data structuring. The choice between SQL and NoSQL is determined by the application's specific requirements, such as the necessity for structured data or scalability.</p>
                </TabPanel>

                <TabPanel className="text-justify mt-5">
                    <h2 className='font-semibold'>What is express js? What is Nest JS?</h2>
                    <p className='mt-4'>Express.js is a Node.js web application framework that is simple and adaptable. It offers a straightforward and strong collection of functionality for developing web apps and APIs. Developers can use Express.js to construct routes, manage HTTP requests and responses, and implement middleware for various functions.</p>
                    <p className='mt-4'>NestJS is a TypeScript-based framework for developing efficient and maintainable server-side applications. It is based on Express.js and includes features like as dependency injection, modular architecture, and support for numerous design patterns. NestJS encourages the use of decorators and static typing in TypeScript to improve code readability and maintainability.</p>
                    <p className='mt-4'>Express.js is a lightweight and adaptable web framework, and NestJS extends it by adding functionality and a disciplined approach to constructing scalable server-side applications.</p>
                </TabPanel>

                <TabPanel className="text-justify mt-5">
                    <h2 className='font-semibold'>What is MongoDB aggregate and how does it work?</h2>
                    <p className='mt-4'>The aggregate feature of MongoDB is a sophisticated tool that enables for extensive data processing and analysis within the database. It supports the aggregation framework, a pipeline-based method to data transformation and manipulation. The aggregate function takes as input an array of stages, each of which performs a specific operation on the data, such as grouping, filtering, projecting, or joining.</p>
                    <p className='mt-4'>The MongoDB aggregation pipeline systematically processes documents through the stages, sending the resulting dataset from one stage to the next. Each step transforms the input documents according to its operation and produces output documents that are sent to the following stage. Complex data changes and aggregations can be performed efficiently within the database using this pipeline approach.</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Blogs;