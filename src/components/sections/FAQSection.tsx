import React from "react";

export default function FAQSection() {
  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24">
      <section className="mb-32">
        <h2 className="mb-6 pl-5 text-4xl font-bold">FAQs</h2>

        <div id="collapse">
          {questionCell(
            "Is my 'private' protected?",
            "Of course. The filter is designed to work completely offline and there are no tracking ads in the app."
          )}
          {questionCell(
            "I find it hard to tolerate porn.",
            "We can offer you new solutions. Frankly speaking, you are making progress just by opening this page. If you are not sure, download and try first."
          )}
          {questionCell(
            "Does it address my sexuality?",
            "Zeboot is committed to diversity and keeps track of a wide range of content. If this does not meet your requirements, you can still customise your filter. Of course, requests for filters are also welcome!"
          )}
        </div>
      </section>
    </div>
  );
}

function questionCell(question: string, answer: string) {
  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <h3>{question}</h3>
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
