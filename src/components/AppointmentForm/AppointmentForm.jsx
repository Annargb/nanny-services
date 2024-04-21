import { Formik } from "formik";
import { appointmentValidationSchema } from "../../schemas/schemas";
import * as n from "./AppointmentForm.styled";

export const AppointmentForm = ({ nanny }) => {
  return (
    <>
      <n.TopContainer>
        <n.FormTitle>Make an appointment with a babysitter</n.FormTitle>
        <n.FormText>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </n.FormText>
        <n.NannyWrapper>
          <n.Avatar src={nanny.avatar_url} alt={nanny.name} />
          <div>
            <n.Subtitle>Your nanny</n.Subtitle>
            <n.NannyName>{nanny.name}</n.NannyName>
          </div>
        </n.NannyWrapper>
      </n.TopContainer>
      <n.OverflowScrollbarWrapper>
        <n.OverflowContainer>
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
            validationSchema={appointmentValidationSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              actions.resetForm();
              window.location.reload();
            }}
          >
            {({ values, setFieldValue }) => (
              <n.Form>
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
                    <n.Field
                      name="childsAge"
                      type="text"
                      placeholder="Child's age"
                    />
                    <n.ErrorMessage
                      name="childsAge"
                      component="span"
                      required
                    />
                  </n.Label>
                  <n.Label>
                    <n.Field
                      name="time"
                      type="time"
                      placeholder="00:00"
                      selected={values.time}
                      onChange={(event) => {
                        const { value } = event.target;
                        setFieldValue("time", value);
                      }}
                    />
                    <n.ErrorMessage name="time" component="span" required />
                  </n.Label>
                  <n.LongLabel>
                    <n.LongField
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
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
                  </n.LongLabel>
                </n.FormWrapper>
                <n.SendButton type="submit">Send</n.SendButton>
              </n.Form>
            )}
          </Formik>
        </n.OverflowContainer>
      </n.OverflowScrollbarWrapper>
    </>
  );
};
