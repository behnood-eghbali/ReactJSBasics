import React, {useContext} from 'react'
import { useForm } from 'react-form'
import { ResumeContext } from '../Contexts/ResumeContext'
import InputField from './InputField';

async function sendToFakeServer(values) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return values;
}

export default function Skill() {
  const content = useContext(ResumeContext)
  // Use the useForm hook to create a form instance
  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    onSubmit: async (values, instance) => {
      // onSubmit (and everything else in React Form)
      // has async support out-of-the-box
      await sendToFakeServer(values);
    },
    debugForm: true
  });

  return (
    <Form>
      <div>
        <label>
          Skill: <InputField defaultValue={content.skill} />
        </label>
      </div>
      <div>
        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </div>
      <div>
        <em>{isSubmitting ? "Submitting..." : null}</em>
      </div>
    </Form>
  );
}
