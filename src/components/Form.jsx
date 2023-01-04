import Input from "./Input";
import Radio from "./Radio";
import useForm from "../hooks/useForm";
 
function Form() {
  const { validate, handleChange, form, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="email"
          label="email"
          onChange={handleChange}
          value={form.email}
          error={validate.error.email}
        />
        <Input
          type="password"
          label="password"
          onChange={handleChange}
          value={form.password}
          error={validate.error.password}
        />
        <Radio
          options={["Male", "Female"]}
          label="sex"
          onChange={handleChange}
          value={form.sex}
          error={validate.error.sex}
        />
        <Input
          type="text"
          label="name"
          onChange={handleChange}
          value={form.name}
          error={validate.error.name}
        />
        <Input
          type="text"
          label="family"
          onChange={handleChange}
          value={form.family}
          error={validate.error.family}
        />
        <button
          style={{ padding: "15px" }}
          disabled={validate.status ? null : "disabled"}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;