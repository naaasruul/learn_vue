<template>
  <Form @submit="handleSubmit">
    <div class="mb-3">
      <label for="name">Name</label>
      <Field name="name" :rules="[isRequired, validateName]" placeholder="enter your name" class="form-control" />
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

    <button class="btn btn-primary">
      Submit
    </button>
  </Form>
</template>

<script setup>

import { Field, Form, ErrorMessage, } from 'vee-validate'

const isRequired = (value) => {
  if (!value) {
    return 'This field is required!'
  } else {
    return true;
  }
}

const validateName = (value) => {
  if (value !== 'nas') {
    return true
  } else {
    return 'you nas!';
  }
}
</script>