import React from "react";
import { ConversationalForm } from "conversational-form";

export default function Form(params) {
  const ref = React.useRef(null);
  const cf = React.useRef(null);

  const formFields = React.useMemo(
    () => [
      {
        tag: "input",
        type: "text",
        name: "name",
        id: "name",
        "cf-questions": "What is your name?",
      },
      {
        tag: "fieldset",
        "cf-questions": "Hi {name}, Ready to take the survey?",
        name: "survey",
        children: [
          {
            tag: "input",
            name: "survey",
            type: "radio",
            "cf-label": "YES! Lets begin.",
            value: "Yes",
          },
        ],
      },

      {
        tag: "fieldset",
        name: "products",
        "cf-questions":
          "Which of the following makeup products do you use at least once a week?",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "products",
            "cf-label": "Face Powder",
          },
          {
            tag: "input",
            type: "radio",
            name: "products",
            "cf-label": "Concealer",
          },
          {
            tag: "input",
            type: "radio",
            name: "products",
            "cf-label": "Eye Shadow",
          },
          {
            tag: "input",
            type: "radio",
            name: "products",
            "cf-label": "Foundation",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "images",
        "cf-questions":
          "Which of the following makeup brands do you use at least once a week?",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "images",
            "cf-label": "Mac",
            "cf-image":
              "https://images.unsplash.com/photo-1596690636757-2b945da88bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwbWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            tag: "input",
            type: "radio",
            name: "images",
            "cf-label": "Bobbi Brown",
            "cf-image":
              "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbnR5JTIwYmVhdXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            tag: "input",
            type: "radio",
            name: "images",
            "cf-label": "Fenty Beauty",
            "cf-image":
              "https://images.unsplash.com/photo-1614692685185-82629456f309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVudHklMjBiZWF1dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "tryOut",
        "cf-questions": "How willing are you to try different makeup Products",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "tryOut",
            "cf-label": "Extremely Willing",
          },
          {
            tag: "input",
            type: "radio",
            name: "tryOut",
            "cf-label": "Slightly Willing",
          },
          {
            tag: "input",
            type: "radio",
            name: "tryOut",
            "cf-label": "Not Willing",
          },
        ],
      },
      {
        tag: "input",
        type: "text",
        name: "price",
        "cf-questions": "In a typical week, how much do you spend on makeup?",
      },
      {
        tag: "input",
        type: "text",
        name: "price",
        pattern: ".+@.+..+",
        "cf-questions":
          "If you want to stay updated on more surveys, please provide your email.",
        "cf-error": "Invalid Email",
      },
    ],
    []
  );

  React.useEffect(() => {
    cf.current = ConversationalForm.startTheConversation({
      options: {
        theme: "black",
        submitCallback: submitCallback,
        preventAutoFocus: true,
      },
      tags: formFields,
    });

    ref.current.appendChild(cf.current.el);

    return () => {
      cf.current.remove();
    };
  }, [formFields]);

  function submitCallback() {
    var formDataSerialized = cf.current.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    cf.current.addRobotChatResponse(
      "You are done. Check the dev console for form data output."
    );
  }
  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
