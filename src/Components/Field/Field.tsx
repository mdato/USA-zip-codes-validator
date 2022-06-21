import { useState } from "react";
import { Hint } from "react-autocomplete-hint";

const options = [
  "01234",
  "12345",
  "23456",
  "34567",
  "45678",
  "56789",
  "67891",
  "78912",
  "89123",
  "95241"
];

const Field = () => {
  const [inputText, setInputText] = useState<string>("");

  //codigos validos 12345 0 12345-1234
  const validate = /^\d{5}?$/;

  const response = {
    invalid: "Invalid Zip Code",
    valid: "Valid Zip Code"
  };

  return (
    <div className="ing">
      <h1>USA Zip Codes Validator</h1>
      <h3>Example of valid code: 12345</h3>

      <Hint options={options}>
        <input
          type="number"
          value={inputText}
          placeholder="#####"
          autoFocus
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </Hint>

      {!!validate.test(inputText) ? (
        <h1 className="success">{response.valid}</h1>
      ) : (
        <h1 className="fail">{response.invalid}</h1>
      )}
    </div>
  );
};

export default Field;
