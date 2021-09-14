import { Form, Formik } from "formik";
import TextField from "../forms/TextField";
import * as Yup from "yup";
import Button from "../utils/Button";

export default function MainlinePB() {
  //!!TRY THIS https://www.youtube.com/watch?v=me1kY_uFe5k
  return (
    <>
      <h2>Mainline</h2>
      <Formik
        initialValues={{
          test: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          test: Yup.string().required("This field is required."),
        })}
      >
        <Form>
          <TextField displayName="test" field="test"></TextField>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
}
