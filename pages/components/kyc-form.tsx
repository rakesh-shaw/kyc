import {Formik, Field, Form} from 'formik'
import styles from './kyc-form.module.css'

interface Values {
    username: string;
    password: string;
}

export default function KycForm() {
    return (
      <div className={styles.login_box + ' p-3'}>
        <h1 className="display-6 mb-3">KYC Form</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form>
            <div className="mb-3">
              <Field className="form-control" id="username" name="username" placeholder="Enter Your Name" aria-describedby="usernameHelp" />
            </div>
  
            <div className="mb-3">
              <Field className="form-control" id="address" name="address" placeholder="Enter Your Address" type="text" />
            </div>

            <div className="mb-3">
                <Field className="form-control" id="email" name="email" placeholder="Enter Your Email" type="text" />
            </div>

            <div className="mb-3">
                <Field className="form-control" id="phone" name="phone" placeholder="Enter Your Phone Number" type="number" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  };