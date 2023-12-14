const Blog = () => {
  return (
    <div className="my-10 h-screen space-y-5">
      <h1 className="text-center text-3xl font-semibold">Blog</h1>
      <h1 className="text-2xl font-medium">1. What is One way data binding?</h1>
      <h1 className="text-xl">
        One-way data binding is a data flow approach in React development,
        particularly in the context of front-end frameworks and libraries. In
        one-way data binding, the flow of data occurs in a single direction.
      </h1>
      <h1 className="text-2xl font-medium">2. What is NPM in node.js?</h1>
      <h1 className="text-xl">
        NPM (Node Package Manager) is a package manager for JavaScript, and it
        is the default package manager for Node.js. It plays a crucial role in
        the Node.js ecosystem by facilitating the installation, sharing, and
        management of third-party libraries and tools.
      </h1>
      <h1 className="text-2xl font-medium">
        3. Different between Mongodb database vs mySQL database?
      </h1>
      <h1 className="text-xl">
        MongoDB is a schema-less, document-oriented NoSQL database, allowing
        flexibility in data structure. MySQL is a schema-based, relational
        database emphasizing structured data. MongoDB excels in scalability and
        dynamic data, while MySQL is robust in complex querying and structured
        data integrity.
      </h1>
    </div>
  );
};

export default Blog;
