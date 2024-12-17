const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
