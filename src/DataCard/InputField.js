import React from 'react'
import { useField } from 'react-form'

async function validateInput(input, instance) {
    if (!input) {
      return "Input is required";
    }
  
    return instance.debounce(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // All names are valid, so return a false error
      return false;
    }, 500);
}

export default function InputField() {
    const {
      meta: { error, isTouched, isValidating },
      getInputProps
    } = useField("input", {
      validate: validateInput
    });
  
    return (
      <>
        <textarea {...getInputProps()} />{" "}
        {isValidating ? (
          <em>Validating...</em>
        ) : isTouched && error ? (
          <em>{error}</em>
        ) : null}
      </>
    );
}
