

export const Input = ({ type, value, change, description }) => {
    const onChange = (e) => {
        const v = e.target.value 
        change(v)
    }
  return (
    <div>
      <input type={type} value={value} onChange={onChange} />
      <p>{description}</p>
    </div>
  );
}
