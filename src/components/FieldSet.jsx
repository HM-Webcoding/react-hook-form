const FieldSet = ({ label, children }) => {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && (
        <legend className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          {label}
        </legend>
      )}
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
};

export default FieldSet;
