import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>1: What is context API?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            <h1>2:What is Semantic tag?</h1>
            <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.</p>
            <p>There are some examples of semantic tag: article, aside, main , header, footer, detail, mark, summery,map, form , table </p>
            </div>
    );
};

export default Blogs;