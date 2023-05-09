
import React, { useReducer, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import Footer from '../Components/Footer';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  class10: '',
  admissionCollege: '',
  subjects: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      throw new Error();
  }
}

export default function Admission() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await axios.post('/admission', state);
      dispatch({ type: 'RESET' });
      setSuccess(true);
    } catch (error) {
      setErrors({ message: 'Error submitting admission form' });
    }
    setSubmitting(false);
  };

  const validate = () => {
    const errors = {};
    if (!state.name) {
      errors.name = 'Name is required';
    }
    if (!state.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = 'Email is invalid';
    }
    if (!state.phone) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(state.phone)) {
      errors.phone = 'Phone is invalid';
    }
    if (!state.address) {
      errors.address = 'Address is required';
    }
    if (!state.class10) {
      errors.class10 = 'Class 10 percentile is required';
    } else if (!/^\d{1,2}(\.\d{1,2})?$/.test(state.class10)) {
      errors.class10 = 'Class 10 percentile is invalid';
    }
    if (!state.admissionCollege) {
      errors.admissionCollege = 'Current admission college is required';
    }
    if (!state.subjects) {
      errors.subjects = 'Subject group is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <Box p="4">
      <Heading as="h1" size="lg" mb="4">
        Admission Form
      </Heading>
      {success ? (
        <Text color="green.500" mb="4">
          Admission form submitted successfully
        </Text>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb="4" isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={state.name}
              onChange={(event) =>
                dispatch({ type: 'UPDATE_FIELD', field: 'name', value: event.target.value })
              }
            />
            {errors.name && <Text color="red.500">{errors.name}</Text>}
          </FormControl>
          <FormControl id="email" mb="4" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={state.email}
              onChange={(event) =>
               dispatch({ type: 'UPDATE_FIELD', field: 'email', value: event.target.value })
             }
           />
           {errors.email && <Text color="red.500">{errors.email}</Text>}

        </FormControl>
        <FormControl id="phone" mb="4">
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            value={state.phone}
            onChange={(event) =>
              dispatch({ type: 'UPDATE_FIELD', field: 'phone', value: event.target.value })
            }
          /> {errors.phone && <Text color="red.500">{errors.phone}</Text>}

        </FormControl>
        <FormControl id="address" mb="4">
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            value={state.address}
            onChange={(event) =>
              dispatch({ type: 'UPDATE_FIELD', field: 'address', value: event.target.value })
            }
          /> {errors.address && <Text color="red.500">{errors.address}</Text>}

        </FormControl>
        <FormControl id="class10" mb="4">
          <FormLabel>Class 10 percentile</FormLabel>
          <Input
            type="Number"
            value={state.class10}
            onChange={(event) =>
              dispatch({ type: 'UPDATE_FIELD', field: 'class10', value: event.target.value })
            }
          /> {errors.class10 && <Text color="red.500">{errors.class10}</Text>}

        </FormControl>
        <FormControl id="admissionCollege" mb="4">
          <FormLabel> Current Admission College</FormLabel>
          <Input
            type="text"
            value={state.admissionCollege}
            onChange={(event) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'admissionCollege',
                value: event.target.value
              })
            }
          /> {errors.admissionCollege && <Text color="red.500">{errors.admissionCollege}</Text>}

        </FormControl>
        <FormControl id="subjects" mb="4">
          <FormLabel>subject  group (PCM or PCB )</FormLabel>
          <Input
            type="text"
            value={state.subjects}
            onChange={(event) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'subjects',
                value: event.target.value
              })
            }
          /> {errors.subjects && <Text color="red.500">{errors.subjects}</Text>}

          <Input type="submit" bg="blue.400"
          color="white"
          />
        </FormControl>
</form>)}
<Footer/>
</Box>)
}