import * as n from "./AppointmentForm.styled";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
  addres: Yup.string()
    .trim()
    .min(8, "Address must contain at least 8 characters")
    .max(100, "Too long address")
    .required("Address is required"),
  phone: Yup.string()
    .trim()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: "Invalid Phone Number",
      excludeEmptyString: false,
    })
    .max(13, "Too long phone number")
    .required("The phone number is required"),
  childsAge: Yup.string()
    .trim()
    .max(15, "Please enter a child's sge")
    .required("Child's age is required"),
  time: Yup.string()
    .length(5)
    .matches(/(\d){2}:(\d){2}/, 'Hour must have this pattern "00:00"')
    .required("Meeting time is required"),
  //   time: Yup.number().required("Meeting time is required"),
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      "Please enter a valid email. For example jane@mail.com"
    )
    .required("Email is required"),
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(40, "Too long name")
    .required("Father's or mother's name is required"),
  comment: Yup.string()
    .trim()
    .min(10, "The comment should contain short information about your child")
    .required("The comment is required"),
});

export const AppointmentForm = ({ nanny }) => {
  return (
    <>
      <n.FormTitle>Make an appointment with a babysitter</n.FormTitle>
      <n.FormText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </n.FormText>
      <n.NannyWrapper>
        <n.Avatar src={nanny.avatar_url} alt={nanny.name} />
        <div>
          <n.Subtitle>Your nanny</n.Subtitle>
          <n.NannyName>{nanny.name}</n.NannyName>
        </div>
      </n.NannyWrapper>

      <Formik
        initialValues={{
          addres: "",
          phone: "+380",
          childsAge: "",
          time: "00:00",
          email: "",
          name: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        //   onSubmit={handleSubmit}
      >
        <Form>
          <n.FormWrapper>
            <n.Label>
              <n.Field name="addres" type="text" placeholder="Addres" />
              <n.ErrorMessage name="addres" component="span" required />
            </n.Label>
            <n.Label>
              <n.Field name="phone" type="tel" />
              <n.ErrorMessage name="phone" component="span" required />
            </n.Label>
            <n.Label>
              <n.Field name="childsAge" type="text" placeholder="Child's age" />
              <n.ErrorMessage name="childsAge" component="span" required />
            </n.Label>
            <n.Label>
              <n.Field name="time" type="time" placeholder="00:00" />
              <n.ErrorMessage name="time" component="span" required />
            </n.Label>
            <n.LongLabel>
              <n.LongField name="email" type="email" placeholder="Email" />
              <n.ErrorMessage name="email" component="span" required />
            </n.LongLabel>
            <n.LongLabel>
              <n.LongField
                name="name"
                type="text"
                placeholder="Father's or mother's name"
              />
              <n.ErrorMessage name="name" component="span" required />
            </n.LongLabel>
            <n.LongLabel>
              <n.TextArea
                as="textarea"
                name="comment"
                type="text"
                placeholder="Comment"
              />
              <n.ErrorMessage name="comment" component="span" required />
            </n.LongLabel>
          </n.FormWrapper>
          <n.SendButton type="submit">Send</n.SendButton>
        </Form>
      </Formik>
    </>
  );
};
