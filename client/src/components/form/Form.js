import React from 'react';
import ProjectSelect from '../project/ProjectSelect';
import ProjectInput from '../project/ProjectInput';
import './form.css';
function Form() {
  return (
    <>
      <form className='form'>
        <h2 className='title'>Project </h2>
        <ProjectSelect />
        <h2 className='title'>Project Details </h2>
        <ProjectInput />
      </form>
    </>
  );
}

export default Form;
