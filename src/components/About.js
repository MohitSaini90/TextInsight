import React from "react";

export default function About(props) {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <h1>Your App Name</h1>
      </header>

      <section
        className="container mt-5"
        style={{
          color: props.darkMode === "light" ? "black" : "white",
        }}
      >
        <h2>About</h2>
        <p>
          Welcome to Your App Name, the ultimate text manipulation tool that
          puts the power of formatting and editing in your hands. Whether you
          need to convert text to uppercase or lowercase, clear unnecessary
          formatting, format text in a specific style, find and replace words or
          phrases, or even have your text read aloud to you, our app has got you
          covered.
        </p>

        <h4>Key Features:</h4>
        <ol>
          <li>
            Uppercase/Lowercase Conversion: Easily convert your text to
            uppercase or lowercase with a single click, allowing you to change
            the case of your text based on your specific needs.
          </li>
          <li>
            Clear Text: Say goodbye to unwanted formatting! Our app enables you
            to clear any unnecessary formatting from your text, ensuring a clean
            and consistent look.
          </li>
          <li>
            Format Text: Personalize your text by applying various formatting
            options. Whether you want to emphasize certain words with bold or
            italics, create lists, add headings, or adjust the alignment, our
            app provides you with the flexibility to format your text exactly
            the way you want it.
          </li>
          <li>
            Listen to Text: Sometimes, hearing your text can help you catch
            errors or improve the flow. With our app's text-to-speech feature,
            you can listen to your text being read aloud, allowing you to
            identify any awkward phrasing or typos that may have slipped past
            your eyes.
          </li>
          <li>
            Find and Replace Text: Save time and effort by using our app's find
            and replace feature. Easily locate specific words or phrases within
            your text and replace them with alternative choices, ensuring
            accuracy and consistency throughout your content.
          </li>
        </ol>

        <p>
          Whether you're a writer, student, or professional, Your App Name
          offers a user-friendly interface and intuitive controls that make text
          manipulation a breeze. We understand that the details matter, and our
          app empowers you to refine your text to perfection.
        </p>

        <p>
          Start using Your App Name today and experience the convenience and
          efficiency of having a comprehensive text manipulation tool at your
          fingertips. Empower your words, enhance your communication, and unlock
          the full potential of your text.
        </p>
      </section>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; 2023 Your App Name. All rights reserved.
      </footer>
    </div>
  );
}
