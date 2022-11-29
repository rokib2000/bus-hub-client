import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto  my-12">
      <div className="hero">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Blog</h1>
          </div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
          <p>
            There are four main types of state you need to properly manage in your React apps:
            <br /> <br />
            Local state <br />
            Global state <br />
            Server state <br />
            URL state
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>
            Prototypal inheritance is a feature of JavaScript used to add methods and properties to objects. It is a
            method by which an object can inherit the properties and methods of another object. Traditionally, to get
            and set the [[prototype]] of an object, we use the object. getPrototypeOf and object.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
          <p>
            The main purpose of unit testing is to isolate written code and determine whether it works as intended. Unit
            testing is an important step in the development process, because if done correctly, it can help identify
            early errors in code that may be more difficult to find in later testing phases.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title">React vs. Angular vs. Vue?</h2>
          <p>
            There are three frameworks for building web applications that every frontend developer has heard of: React,
            Vue.js, and Angular.
            <br />
            <br />
            React is a UI library, Angular is a fully developed front-end framework and Vue.js is a progressive
            framework.
            <br />
            <br />
            They can be used almost interchangeably to build front-end applications, but they are not 100 percent the
            same, so it makes sense to compare them and understand their differences.
            <br />
            <br />
            Each framework is component-oriented and allows rapid creation of UI features.
            <br />
            <br />
            However, they all have different structures and architectures — so first, we'll look at their architectural
            differences to understand the philosophy behind them.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
