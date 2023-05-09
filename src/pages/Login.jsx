import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, FormHelperText, Text } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        // perform registration request
        const response = await axios.post("YOUR_BACKEND_API_URL/register", { email, password });
        console.log(response.data); // handle successful registration response
      } else {
        // perform login request
        const response = await axios.post("YOUR_BACKEND_API_URL/login", { email, password });
        console.log(response.data); // handle successful login response
      }
      setErrorMessage(""); // clear any previous error messages
    } catch (error) {
      setErrorMessage(error.response.data.message); // display error message from server
    }
  };

  const validateEmail = () => {
    // simple email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = () => {
    // simple password validation
    return password.length >= 6;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormHelperText>Password must be at least 6 characters.</FormHelperText>
          </FormControl>

          {isRegistering ? (
            <Button type="submit" colorScheme="green" mt={4} disabled={!validateEmail() || !validatePassword()}>
              Register
            </Button>
          ) : (
            <Button type="submit" colorScheme="blue" mt={4}>
              Login
            </Button>
          )}

          <Text color="red.500" mt={4}>
            {errorMessage}
          </Text>

          {!isRegistering && (
            <Text mt={4} onClick={() => setIsRegistering(true)} style={{ cursor: "pointer" }}>
              Not registered yet? Click here to register.
            </Text>
          )}

          {isRegistering && (
            <Text mt={4} onClick={() => setIsRegistering(false)} style={{ cursor: "pointer"  ,color :"red"}}>
              Already registered? Click here to login.
            </Text>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default Login;
